import "@/styles/globals.css"; // Add this line
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";

const cuteNotes = localFont({
  src: [
    {
      path: "../../public/fonts/CuteNotes.ttf",
      style: "normal",
    },
  ],
  variable: "--font-cuteNotes",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Jasper Mayone",
    default: "Jasper Mayone",
  },
  description:
    "Personal Website of Jasper Mayone. A circus performer, coder, and photographer.",
  applicationName: "jaspermayone.com",
  keywords: ["Jasper", "Mayone", "Jasper Mayone"],
  authors: [
    {
      name: "Jasper Mayone",
      url: "https://jaspermayone.com",
    },
  ],
  creator: "Jasper Mayone",
  publisher: "Jasper Mayone",
  // verification: {
  // google:
  // },
  other: {
    "msapplication-TileColor": "#603cba",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${cuteNotes.variable}`}>
      <head>
        <script
          defer
          src="https://umami.hogwarts.dev/script.js"
          data-website-id="00bdf44f-0b0b-4c26-bc25-730672583d82"
        />
        <link
          rel="preconnect"
          href="https://ka-f.fontawesome.com"
          crossOrigin="anonymous"
        />
        <meta property="og:image" content="https://jaspermayone.com/api/og" />
        <link rel="icon" href="/icon" sizes="any" />
        <link rel="me" href="https://github.com/jaspermayone" />
        <link rel="me" href="https://www.linkedin.com/in/jaspermayone" />
        <link rel="me" href="https://bsky.app/profile/jaspermayone.com" />
        <link rel="me" href="https://www.threads.net/@jasper.mayone" />
        <link rel="me" href="https://x.com/jaspermayone" />
        <link rel="me" href="https://x.jaspermayone.com" />
        <link rel="me" href="https://www.youtube.com/@jasper.does.circus" />
        <link rel="me" href="https://buymeacoffee.com/jaspermayone" />
        <link rel="me" href="https://www.reddit.com/user/j-dogcoder" />
        <link rel="me" href="https://matrix.to/#/@jasper.mayone:matrix.org" />
      </head>
      <body className={`${cuteNotes.variable} font-sans`}>
        <Script
          src="https://kit.fontawesome.com/96163f3b63.js"
          crossOrigin="anonymous"
        />
        <AnimatePresence>{children}</AnimatePresence>
        <SpeedInsights />
      </body>
    </html>
  );
}
