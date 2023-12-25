/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hello: "#cbcbcb",
      },
      gridTemplateColumns: {
        "1fr-3fr": "50% 50%",
      },
      maxWidth: {
        80: "80rem",
      },
    },
  },
  plugins: [],
};
