/** @type {import('next').NextConfig} */
const pkg = require("./package.json");

// Get git information
const commitHash = require("child_process")
  .execSync('git log --pretty=format:"%h" -n1')
  .toString()
  .trim();
const fullcommitHash = require("child_process")
  .execSync('git log --pretty=format:"%H" -n1')
  .toString()
  .trim();
const commitDate = require("child_process")
  .execSync("git log -1 --format=%cd")
  .toString()
  .trim();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  swcMinify: true, // Uses SWC minifier instead of Terser (faster)
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Removes console.logs in production
  },
  transpilePackages: ["@arcjet/runtime"],
  experimental: {
    turbo: {},
  },
  env: {
    APP_VERSION: pkg.version,
    COMMIT_HASH: commitHash,
    FULL_COMMIT_HASH: fullcommitHash,
    COMMIT_DATE: commitDate,
  },
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);
