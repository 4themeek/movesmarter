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
    },
  },
  plugins: [],
};
