/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
    content: ["./src/**/*.{html,js}", flowbite.content()],
    theme: {
      extend: {},
      colors: {
        "blue-700": "#2563eb",
        "blue-500": "#3b82f6",
        "gray-600": "#4b5563",
        "gray-400": "#9ca3af"
      }
    },
    plugins: [flowbite.plugin()],
  }