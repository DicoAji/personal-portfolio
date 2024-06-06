/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(249deg, #cbae4e 0%, #d408d9 100%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".bg-custom-gradient": {
          background: "linear-gradient(90deg, #f4c25b 0%, #e53f08 100%)",
        },
        ".container": {
          width: "95%",
          margin: "0 auto",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
