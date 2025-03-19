/** @type {import('next').NextConfig} */
const pkg = require("./package.json");
const childProcess = require("child_process");

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

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/socraticaW25",
        destination: "/?socraticaW25=true",
        permanent: false,
        basePath: false,
      },
      {
        source: "/github",
        destination: "github.jaspermayone.com",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "linkedin.jaspermayone.com",
        permanent: true,
      },
      {
        source: "/bluesky",
        destination: "https://bluesky.jaspermayone.com",
        permanent: true,
      },
      {
        source: "/threads",
        destination: "https://threads.jaspermayone.com",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.jaspermayone.com",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.jaspermayone.com",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://youtube.jaspermayone.com",
        permanent: true,
      },
      {
        source: "/coffee",
        destination: "https://coffee.jaspermayone.com",
        permanent: true,
      },
      {
        source: "/reddit",
        destination: "https://reddit.jaspermayone.com",
        permanent: true,
      },
      {
        source: "/matrix",
        destination: "https://matrix.jaspermayone.com",
        permanent: true,
      },
      {
        source: "/devto",
        destination: "https://devto.jaspermayone.com",
        permanent: true,
      },
      {
        source: "/hackerone",
        destination: "https://hackerone.jaspermayone.com",
        permanent: true,
      },
    ];
  },
  // Bun-specific optimizations
  experimental: {
    optimizePackageImports: ["@opentelemetry/api", "ua-parser-js"],
    // Turbo mode for faster builds
    turbo: {
      rules: {
        // Optimize for Bun's transpiler
        "*.{js,jsx,ts,tsx}": ["bun-loader"],
      },
    },
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
    remotePatterns: [],
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
