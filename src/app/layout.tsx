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
  viewport: "width=device-width, initial-scale=1",
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
