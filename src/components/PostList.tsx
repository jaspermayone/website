"use client";

import { formatRelative, format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { useState, useEffect } from "react";

interface Post {
  text: string;
  createdAt: string;
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCount, setShowCount] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const api_url =
          "https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=jaspermayone.com&collection=a.status.update";

        const res = await fetch(api_url);
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data = await res.json();
        const records = data.records;

        // records have value objects. set new var to a map of all the objects
        const fetchedPosts = records.map((record: any) => record.value);
        setPosts(fetchedPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
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

  if (loading) {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-600"></div>
          <span className="ml-3 text-gray-600">Loading updates...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-center py-8">
          <div className="text-red-600">
            <p className="font-medium">Failed to load updates</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  const postsToShow = posts.slice(0, showCount);
  const hasMore = posts.length > showCount;

  return (
    <div className="space-y-3">
      {postsToShow.map((post, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
          <div className="flex-1">
            <p className="text-gray-800">{post.text}</p>
            <p className="text-xs text-gray-500 mt-1">
              {formatTimeAgo(post.createdAt)}
            </p>
          </div>
        </div>
      ))}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setShowCount((prev) => prev + 5)}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}
