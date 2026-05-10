"use client";

import { useReducer, useEffect } from "react";
import { RepoStats } from "@/lib/types";

type StatsState =
  | { status: "loading"; stats: Record<string, RepoStats> }
  | { status: "success"; stats: Record<string, RepoStats> }
  | { status: "error"; stats: Record<string, RepoStats>; error: string };

type StatsAction =
  | { type: "success"; data: Record<string, RepoStats> }
  | { type: "error"; message: string }
  | { type: "reset" };

function statsReducer(state: StatsState, action: StatsAction): StatsState {
  if (action.type === "success")
    return { status: "success", stats: action.data };
  if (action.type === "error")
    return { status: "error", stats: state.stats, error: action.message };
  return { status: "loading", stats: {} };
}

export function useGitHubStats(repos: string[]) {
  const [state, dispatch] = useReducer(statsReducer, {
    status: "loading",
    stats: {},
  });

  useEffect(() => {
    if (repos.length === 0) {
      dispatch({ type: "success", data: {} });
      return;
    }

    dispatch({ type: "reset" });
    const controller = new AbortController();

    const fetchStats = async () => {
      try {
        const response = await fetch(
          `/api/github-stats?repos=${repos.join(",")}`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error("Failed to fetch stats");
        const data = await response.json();
        dispatch({ type: "success", data });
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        dispatch({
          type: "error",
          message: err instanceof Error ? err.message : "Unknown error",
        });
      }
    };

    fetchStats();
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repos.join(",")]);

  return {
    stats: state.stats,
    loading: state.status === "loading",
    error: state.status === "error" ? state.error : null,
  };
}
