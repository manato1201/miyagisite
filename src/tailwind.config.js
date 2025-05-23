/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // もし pages/ を残してるなら:
    "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
        harutori1: 'var(--c1)',
        harutori2: 'var(--c2)',
        harutori3: 'var(--c3)',
        harutori4: 'var(--c4)',
        harutori5: 'var(--c5)',
        harutori6: 'var(--c6)',
      }

      },
    },
    plugins: [],
   
  };
  