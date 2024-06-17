import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://umami.purplebubble.org/script.js" data-website-id="dcf09d4f-b160-4686-b316-66caa38ffb89" />
    </>
  )
}
