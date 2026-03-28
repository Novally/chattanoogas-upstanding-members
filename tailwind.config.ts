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
        cream: "#F5F0E8",
        eggshell: "#EAE4D5",
        pearl: "#E8E0D0",
        warmgray: "#B8B0A0",
        slategray: "#6B6560",
        charcoal: "#3A3633",
        drip: "#D4CFC4",
        "off-white": "#FAF8F5",
        beige: "#C8B89A",
        "sticky-white": "#F0ECE3",
      },
      fontFamily: {
        display: ['"Comic Neue"', "cursive", "sans-serif"],
        body: ['"Nunito"', "sans-serif"],
      },
      borderRadius: {
        blob: "30% 70% 70% 30% / 30% 30% 70% 70%",
        drip: "0 0 50% 50%",
      },
      keyframes: {
        drip: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "50%": { transform: "translateY(20px)", opacity: "1" },
          "100%": { transform: "translateY(40px)", opacity: "0" },
        },
        wobble: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        drip: "drip 2.5s ease-in-out infinite",
        wobble: "wobble 3s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
