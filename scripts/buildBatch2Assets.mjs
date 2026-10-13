import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const browserPath = fs.existsSync(chromePath) ? chromePath : edgePath

const TMP_DIR = path.resolve('tmp')
if (!fs.existsSync(TMP_DIR)) {
  fs.mkdirSync(TMP_DIR, { recursive: true })
}
const FONTS_DIR = path.join(TMP_DIR, 'fonts')
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true })
}

// Download fonts for offline reliable rendering with Plus Jakarta Sans if missing
const fontConfigs = [
  { weight: 400, url: 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NSg.ttf' },
  { weight: 600, url: 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNSg.ttf' },
  { weight: 700, url: 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNSg.ttf' },
  { weight: 800, url: 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_KUnNSg.ttf' },
]

for (const fc of fontConfigs) {
  const filePath = path.join(FONTS_DIR, `pjs-${fc.weight}.ttf`)
  if (!fs.existsSync(filePath)) {
    const res = await fetch(fc.url)
    const buf = Buffer.from(await res.arrayBuffer())
    fs.writeFileSync(filePath, buf)
  }
}

const fontFaceCss = fontConfigs
  .map((fc) => {
    const filePath = path.join(FONTS_DIR, `pjs-${fc.weight}.ttf`)
    const b64 = fs.readFileSync(filePath).toString('base64')
    return `@font-face {
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: ${fc.weight};
  src: url('data:font/truetype;base64,${b64}') format('truetype');
}`
  })
  .join('\n')

const logoBase64 = fs.readFileSync(path.resolve('public/giggal-logo-wordmark.png')).toString('base64')
const logoSrc = `data:image/png;base64,${logoBase64}`

// --- 1. In-page illustrations (1600x900) ---
const illustrations = [
  {
    raw: 'tmp/gmail-plus-addressing-raw.jpg',
    out: 'public/tools/gmail-plus-addressing-v2.webp',
    width: 1600,
    height: 900,
  },
  {
    raw: 'tmp/bounce-rate-calculator-raw.jpg',
    out: 'public/tools/bounce-rate-calculator-v2.webp',
    width: 1600,
    height: 900,
  },
]

console.log('--- Step 1: Processing In-Page Illustrations (1600x900) ---')
for (const item of illustrations) {
  const inPath = path.resolve(item.raw)
  const outPath = path.resolve(item.out)

  await sharp(inPath)
    .resize(item.width, item.height, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(outPath)

  const stat = fs.statSync(outPath)
  console.log(`Saved: ${item.out} -> ${(stat.size / 1024).toFixed(1)} KB`)
}

// --- 2. Social cards (1200x630) ---
const socialCards = [
  {
    slug: 'gmail-plus-addressing',
    raw: 'tmp/gmail-plus-addressing-raw.jpg',
    out: 'public/tools/gmail-plus-addressing-og-v2.webp',
    title: 'Gmail Plus Addressing',
    subtitle: 'Create plus addresses and find duplicates in a list',
    pill: 'Free Tool',
  },
  {
    slug: 'bounce-rate-calculator',
    raw: 'tmp/bounce-rate-calculator-raw.jpg',
    out: 'public/tools/bounce-rate-calculator-og-v2.webp',
    title: 'Bounce Rate Calculator',
    subtitle: 'Email and website bounce rate, with provider limits',
    pill: 'Free Tool',
  },
]

console.log('\n--- Step 2: Processing Social Cards (1200x630) ---')
for (const card of socialCards) {
  const cardImgB64 = fs.readFileSync(path.resolve(card.raw)).toString('base64')
  const cardImgSrc = `data:image/jpeg;base64,${cardImgB64}`

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  ${fontFaceCss}
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 630px;
    background: #F9FBFC;
    background-image: 
      radial-gradient(circle at 82% 40%, rgba(165, 168, 245, 0.28) 0%, transparent 60%),
      linear-gradient(135deg, #F9FBFC 0%, #ECEEFB 100%);
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    position: relative;
    overflow: hidden;
  }
  .left-content {
    position: absolute;
    left: 64px;
    top: 64px;
    width: 500px;
  }
  h1 {
    font-size: 72px;
    font-weight: 800;
    color: #0F172A;
    line-height: 1.1;
    letter-spacing: -0.025em;
  }
  p.subtitle {
    font-size: 30px;
    font-weight: 400;
    color: #475569;
    margin-top: 24px;
    line-height: 1.35;
    letter-spacing: -0.01em;
  }
  .brand-row {
    position: absolute;
    left: 64px;
    top: 546px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .brand-logo {
    height: 28px;
    width: auto;
    display: block;
  }
  .pill {
    display: inline-flex;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #C7D2FE;
    color: #4338CA;
    font-size: 15px;
    font-weight: 600;
    padding: 4px 14px;
    border-radius: 9999px;
  }
  .frame {
    position: absolute;
    left: 607px;
    top: 135px;
    width: 528px;
    height: 360px;
    background: #FFFFFF;
    border-radius: 24px;
    padding: 10px;
    box-shadow: 
      0 25px 50px -12px rgba(79, 70, 229, 0.20),
      0 12px 24px -6px rgba(15, 23, 42, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .frame-inner {
    width: 100%;
    height: 100%;
    background: #F5F6FB;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .frame-inner img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
</style>
</head>
<body>
  <div class="left-content">
    <h1>${card.title}</h1>
    <p class="subtitle">${card.subtitle}</p>
  </div>
  <div class="brand-row">
    <img src="${logoSrc}" class="brand-logo" alt="Giggal.ai" />
    <span class="pill">${card.pill}</span>
  </div>
  <div class="frame">
    <div class="frame-inner">
      <img src="${cardImgSrc}" alt="${card.title}" />
    </div>
  </div>
</body>
</html>`

  const tempHtml = path.join(TMP_DIR, `${card.slug}-og.html`)
  const tempPng = path.join(TMP_DIR, `${card.slug}-og.png`)
  const outPath = path.resolve(card.out)

  fs.writeFileSync(tempHtml, html, 'utf8')

  execFileSync(browserPath, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=1200,630',
    '--force-device-scale-factor=2',
    `--screenshot=${tempPng}`,
    `file://${tempHtml.replace(/\\/g, '/')}`,
  ])

  await sharp(tempPng)
    .resize(1200, 630)
    .webp({ quality: 85 })
    .toFile(outPath)

  const stat = fs.statSync(outPath)
  console.log(`Saved OG: ${card.out} -> ${(stat.size / 1024).toFixed(1)} KB`)

  if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml)
  if (fs.existsSync(tempPng)) fs.unlinkSync(tempPng)
}

// --- 3. Blog cover (1600x840) ---
const blogCover = {
  slug: 'how-to-end-an-email',
  out: 'public/blog/covers/how-to-end-an-email.webp',
  label: 'EMAIL WRITING',
  headline: 'How to end an email: sign-offs, closing lines and examples.',
  stats: [
    { val: 'Thanks', caption: '63% reply rate in Boomerang’s study' },
    { val: 'Kind regards', caption: 'rated best by 69% (Perkbox)' },
    { val: 'Love', caption: 'rated worst by 57% (Perkbox)' },
  ],
}

console.log('\n--- Step 3: Processing Blog Cover (1600x840) ---')
const blogHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  ${fontFaceCss}
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1600px;
    height: 840px;
    background-color: #1F1B4C;
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      radial-gradient(circle at 95% 10%, rgba(139, 92, 246, 0.30) 0%, transparent 50%),
      radial-gradient(circle at 10% 90%, rgba(44, 68, 117, 0.45) 0%, transparent 50%),
      linear-gradient(135deg, #1F1B4C 0%, #2A2368 40%, #3730A2 75%, #4543B1 100%);
    background-size: 75px 75px, 75px 75px, auto, auto, auto;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    position: relative;
    overflow: hidden;
  }
  .label {
    position: absolute;
    left: 90px;
    top: 115px;
    font-size: 26px;
    font-weight: 700;
    color: #A5B4FC;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  .logo-box {
    position: absolute;
    left: 1296px;
    top: 80px;
    width: 212px;
    height: 68px;
    background: #FFFFFF;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .logo-box img {
    height: 32px;
    width: auto;
    display: block;
  }
  .headline-container {
    position: absolute;
    left: 90px;
    top: 250px;
    max-width: 1280px;
  }
  h1 {
    font-size: 86px;
    font-weight: 800;
    color: #FFFFFF;
    letter-spacing: -0.02em;
    line-height: 1.12;
  }
  .accent-bar {
    margin-top: 36px;
    width: 128px;
    height: 5px;
    background: #34D399;
    border-radius: 9999px;
  }
  .stats-row {
    margin-top: 60px;
    display: flex;
    gap: 90px;
  }
  .stat-col {
    display: flex;
    flex-direction: column;
  }
  .stat-val {
    font-size: 46px;
    font-weight: 700;
    color: #6EE7B7;
    line-height: 1.1;
  }
  .stat-caption {
    font-size: 22px;
    font-weight: 400;
    color: #E2E8F0;
    margin-top: 8px;
    line-height: 1.3;
  }
</style>
</head>
<body>
  <div class="label">${blogCover.label}</div>
  <div class="logo-box">
    <img src="${logoSrc}" alt="Giggal.ai" />
  </div>
  <div class="headline-container">
    <h1>${blogCover.headline}</h1>
    <div class="accent-bar"></div>
    <div class="stats-row">
      ${blogCover.stats
        .map(
          (s) => `
        <div class="stat-col">
          <div class="stat-val">${s.val}</div>
          <div class="stat-caption">${s.caption}</div>
        </div>
      `
        )
        .join('')}
    </div>
  </div>
</body>
</html>`

const tempBlogHtml = path.join(TMP_DIR, `${blogCover.slug}.html`)
const tempBlogPng = path.join(TMP_DIR, `${blogCover.slug}.png`)
const outBlogPath = path.resolve(blogCover.out)

fs.writeFileSync(tempBlogHtml, blogHtml, 'utf8')

execFileSync(browserPath, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--window-size=1600,840',
  '--force-device-scale-factor=2',
  `--screenshot=${tempBlogPng}`,
  `file://${tempBlogHtml.replace(/\\/g, '/')}`,
])

await sharp(tempBlogPng)
  .resize(1600, 840)
  .webp({ quality: 85 })
  .toFile(outBlogPath)

const stat = fs.statSync(outBlogPath)
console.log(`Saved Blog Cover: ${blogCover.out} -> ${(stat.size / 1024).toFixed(1)} KB`)

if (fs.existsSync(tempBlogHtml)) fs.unlinkSync(tempBlogHtml)
if (fs.existsSync(tempBlogPng)) fs.unlinkSync(tempBlogPng)

console.log('\n--- Finished Batch 2 Assets ---')
