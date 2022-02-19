module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: ["./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    shadows: {
      'red': '0 2px 4px 0 rgba(255, 0, 0, 0.10)',
      'green': '0 2px 4px 0 rgba(0, 255, 0, 0.10)',
      'blue': '0 2px 4px 0 rgba(0, 0, 255, 0.10)',
      'custom-hex-color': '0 2px 4px 0 #af9cdd',
    },
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: '#000D40',
        secondary: '#E2F0F8',
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['Barlow', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
