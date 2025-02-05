import typography from "@tailwindcss/typography";
import { type Config } from "tailwindcss";

export default {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,md,mdx}",
  ],
  theme: {
    colors: {
      white: "var(--white)",
      black: "var(--black)",
      default: "rgb(var(--content-default) / <alpha-value>)",
      emphasis: "rgb(var(--content-emphasis) / <alpha-value>)",
      subtle: "rgb(var(--content-subtle) / <alpha-value>)",
      muted: "rgb(var(--content-muted) / <alpha-value>)",
    },
    backgroundColor: {
      default: "rgb(var(--bg-default) / <alpha-value>)",
      emphasis: "rgb(var(--bg-emphasis) / <alpha-value>)",
      subtle: "rgb(var(--bg-subtle) / <alpha-value>)",
      muted: "rgb(var(--bg-muted) / <alpha-value>)",
      inverted: "rgb(var(--bg-inverted) / <alpha-value>)",
    },
    extend: {
      screens: {
        xs: "470px",
      },
      fontFamily: {
        recoleta: [
          "Recoleta",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        sans: ["IBM Plex Sans", "ui-sans-serif", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgb(var(--content-default) / <alpha-value>)",
            "--tw-prose-headings":
              "rgb(var(--content-emphasis) / <alpha-value>)",
            "--tw-prose-bold": "rgb(var(--content-emphasis) / <alpha-value>)",
            "--tw-prose-link": "rgb(var(--content-emphasis) / <alpha-value>)",

            a: {
              fontWeight: 400,
              textDecorationThickness: "1.5px",
              textDecorationColor: "rgb(var(--gray-400))",
            },

            "a:hover": {
              textDecorationColor: "rgb(var(--gray-500))",
            },

            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
