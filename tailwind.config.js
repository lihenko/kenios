/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {},
    colors: {
      'green': '#03572D',
      'darkgreen': '#85B223',
      'lightgreen': '#EBF1DE',
      'violet': '#574599',
      'white' : '#ffffff',
      'grey' : '#F4F4F4',
      'darkgrey' : '#979797',
      'lightgrey' : '#F6F6F3',
      'black' : '#231F20',
      'blue' : '#2C3C54',
      'pink' : '#C5A7CD',
      'brown' : '#512511',
      'darkbrown' : '#220D03',
      'yellow' : '#FFAD15',
    },
    fontFamily: {
      'sans': ['NotoSans', 'sans-serif'],
      'notosans': ['NotoSans', 'sans-serif'],
      'body': ['NotoSans', 'sans-serif'],
    },
    fontSize: {
      xs: ['14px', '18px'],
      sm: ['16px', '20px'],
      base: ['18px', '24px'],
      lg: ['20px', '26px'],
      xl: ['22px', '29px'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1250px',
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  corePlugins: {
    placeholderColor: false,
    placeholderOpacity: false,
  },
};
