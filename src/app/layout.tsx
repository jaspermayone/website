import "@/styles/globals.css"; // Add this line
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

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
    <html lang="en" className="light">
      <head>
        <meta property="og:image" content="https://jaspermayone.com/api/og" />
        <link rel="icon" href="/icon" sizes="any" />
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
