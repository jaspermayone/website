"use client";

import { formatRelative } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { useEffect, useReducer, useState } from "react";

interface Post {
  text: string;
  createdAt: string;
}

type FetchState =
  | { status: "loading" }
  | { status: "success"; posts: Post[] }
  | { status: "error"; message: string };

type FetchAction =
  | { type: "success"; posts: Post[] }
  | { type: "error"; message: string };

function fetchReducer(_: FetchState, action: FetchAction): FetchState {
  if (action.type === "success")
    return { status: "success", posts: action.posts };
  return { status: "error", message: action.message };
}

export default function PostList() {
  const [fetchState, dispatch] = useReducer(fetchReducer, {
    status: "loading",
  });
  const [showCount, setShowCount] = useState(5);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPosts = async () => {
      try {
        const api_url =
          "https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=jaspermayone.com&collection=a.status.update";

        const res = await fetch(api_url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data = await res.json();
        const posts = data.records.map((record: any) => record.value);
        dispatch({ type: "success", posts });
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        dispatch({
          type: "error",
          message: err instanceof Error ? err.message : "Failed to fetch posts",
        });
      }
    };

    fetchPosts();
    return () => controller.abort();
  }, []);

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const relative = formatRelative(date, new Date());

    // If the relative format shows just a date (like "last Friday"), add the time in user's timezone
    if (
      relative.includes("last ") ||
      relative.includes("yesterday") ||
      (!relative.includes("at ") && !relative.includes("ago"))
    ) {
      const timeInUserTz = formatInTimeZone(date, userTimeZone, "h:mm a zzz");
      return `${relative} at ${timeInUserTz}`;
    }

    return relative;
  };

  if (fetchState.status === "loading") {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-center py-8">
          <div className="size-6 animate-spin rounded-full border-b-2 border-zinc-600"></div>
          <span
            className="ml-3 text-zinc-600"
            style={{ fontFamily: "var(--font-balgin)" }}
          >
            Loading updates…
          </span>
        </div>
      </div>
    );
  }

  if (fetchState.status === "error") {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-center py-8">
          <div className="text-red-600">
            <p
              className="font-medium"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              Failed to load updates
            </p>
            <p className="mt-1 text-sm">{fetchState.message}</p>
          </div>
        </div>
      </div>
    );
  }

  const postsToShow = fetchState.posts.slice(0, showCount);
  const hasMore = fetchState.posts.length > showCount;

  return (
    <div className="space-y-3">
      {postsToShow.map((post) => (
        <div key={post.createdAt} className="flex items-start gap-3">
          <div className="mt-2 size-2 shrink-0 rounded-full bg-zinc-400"></div>
          <div className="flex-1">
            <p
              className="text-zinc-800"
              style={{ fontFamily: "var(--font-balgin)" }}
            >
              {post.text}
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              {formatTimeAgo(post.createdAt)}
            </p>
          </div>
        </div>
      ))}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setShowCount((prev) => prev + 5)}
            className="rounded-md px-4 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-800"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}
