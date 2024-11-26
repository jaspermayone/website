// utils/cleanNewsletter.ts

export function processNewsletterHtml(html: string): {
  cleanHtml: string;
  previewContent: string;
} {
  // Ensure we have input
  if (!html) {
    return {
      cleanHtml: "",
      previewContent: "",
    };
  }

  // Find content divs with actual text content
  const contentDivs =
    html.match(
      /<div[^>]*?style="[^"]*?font-family:ABeeZee[^"]*?"[^>]*?>[\s\S]*?<\/div>/g,
    ) || [];

  // Extract meaningful text content
  const meaningfulContent = contentDivs
    .map((div) => {
      const textOnly = div
        .replace(/<[^>]*>/g, " ") // Remove HTML tags
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/\s+/g, " ")
        .trim();

      // Only keep divs with actual content
      return textOnly &&
        !textOnly.includes("xmlns:") &&
        !textOnly.includes("@import")
        ? textOnly
        : "";
    })
    .filter((text) => text.length > 0);

  // Create preview from the meaningful content
  const previewContent =
    meaningfulContent.slice(0, 3).join(" ").slice(0, 200) + "...";

  // For the clean HTML, keep the original HTML structure but remove the footer
  const cleanHtml = html.replace(
    /<span class="opt-in-explanation"[\s\S]*?<\/span>[\s\S]*?$/,
    `<div style="text-align: center; padding: 20px 0; color: #666;">
        <p>Subscribe to these newsletters via RSS at <a href="/newsletters/rss.xml" style="color: #0066cc;">jaspermayone.com/newsletters/rss.xml</a></p>
      </div>`,
  );

  return {
    cleanHtml,
    previewContent: previewContent || "Preview not available",
  };
}
