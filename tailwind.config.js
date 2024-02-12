const animations = require("@midudev/tailwind-animations");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,ejs}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          '50': '#fefeff',
          '100': '#e2d3fc',
          '200': '#c7a8f9',
          '300': '#ab7ef5',
          '400': '#9053f2',
          '500': '#7428ef',
          '600': '#6120cb',
          '700': '#4e18a7',
          '800': '#3b0f82',
          '900': '#28075e',
        }
      }
    }
  },
  plugins: [animations,require('flowbite/plugin')],
  
};
