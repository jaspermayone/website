"use client";

import { useState, useEffect } from "react";
import { RepoStats } from "@/lib/types";

export function useGitHubStats(repos: string[]) {
  const [stats, setStats] = useState<Record<string, RepoStats>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (repos.length === 0) {
      setLoading(false);
      return;
    }

    const fetchStats = async () => {
      try {
        const response = await fetch(
          `/api/github-stats?repos=${repos.join(",")}`
        );
        if (!response.ok) throw new Error("Failed to fetch stats");
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repos.join(",")]);

  return { stats, loading, error };
}
