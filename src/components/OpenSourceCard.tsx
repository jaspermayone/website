"use client";

import { Star, GitFork, ArrowUpRight } from "lucide-react";
import { ExternalLink } from "@/components/ExternalLink";
import { RepoStats } from "@/lib/types";
import { SiGithub } from "react-icons/si";

// GitHub linguist language colors
const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Ruby: "#701516",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  HTML: "#e34c26",
  CSS: "#663399",
  Shell: "#89e051",
  Lua: "#000080",
  Dart: "#00B4AB",
  Scala: "#c22d40",
  Elixir: "#6e4a7e",
  Haskell: "#5e5086",
  Vue: "#41b883",
  SCSS: "#c6538c",
  Dockerfile: "#384d54",
  Makefile: "#427819",
};

function getLanguageColor(language: string | null): string {
  if (!language) return "#56ba8e"; // Site green fallback
  return languageColors[language] || "#56ba8e"; // Site green fallback
}

interface OpenSourceCardProps {
  name: string;
  description: string;
  repo: string;
  stats?: RepoStats;
  loading?: boolean;
  featured?: boolean;
  status?: "active" | "beta" | "deprecated" | "alpha";
  liveUrl?: string;
}

export function OpenSourceCard({
  name,
  description,
  repo,
  stats,
  loading,
  featured,
  status,
  liveUrl,
}: OpenSourceCardProps) {
  const repoUrl = `https://github.com/${repo}`;

  return (
    <div
      className={`rounded-lg border p-4 transition-all hover:shadow-md ${
        featured
          ? "border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-900/10"
          : "border-gray-200 bg-white dark:border-gray-700 dark:bg-slate-800"
      }`}
    >
      <div className="mb-2 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          {status === "alpha" && (
            <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              Alpha
            </span>
          )}
          {status === "beta" && (
            <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
              Beta
            </span>
          )}
          {status === "deprecated" && (
            <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-800 dark:bg-red-900/30 dark:text-red-300">
              Deprecated
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {liveUrl && (
            <ExternalLink
              href={liveUrl}
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              aria-label="Visit live site"
            >
              <ArrowUpRight className="h-4 w-4" />
            </ExternalLink>
          )}
          <ExternalLink
            href={repoUrl}
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            aria-label="View repository"
          >
            <SiGithub className="h-4 w-4" />
          </ExternalLink>
        </div>
      </div>

      <p className="mb-3 text-sm text-gray-600 dark:text-white/70">
        {description}
      </p>

      {/* Stats row */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
        {loading ? (
          <span className="animate-pulse">Loading stats...</span>
        ) : stats && !stats.error ? (
          <>
            {stats.language && (
              <span className="flex items-center gap-1">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: getLanguageColor(stats.language) }}
                />
                {stats.language}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              {stats.stars}
            </span>
            {stats.forks > 0 && (
              <span className="flex items-center gap-1">
                <GitFork className="h-3 w-3" />
                {stats.forks}
              </span>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
