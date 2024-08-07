import { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Document() {
  return (
    <Html lang="en">
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self'; img-src https://*; child-src 'none';"
      />
      <meta
        http-equiv="Strict-Transport-Security"
        content="max-age=63072000; includeSubDomains; preload"
      />
      <meta http-equiv="X-Frame-Options" content="DENY" />
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />
      <meta name="referrer" content="strict-origin"/>
      <Head />
      <body>
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </Html>
  );
}
