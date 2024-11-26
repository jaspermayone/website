"use client";

import { useState } from "react";
import type { Newsletter } from "@/lib/types";

export default function NewsletterContent({
  newsletter,
}: {
  newsletter: Pick<Newsletter, "id" | "htmlContent">;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const preview = newsletter.htmlContent.replace(/<[^>]*>/g, "").slice(0, 200);

  if (isExpanded) {
    return (
      <div>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: newsletter.htmlContent }}
        />
        <button
          onClick={() => setIsExpanded(false)}
          className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
        >
          Show less ↑
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="prose max-w-none line-clamp-3 mb-4">{preview}...</div>
      <button
        onClick={() => setIsExpanded(true)}
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        Read more →
      </button>
    </div>
  );
}
