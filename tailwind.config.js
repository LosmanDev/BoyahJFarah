/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0000ff',

          secondary: '#007300',

          accent: '#0057ff',

          neutral: '#333134',

          'base-100': '#eee8d6',

          info: '#008dff',

          success: '#008d34',

          warning: '#ff6800',

          error: '#ff004d',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
