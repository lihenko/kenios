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
      'grey' : '#D8D8D8',
      'darkgrey' : '#979797',
      'lightgrey' : '#F6F6F3',
      'black' : '#231F20',
      'blue' : '#87CEEB',
      'darkblue' : '#12143E',
      'pink' : '#C5A7CD',
      'brown' : '#512511',
      'darkbrown' : '#220D03',
      'yellow' : '#FFAD15',
    },
    fontFamily: {
      'sans': ['Figtree', 'sans-serif'],
      'jost': ['Jost', 'sans-serif'],
      'figtree': ['Figtree', 'sans-serif'],
      'body': ['Figtree', 'sans-serif'],
    },
    fontSize: {
      xs: ['14px', '18px'],
      sm: ['16px', '20px'],
      base: ['18px', '24px'],
      lg: ['20px', '26px'],
      xl: ['22px', '29px'],
    },
    screens: {
      'xs': '480px',
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
