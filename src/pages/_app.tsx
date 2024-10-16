import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { AnimatePresence } from "framer-motion";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <script
        defer
        src="https://umami.jaspermayone.com/script.js"
        data-website-id="3f757e82-5140-4634-9098-82223741ef08"
      ></script>
      <Script
        src="https://kit.fontawesome.com/96163f3b63.js"
        crossOrigin="anonymous"
      />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="jaspermayone.com" />

        <title>Jasper Mayone</title>
        <meta name="description" content="Personal Website of Jasper Mayone" />
        <meta name="keywords" content="Jasper, Mayone, Jasper Mayone" />

        <meta property="og:url" content="https://jaspermayone.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Jasper Mayone" key="title" />
        <meta
          property="og:description"
          content="Personal Website of Jasper Mayone"
          key="description"
        />
        {/*  <meta property="og:image" content="image_url_here" key="image" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jaspermayone.com" />
        <meta property="twitter:url" content="https://jaspermayone.com/" />
        <meta name="twitter:title" content="Jasper Mayone" />
        <meta
          name="twitter:description"
          content="Personal Website of Jasper Mayone"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=3"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=3"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=3"
        />
        <link rel="manifest" href="/site.webmanifest?v=3" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=3"
          color="#2e2e2e"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}
