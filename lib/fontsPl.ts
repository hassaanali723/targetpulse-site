import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'

// The Polish root layout (app/(pl)/pl/layout.tsx) uses these instead of
// lib/fonts.ts. Same faces and CSS variables, plus the latin-ext subset, so
// Polish letters (ą ć ę ł ń ś ź ż) are preloaded and never fall back to the
// system font on first paint (display: 'optional' gives the webfont no second
// chance). The other locales keep latin only, so their pages download nothing extra.
export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'optional',
  variable: '--font-jakarta',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'optional',
  preload: true,
  variable: '--font-jetbrains-mono',
})
