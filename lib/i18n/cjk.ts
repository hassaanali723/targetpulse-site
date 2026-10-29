// Japanese text takes no space between a sentence and the next element, while
// every other language joins them with one. These helpers decide from the
// text itself, so English and the Latin-script languages are never affected.
const CJK_END = /[　-ヿ一-鿿＀-￯]$/
const CJK_START = /^[　-ヿ一-鿿＀-￯]/

/** The space to put after `text`: none when it ends in a Japanese character. */
export const gapAfter = (text?: string | null): string => (text && CJK_END.test(text) ? '' : ' ')

/** The space to put before `text`: none when it starts with a Japanese character. */
export const gapBefore = (text?: string | null): string => (text && CJK_START.test(text) ? '' : ' ')

/** A label colon: full-width "：" after a Japanese label, ": " otherwise. */
export const colonAfter = (label: string): string => (CJK_END.test(label) ? '：' : ': ')
