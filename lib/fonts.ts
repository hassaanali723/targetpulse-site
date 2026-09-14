import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'

// Shared by both root layouts (the English site in app/(en) and the Italian
// site in app/(it)) so the two render identical font CSS. Moved out of the
// English layout unchanged; see the comments there for why each face is
// configured the way it is.
export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'optional',
  variable: '--font-jakarta',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'optional',
  preload: true,
  variable: '--font-jetbrains-mono',
})
