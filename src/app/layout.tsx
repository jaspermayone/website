import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import PageTransitionLayout from "@/components/PageTransitionLayout";
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
