/** @type {import('next').NextConfig} */
const pkg = require("./package.json");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

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

// Store routes in memory during build
const ROUTES_FILE = path.join(process.cwd(), ".next", "routes.json");

// Ensure routes directory exists
fs.mkdirSync(path.dirname(ROUTES_FILE), { recursive: true });

function scanPages() {
  const appDir = path.join(process.cwd(), "src", "app");
  const pages = glob.sync("**/page.{ts,tsx,js,jsx}", { cwd: appDir });

  const routes = pages
    .map((page) => {
      const route = path.dirname(page) === "." ? "" : path.dirname(page);
      return route
        .replace(/\\/g, "/") // Normalize slashes
        .replace(/^\.$/, ""); // Replace single dot with empty string
    })
    .filter(
      (route) =>
        !route.startsWith("api/") &&
        !route.includes("[") &&
        !route.includes("_") &&
        route !== "sitemap.xml" &&
        route !== "404" &&
        route !== "500",
    )
    .sort();

  fs.writeFileSync(ROUTES_FILE, JSON.stringify(routes, null, 2));
  return routes;
}

const nextConfig = {
  env: {
    APP_VERSION: pkg.version,
    COMMIT_HASH: commitHash,
    FULL_COMMIT_HASH: fullcommitHash,
    COMMIT_DATE: commitDate,
  },
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      // Scan pages at the start of server compilation
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.beforeCompile.tap("RouteScanner", () => {
            scanPages();
          });
        },
      });
    }
    return config;
  },
};

module.exports = nextConfig;
