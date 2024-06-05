/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgpri : "#0D051F",
        or1 : "#F87516",
        bl1 : "#5E11FF",
        lg1 : "#0d061f",
        lg2 : "#251E35",
        lg3: '#F87516',
        lg4: '#5E11FF',
        bd : 'rgba(255,255,255,0.063)'
      },
      fontFamily: {
        sora :['Sora']
      }
    },
  },
  plugins: [],
}

