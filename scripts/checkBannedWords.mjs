import fs from 'node:fs'

const banned = [
  'delve',
  'dive into',
  'crucial',
  'vital',
  'essential',
  'comprehensive',
  'robust',
  'seamless',
  'seamlessly',
  'leverage',
  'utilize',
  'navigate',
  'landscape',
  'realm',
  "in today's",
  'game-changer',
  'unlock',
  'empower',
  'streamline',
  'effortlessly',
  'furthermore',
  'moreover',
  'additionally',
  'in conclusion',
  'ultimately',
  'harness',
  'elevate',
  'look no further',
  'supercharge',
  'revolutionize',
  'take it to the next level',
  'best-in-class',
  'top-notch',
  'skyrocket',
  'powerhouse',
  'magic',
  'secret sauce',
  'silver bullet',
  'smtp',
]

const files = [
  'app/(en)/email-extractor/page.tsx',
  'app/(en)/dkim-generator/page.tsx',
  'app/(en)/dmarc-generator/page.tsx',
  'app/(en)/email-permutator/page.tsx',
  'app/(en)/bimi-generator/page.tsx',
  'app/(en)/spam-word-checker/page.tsx',
  'app/(en)/email-signature-generator/page.tsx',
  'components/tools/EmailExtractor/EmailExtractorTool.tsx',
  'components/tools/DkimGenerator/DkimGeneratorTool.tsx',
  'components/tools/DmarcGenerator/DmarcGeneratorTool.tsx',
  'components/tools/EmailPermutator/EmailPermutatorTool.tsx',
  'components/tools/BimiGenerator/BimiGeneratorTool.tsx',
  'components/tools/SpamWordChecker/SpamWordCheckerTool.tsx',
  'components/tools/EmailSignature/EmailSignatureTool.tsx',
]

// Since plan 30 the English copy of these tools lives in strings modules next to
// the other languages. Only the English object (`const en`) is scanned there.
const englishBlocks = [
  'lib/i18n/tools/emailExtractorStrings.ts',
  'lib/i18n/tools/extractorToolStrings.ts',
  'lib/i18n/tools/dkimGeneratorStrings.ts',
  'lib/i18n/tools/dkimToolStrings.ts',
  'lib/i18n/tools/dmarcGeneratorStrings.ts',
  'lib/i18n/tools/dmarcToolStrings.ts',
  'lib/i18n/tools/bimiGeneratorStrings.ts',
  'lib/i18n/tools/bimiToolStrings.ts',
  'lib/i18n/tools/emailSignatureStrings.ts',
  'lib/i18n/tools/signatureToolStrings.ts',
]

/** The text of `const en ... = {` up to the next top-level const or export. */
function englishBlock(text) {
  const start = text.search(/^const en/m)
  if (start < 0) return ''
  const rest = text.slice(start + 1)
  const end = rest.search(/^(const |export )/m)
  return end < 0 ? rest : rest.slice(0, end)
}

let foundCount = 0
const sources = [
  ...files.map((f) => [f, fs.readFileSync(f, 'utf8')]),
  ...englishBlocks.filter((f) => fs.existsSync(f)).map((f) => [`${f} (English)`, englishBlock(fs.readFileSync(f, 'utf8'))]),
]
for (const [f, text] of sources) {
  const content = text.toLowerCase()
  for (const b of banned) {
    if (content.includes(b)) {
      console.error(`Banned word "${b}" found in ${f}`)
      foundCount++
    }
  }
}

if (foundCount === 0) {
  console.log('Zero banned words found across all tool pages and components!')
} else {
  process.exit(1)
}
