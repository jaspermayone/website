import { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Document() {
  return (
    <Html lang="en">
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self'; img-src https://*; child-src 'none';"
      />
      <Head />
      <body>
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </Html>
  );
}
