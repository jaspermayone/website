/** @type {import('next').NextConfig} */
const pkg = require("./package.json");
const childProcess = require("child_process");
import { redirects as rees } from "./src/lib/defs";

// Get git information
const getGitInfo = () => {
  try {
    return {
      commitHash: childProcess
        .execSync('git log --pretty=format:"%h" -n1')
        .toString()
        .trim(),
      fullCommitHash: childProcess
        .execSync('git log --pretty=format:"%H" -n1')
        .toString()
        .trim(),
      commitDate: childProcess
        .execSync("git log -1 --format=%cd")
        .toString()
        .trim(),
    };
  } catch (error) {
    // @ts-expect-error
    console.warn("Failed to get git info:", error.message);
    return {
      commitHash: "unknown",
      fullCommitHash: "unknown",
      commitDate: new Date().toISOString(),
    };
  }
};

const { commitHash, fullCommitHash, commitDate } = getGitInfo();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

interface NextRedirectItem {
  source: string;
  destination: string;
  permanent: boolean;
}

const nextConfig = {
  productionBrowserSourceMaps: false,
  experimental: {
    serverSourceMaps: false,
    optimizePackageImports: ["@opentelemetry/api", "ua-parser-js"],
  },
  // Turbo mode for faster builds
  turbopack: {},
  async redirects() {
    let redirects: NextRedirectItem[] = [];

    for (let redirect of rees) {
      if (redirect.slashToLink) {
        // newDestination is redirect.destination but with ?utm_source=jaspermayone.com&utm_medium=referral
        // in some cases a redirect already has query parameters, so we need to merge the utm parameters instead of just appending them

        // Ensure destination ends with / if it doesn't have a path
        let dest = redirect.destination;
        if (
          !dest.includes("?") &&
          !dest.endsWith("/") &&
          new URL(dest).pathname === "/"
        ) {
          dest = dest + "/";
        }

        let url = new URL(dest);
        url.searchParams.set("utm_source", "jaspermayone.com");
        url.searchParams.set("utm_medium", "referral");
        let newDestination = url.toString();

        redirects.push({
          source: "/to/" + redirect.slug,
          destination: newDestination,
          permanent: true,
        });
      }
    }

    let someOtherRedirects = [
      {
        source: "/ss",
        destination: "/?socraticaW25=true",
        permanent: false,
      },
      {
        source: "/wit",
        destination: "/?wit=true",
        permanent: false,
      },
      {
        source: "/pwl",
        destination: "/?pwl=true",
        permanent: false,
      },
      {
        source: "/pd",
        destination: "/?pd=true",
        permanent: false,
      },
      {
        source: "/patchwork",
        destination: "/?pwl=true",
        permanent: false,
      },
      {
        source: "/phishdirectory",
        destination: "/?pd=true",
        permanent: false,
      },
      {
        source: "/mlh",
        destination: "/?mlh=true",
        permanent: false,
      },
      {
        source: "/repo",
        destination: "https://github.com/jaspermayone/website",
        permanent: true,
      },
      {
        source: "/hello",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/defaults",
        destination: "/uses",
        permanent: true,
      },
      {
        source: "/tip",
        destination: "/to/buy-me-a-coffee",
        permanent: true,
      },
      {
        source: "/coffee",
        destination: "/to/buy-me-a-coffee",
        permanent: true,
      },
      {
        source: "/pay",
        destination: "/to/buy-me-a-coffee",
        permanent: true,
      },
      {
        source: "/cv",
        destination: "/to/cv",
        permanent: true,
      },
      {
        source: "/resume",
        destination: "/to/cv",
        permanent: true,
      },
    ];

    redirects.push(...someOtherRedirects);

    return redirects;
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jasper.cv",
      },
    ],
    minimumCacheTTL: 60,
  },
  env: {
    APP_VERSION: pkg.version,
    COMMIT_HASH: commitHash,
    FULL_COMMIT_HASH: fullCommitHash,
    COMMIT_DATE: commitDate,
  },
  reactStrictMode: true,
  // Additional Bun-friendly settings
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Use Bun for server-side code
      config.optimization = {
        ...config.optimization,
        minimize: true,
      };
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
