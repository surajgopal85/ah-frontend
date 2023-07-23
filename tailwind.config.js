/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      // 'display': ['Oswald'],
      // 'body': ['"Merriweather"'],
    },
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif']
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
      }
    },
  plugins: [],
  }
}
