import type { Config } from 'tailwindcss'
import { theme } from './src/content.ts'

const { colors } = theme

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: colors.navy,
        deep: colors.deep,
        mist: colors.mist,
        steel: colors.steel,
        muted: colors.muted,
        accent: colors.accent,
      },
      fontFamily: {
        display: [`"${theme.fonts.display.family}"`, 'Impact', 'system-ui', 'sans-serif'],
        sans: [`"${theme.fonts.body.family}"`, 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        ui: theme.radius.ui,
      },
      boxShadow: {
        block: `4px 4px 0 0 ${colors.navy}`,
        'block-light': `4px 4px 0 0 ${colors.white}`,
        card: `6px 6px 0 0 ${colors.steel}`,
      },
    },
  },
} satisfies Config
