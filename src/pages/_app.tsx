import type { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
        <meta name="referrer" content="strict-origin" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
