import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greeen: "#56ba8e",
        linkHover: "#188052",
        pinkk: "#ed68ab",
        pinkkDark: "#ad2f6f",
        lite: "#f8fbf8",
        dark: "#151922",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "cute-notes": "var(--font-cuteNotes)",
        balgin: "var(--font-balgin)",
      },
      textDecorationStyle: {
        wavy: "wavy",
      },
    },
  },
  plugins: [],
} satisfies Config;
