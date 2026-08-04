// JSON.stringify does not HTML-escape, so a "</script>" or "<" in the data
// could break out of the surrounding <script> tag. Escaping these characters
// as unicode sequences keeps the output valid JSON and safe to inline.
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}
