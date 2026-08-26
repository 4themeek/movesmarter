/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#1C2321",
        concrete: "#EDEBE6",
        glass: "#45636E",
        leed: "#5B8C5A",
        paper: "#FAFAF8",
        steel: "#8B9490",
        rust: "#B5502F",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        wideish: "0.04em",
        widest2: "0.28em",
      },
      keyframes: {
        // Ken Burns pans — paired with a matching `origin-*` utility on the
        // element so the scale anchors from that corner/center while it pans.
        // Duration lives on the `animate-kb-*` entries below and must match
        // SLIDE_DURATION in components/HeroSlider.jsx.
        kbZoomA: {
          "0%": { transform: "scale(1) translate(0%, 0%)" },
          "100%": { transform: "scale(1.1) translate(2%, 2%)" },
        },
        kbZoomB: {
          "0%": { transform: "scale(1) translate(0%, 0%)" },
          "100%": { transform: "scale(1.1) translate(-2%, -2%)" },
        },
        kbZoomC: {
          "0%": { transform: "scale(1) translate(0%, 0%)" },
          "100%": { transform: "scale(1.1) translate(1.5%, -1.5%)" },
        },
        kbZoomD: {
          "0%": { transform: "scale(1) translate(0%, 0%)" },
          "100%": { transform: "scale(1.1) translate(-2%, 2%)" },
        },
        kbZoomE: {
          "0%": { transform: "scale(1) translate(0%, 0%)" },
          "100%": { transform: "scale(1.1) translate(2%, -2%)" },
        },
      },
      animation: {
        "kb-a": "kbZoomA 7.5s ease-out forwards",
        "kb-b": "kbZoomB 7.5s ease-out forwards",
        "kb-c": "kbZoomC 7.5s ease-out forwards",
        "kb-d": "kbZoomD 7.5s ease-out forwards",
        "kb-e": "kbZoomE 7.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
