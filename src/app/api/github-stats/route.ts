import { NextRequest } from "next/server";
import { RepoStats } from "@/lib/types";

// Cache duration in seconds (1 hour to avoid rate limits)
const CACHE_DURATION = 3600;

// In-memory cache with timestamps
const cache = new Map<string, { data: RepoStats; timestamp: number }>();

interface GitHubRepoResponse {
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  archived: boolean;
  license: {
    spdx_id: string;
  } | null;
}

async function fetchRepoStats(owner: string, repo: string): Promise<RepoStats> {
  const cacheKey = `${owner}/${repo}`;
  const cached = cache.get(cacheKey);

  // Return cached data if still valid
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION * 1000) {
    return cached.data;
  }

  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "JasperMayone-Website",
    };

    // Add auth token if available (increases rate limit from 60 to 5000/hr)
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers,
        next: { revalidate: CACHE_DURATION },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data: GitHubRepoResponse = await response.json();

    const stats: RepoStats = {
      stars: data.stargazers_count,
      forks: data.forks_count,
      language: data.language,
      topics: data.topics || [],
      lastUpdated: data.updated_at,
      archived: data.archived,
      license: data.license?.spdx_id || null,
    };

    // Update cache
    cache.set(cacheKey, { data: stats, timestamp: Date.now() });

    return stats;
  } catch (error) {
    console.error(`Failed to fetch stats for ${owner}/${repo}:`, error);
    return {
      stars: 0,
      forks: 0,
      language: null,
      topics: [],
      lastUpdated: "",
      archived: false,
      license: null,
      error: true,
    };
  }
}

export async function GET(request: NextRequest): Promise<Response> {
  const searchParams = request.nextUrl.searchParams;
  const repos = searchParams.get("repos"); // Comma-separated: "owner/repo,owner/repo"

  if (!repos) {
    return Response.json({ error: "Missing repos parameter" }, { status: 400 });
  }

  const repoList = repos.split(",").filter(Boolean);

  if (repoList.length > 20) {
    return Response.json({ error: "Too many repos (max 20)" }, { status: 400 });
  }

  const results: Record<string, RepoStats> = {};

  // Fetch all repos in parallel
  await Promise.all(
    repoList.map(async (repoPath) => {
      const [owner, repo] = repoPath.trim().split("/");
      if (owner && repo) {
        results[repoPath] = await fetchRepoStats(owner, repo);
      }
    })
  );

  return Response.json(results, {
    headers: {
      "Cache-Control": `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate`,
    },
  });
}
