import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: "#141413",
          light: "#FAFAF8",
          muted: "#828179",
        },
        // Secondary colors
        secondary: {
          DEFAULT: "#C4C3BB",
          dark: "#A3A299",
          muted: "#605F5B",
        },
        // Background colors
        background: {
          DEFAULT: "#fff",
          alt: "#F0EFEA",
          subtle: "#E6E4DD",
        },
        // Accent colors
        accent: {
          warm: "#EBDBBC",
          purple: "#8989DE",
          blue: "#61AAF2",
          peach: "#D2886F",
          sand: "#D4A27F",
          green: "#7EBF8E",
        },
        // Text colors
        text: {
          DEFAULT: "#141413",
          muted: "#828179",
          light: "#A3A299",
        },
        // Border colors
        border: {
          DEFAULT: "#E6E4DD",
          dark: "#C4C3BB",
        },
        // Glass effects
        glass: {
          white: "#fffffff2",
          dark: "#000000d9",
          light: "#ffffff33",
          subtle: "#ffffff0a",
        },
      },
      spacing: {
        container: "2rem",
        "container-lg": "4rem",
        "container-xl": "6rem",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "Segoe UI",
          "Roboto",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.16" }],
        "6xl": ["3.75rem", { lineHeight: "1.16" }],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.05)",
        medium: "0 4px 20px rgba(0, 0, 0, 0.08)",
        strong: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;