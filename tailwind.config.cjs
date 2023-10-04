/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oswald Variable', defaultTheme.fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        futureHumanFront: "url('../assets/future_human_front.webp')",
        futureHumanBack: "url('../assets/future_human_back.webp')",
        intoTheBeyondFront: "url('../assets/into_the_beyond_front.webp')",
        intoTheBeyondBack: "url('../assets/into_the_beyond_back.webp')",
        mistsOfSolarisFront: "url('../assets/mists_of_solaris_front.webp')",
        mistsOfSolarisBack: "url('../assets/mists_of_solaris_back.webp')",
        seaBackground: "url('../assets/sea_background.webp')",
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwindcss-fluid-type')],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

module.exports = config
