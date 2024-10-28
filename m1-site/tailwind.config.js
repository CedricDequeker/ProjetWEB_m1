/** @type {import('tailwindcss').Config} */


// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}", // Inclut tous les fichiers de l'application
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx}", // Inclut les composants réutilisables
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}