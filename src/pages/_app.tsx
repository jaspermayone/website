import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <Component {...pageProps} />
      <Script src="https://umami.jaspermayone.com/script.js" data-website-id={process.env.UMAMI_PROJECT_ID} />
      <a rel="me" href="https://mastodon.social/@jaspermayone">Mastodon</a>
    </>
  )
}
