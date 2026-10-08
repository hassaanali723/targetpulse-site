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

let foundCount = 0
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8').toLowerCase()
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
