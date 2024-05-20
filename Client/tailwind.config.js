/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      // fontFamily: {
      //   josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
      //   lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        primary: "#437EF7",
        "primary-dark": "#272D37",
        "primary-lite": "#5F6D7E",
        secondary: "#FB2E86",
      },

      screens: {},
      /* we should start with mobile. */
      sm: "576px", // mobile landscape mode
      md: "768px", // tablet
      lg: "1024", // latptop without side numerical in keypad
      xl: "1280px", // normal desktop
      xxl: "1400", // huge monitor
    }
    },
  plugins: [],
}

