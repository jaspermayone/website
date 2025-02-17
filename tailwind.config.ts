import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blurre: "#4299e1",
        linkBlue: "#4299e1",
        linkHover: "#003e73",
        pinkk: "#ed68ab",
        pinkkDark: "#ad2f6f",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // "cute-notes": ['"Cute Notes"', "sans-serif"],
        "cute-notes": "var(--font-cuteNotes)",
      },
      textDecorationStyle: {
        wavy: "wavy",
      },
    },
  },
  plugins: [],
} satisfies Config;
