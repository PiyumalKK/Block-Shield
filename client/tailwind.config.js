/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind", );

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#F4AC20',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('tailwind-scrollbar'),
    

  ],
}
