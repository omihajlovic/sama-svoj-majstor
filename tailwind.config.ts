import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        outfit: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'bg-secondary': '#f5f4f1',
        'dark': '#111111',
        'text-secondary': '#666666',
        'text-muted': '#999999',
      },
      maxWidth: {
        container: '1440px',
      },
      letterSpacing: {
        'wider2': '0.08em',
        'widest2': '0.12em',
      },
    },
  },
  plugins: [],
}
export default config
