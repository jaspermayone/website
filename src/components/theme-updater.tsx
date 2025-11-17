"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeUpdater() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Define colors for each theme
    const themeColors = {
      light: "#f8fbf8", // lite color from tailwind config
      dark: "#151922", // dark color from tailwind config
    };

    // Get the appropriate color
    const color =
      resolvedTheme === "dark" ? themeColors.dark : themeColors.light;

    // Update the meta theme-color tag
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color);
    }

    // Update the apple-mobile-web-app-status-bar-style
    const appleMetaTag = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]',
    );
    if (appleMetaTag) {
      appleMetaTag.setAttribute(
        "content",
        resolvedTheme === "dark" ? "black-translucent" : "default",
      );
    }
  }, [resolvedTheme]);

  return null;
}
