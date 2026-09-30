import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        ivory: "#F7F5F0",
        primary: "#202321",
        secondary: "#59615D",
        border: "#D9DDDA",
        
        // CLINIC BLUE
        clinic: {
          DEFAULT: "#344F91",
          deep: "#263B68",
          light: "#F2F5FA",
          border: "#D6DDEB",
        },

        // DERMATOLOGY GREEN
        skin: {
          DEFAULT: "#3F7D3A",
          deep: "#285B2D",
          light: "#F1F5EF",
          border: "#D6E2D3",
        },

        // ORTHOPAEDIC BURGUNDY
        ortho: {
          DEFAULT: "#7A3038",
          deep: "#5C252C",
          light: "#F6EEEE",
          border: "#E5D4D6",
        },

        // PHYSIOTHERAPY SAGE
        sage: {
          DEFAULT: "#71877E",
          deep: "#4D635A",
          light: "#EFF3F1",
          border: "#D0DDD8",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-source-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "4px",
        lg: "4px",
      },
      boxShadow: {
        none: "none",
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
