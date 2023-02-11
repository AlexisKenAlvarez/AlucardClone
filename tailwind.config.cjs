/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/bg2.webp')",
        "phoneBg": "url('/bgphone.webp')",
        "bgFixed": "url('/bgfixed.webp')"
      },
      boxShadow: {
        'bgShadow': "0px -150px 200px 150px rgba(0,0,0,1) inset",
        'phoneShadow': "0px -150px 200px 85px rgba(0,0,0,1) inset",
        'fixedShadow': "01px 15px 22px 0px rgba(0,0,0,1) inset",
        'under': '0px 100px 100px 0px rgba(0,0,0,1)',
        'top': '0px -23px 22px 0px rgba(0,0,0,1)'
      },
      fontFamily: {
        'quick': ['Quicksand'],
        'sora': ['Sora'],
        'inter': ['Inter']
      },
      colors: {
        myRed: '#8a1208',
        percent: '#ebeced'
      }
    },
  },
  plugins: [],
}
