#!/usr/bin/env bun
/**
 * Submit all site URLs to IndexNow after a build.
 * Reads public/sitemap.xml to get the URL list automatically.
 *
 * Usage:
 *   bun run scripts/submit-indexnow.ts
 *
 * Docs: https://www.indexnow.org/documentation
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://jaspermayone.com";
const INDEXNOW_KEY = "b50015c50401484e98e280f0981a9a69";
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

function parseSitemapUrls(xml: string): string[] {
  const matches = xml.matchAll(/<loc>(.*?)<\/loc>/g);
  return [...matches].map((m) => m[1].trim());
}

const sitemapPath = join(process.cwd(), "public", "sitemap.xml");
let urls: string[];

try {
  const xml = readFileSync(sitemapPath, "utf-8");
  urls = parseSitemapUrls(xml);
} catch {
  console.error(
    "❌ Could not read public/sitemap.xml — run `bun run build` first."
  );
  process.exit(1);
}

if (urls.length === 0) {
  console.error("❌ No URLs found in sitemap.");
  process.exit(1);
}

console.log(`📋 Found ${urls.length} URLs to submit`);

const payload = {
  host: new URL(SITE_URL).hostname,
  key: INDEXNOW_KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
};

const response = await fetch(INDEXNOW_ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

if (response.ok || response.status === 202) {
  console.log(`✅ IndexNow submission accepted (HTTP ${response.status})`);
  console.log(`   Submitted ${urls.length} URLs to ${INDEXNOW_ENDPOINT}`);
} else {
  const body = await response.text().catch(() => "");
  console.error(`❌ Submission failed: HTTP ${response.status}`);
  if (body) console.error(`   ${body}`);
  process.exit(1);
}
