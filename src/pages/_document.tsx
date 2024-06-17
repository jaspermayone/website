import { SpeedInsights } from "@vercel/speed-insights/next";
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script defer src="https://umami.purplebubble.org/script.js" data-website-id="dcf09d4f-b160-4686-b316-66caa38ffb89"/>
        <SpeedInsights />
      </body>
    </Html>
  );
}
