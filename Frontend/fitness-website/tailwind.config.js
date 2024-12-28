// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Includes all files in the 'src' folder with these extensions
    "./public/index.html",             // Includes the main HTML file if using Create React App
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
