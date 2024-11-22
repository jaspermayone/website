import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import "@/styles/globals.css"; // Add this line

export const metadata: Metadata = {
  title: {
    template: "%s | Jasper Mayone",
    default: "Jasper Mayone",
  },
  description: "Personal Website of Jasper Mayone",
  applicationName: "jaspermayone.com",
  keywords: ["Jasper", "Mayone", "Jasper Mayone"],
  manifest: "/manifest.json",
  icons: {
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
    icon: [
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico?v=3" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg?v=3",
        color: "#2e2e2e",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://jaspermayone.com/",
    title: "Jasper Mayone",
    description: "Personal Website of Jasper Mayone",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasper Mayone",
    description: "Personal Website of Jasper Mayone",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#ffffff",
  other: {
    "msapplication-TileColor": "#603cba",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.jaspermayone.com/script.js"
          data-website-id="3f757e82-5140-4634-9098-82223741ef08"
        />
      </head>
      <body>
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
