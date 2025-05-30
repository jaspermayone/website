// pages/api/commits.ts (for Pages Router) or app/api/commits/route.ts (for App Router)
import { NextApiRequest, NextApiResponse } from "next";

interface GitHubCommitResponse {
  sha: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
  };
  html_url: string;
  author?: {
    avatar_url: string;
  } | null;
}

interface Commit {
  hash: string;
  date: string;
  author: string;
  email: string;
  message: string;
  url: string;
  avatar: string | null;
}

// For App Router (app/api/commits/route.ts)
export async function GET(): Promise<Response> {
  try {
    const commits = await getGitHubCommits();
    return Response.json(commits);
  } catch (error) {
    console.error("Error fetching commits:", error);
    return Response.json({ error: "Failed to fetch commits" }, { status: 500 });
  }
}

async function getGitHubCommits(limit: number = 50): Promise<Commit[]> {
  const owner = "jaspermayone";
  const repo = "website";

  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "NextJS-Changelog-App",
    };

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${limit}`,
      { headers },
    );

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error(
          "GitHub API rate limit exceeded or repository access denied",
        );
      }
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`,
      );
    }

    const commits: GitHubCommitResponse[] = await response.json();

    return commits.map((commit) => ({
      hash: commit.sha,
      date: commit.commit.author.date,
      author: commit.commit.author.name,
      email: commit.commit.author.email,
      message: commit.commit.message,
      url: commit.html_url,
      avatar: commit.author?.avatar_url || null,
    }));
  } catch (error) {
    console.error("GitHub API request failed:", error);
    throw error;
  }
}
