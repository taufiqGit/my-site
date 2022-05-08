module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'dekstop-grid': '350px 1fr'
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      colors: {
        'black-ori': '#333333',
        'blue-ori': '#2F80ED',
        'grayscale': '#F2F2F2',
        'gray': '#4F4F4F',
        'gray-3': '#828282'
      },
      spacing: {
        '128': '32rem',
        '136': '34rem',
        '142': '38rem',
        '800px': '800px',
        '1000px': '1000px',
        '1200px': '1200px',
        '1400px': '1400px'
      }
    },
  },
  plugins: [],
}
