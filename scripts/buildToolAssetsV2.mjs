import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const TOOLS = [
  {
    slug: 'email-extractor',
    title: 'Email Extractor',
    subtitle: 'Pull clean email lists from text and files',
    raw: 'public/tools/raw/email-extractor-raw.jpg',
  },
  {
    slug: 'dkim-generator',
    title: 'DKIM Generator',
    subtitle: 'Create a DKIM key and record in your browser',
    raw: 'public/tools/raw/dkim-generator-raw.jpg',
  },
  {
    slug: 'dmarc-generator',
    title: 'DMARC Record Generator',
    subtitle: 'Build a DMARC record for the 2026 standard',
    raw: 'public/tools/raw/dmarc-generator-raw.jpg',
  },
  {
    slug: 'email-permutator',
    title: 'Email Permutator',
    subtitle: 'Every likely email format from one name',
    raw: 'public/tools/raw/email-permutator-raw.jpg',
  },
  {
    slug: 'bimi-generator',
    title: 'BIMI Record Generator',
    subtitle: 'Build your record and check your logo',
    raw: 'public/tools/raw/bimi-generator-raw.jpg',
  },
  {
    slug: 'spam-word-checker',
    title: 'Spam Word Checker',
    subtitle: 'Find the words that make filters suspicious',
    raw: 'public/tools/raw/spam-word-checker-raw.jpg',
  },
  {
    slug: 'email-signature-generator',
    title: 'Email Signature Generator',
    subtitle: 'A clean signature for Gmail and Outlook',
    raw: 'public/tools/raw/email-signature-generator-raw.jpg',
  },
]

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const browserPath = fs.existsSync(chromePath) ? chromePath : edgePath

const TMP_DIR = path.resolve('tmp')
if (!fs.existsSync(TMP_DIR)) {
  fs.mkdirSync(TMP_DIR, { recursive: true })
}

const OUT_DIR = path.resolve('public/tools')
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true })
}

console.log('--- Step 1: Generating In-Page WebP Images (1600x900) ---')
const generatedFiles = []

for (const t of TOOLS) {
  const inPath = path.resolve(t.raw)
  const outPath = path.join(OUT_DIR, `${t.slug}-v2.webp`)
  
  await sharp(inPath)
    .resize(1600, 900, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(outPath)
    
  const stat = fs.statSync(outPath)
  const meta = await sharp(outPath).metadata()
  console.log(`Generated: ${t.slug}-v2.webp -> ${meta.width}x${meta.height}, ${(stat.size / 1024).toFixed(1)} KB`)
  if (stat.size > 250 * 1024) {
    console.warn(`WARNING: ${t.slug}-v2.webp is over 250 KB!`)
  }
  generatedFiles.push({
    name: `${t.slug}-v2.webp`,
    path: outPath,
    type: 'In-page Illustration',
    width: meta.width,
    height: meta.height,
    sizeKb: (stat.size / 1024).toFixed(1),
  })
}

console.log('\n--- Step 2: Generating Social Preview OG Cards (1200x630) ---')

for (const t of TOOLS) {
  const rawBase64 = fs.readFileSync(path.resolve(t.raw)).toString('base64')
  const imgSrc = `data:image/jpeg;base64,${rawBase64}`
  
  // Choose font size so 3-word titles don't overflow
  const titleFontSize = t.title.length > 20 ? '66px' : '72px'
  
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 630px;
    background: #F8FAFC;
    background-image: 
      radial-gradient(circle at 82% 35%, rgba(99, 102, 241, 0.16) 0%, transparent 55%),
      radial-gradient(circle at 18% 75%, rgba(79, 70, 229, 0.08) 0%, transparent 45%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    display: flex;
    padding: 60px 64px;
    overflow: hidden;
  }
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 48px;
  }
  h1 {
    font-size: ${titleFontSize};
    font-weight: 800;
    color: #0F172A;
    line-height: 1.08;
    letter-spacing: -0.025em;
  }
  p {
    font-size: 32px;
    font-weight: 450;
    color: #475569;
    margin-top: 24px;
    line-height: 1.35;
    letter-spacing: -0.01em;
  }
  .brand-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .brand {
    font-size: 30px;
    font-weight: 700;
    color: #0F172A;
    letter-spacing: -0.02em;
  }
  .brand span {
    color: #4F46E5;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    background: #EEF2FF;
    border: 1px solid #C7D2FE;
    color: #4338CA;
    font-size: 14px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 9999px;
    margin-left: 8px;
  }
  .right {
    width: 530px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    width: 530px;
    height: 380px;
    background: #FFFFFF;
    border-radius: 24px;
    box-shadow: 
      0 25px 50px -12px rgba(79, 70, 229, 0.18),
      0 12px 24px -6px rgba(15, 23, 42, 0.08);
    border: 1px solid rgba(226, 232, 240, 0.95);
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    display: block;
  }
</style>
</head>
<body>
  <div class="left">
    <div>
      <h1>${t.title}</h1>
      <p>${t.subtitle}</p>
    </div>
    <div class="brand-wrap">
      <div class="brand">Giggal<span>.ai</span></div>
      <span class="badge">Free Browser Tool</span>
    </div>
  </div>
  <div class="right">
    <div class="card">
      <img src="${imgSrc}" alt="${t.title}" />
    </div>
  </div>
</body>
</html>`

  const tempHtml = path.join(TMP_DIR, `${t.slug}-og.html`)
  const tempPng = path.join(TMP_DIR, `${t.slug}-og.png`)
  const outOgWebp = path.join(OUT_DIR, `${t.slug}-og-v2.webp`)
  
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
    .toFile(outOgWebp)
    
  const stat = fs.statSync(outOgWebp)
  const meta = await sharp(outOgWebp).metadata()
  console.log(`Generated OG: ${t.slug}-og-v2.webp -> ${meta.width}x${meta.height}, ${(stat.size / 1024).toFixed(1)} KB`)
  if (stat.size > 150 * 1024) {
    console.warn(`WARNING: ${t.slug}-og-v2.webp is over 150 KB!`)
  }
  
  generatedFiles.push({
    name: `${t.slug}-og-v2.webp`,
    path: outOgWebp,
    type: 'Social Preview (OG)',
    width: meta.width,
    height: meta.height,
    sizeKb: (stat.size / 1024).toFixed(1),
  })
  
  // Clean up intermediate temp files
  if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml)
  if (fs.existsSync(tempPng)) fs.unlinkSync(tempPng)
}

console.log('\n--- Step 3: Generating Contact Sheet Grid (14 Images) ---')
const contactSheetHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 2400px;
    background: #0F172A;
    color: #F8FAFC;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    padding: 60px;
  }
  header {
    margin-bottom: 40px;
    border-bottom: 1px solid #334155;
    padding-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  h1 { font-size: 48px; font-weight: 800; color: #FFFFFF; }
  .subtitle { font-size: 24px; color: #94A3B8; margin-top: 8px; }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  .row-card {
    background: #1E293B;
    border: 1px solid #334155;
    border-radius: 20px;
    padding: 24px;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  .card-title { font-size: 20px; font-weight: 700; color: #E2E8F0; }
  .card-tag { font-size: 14px; color: #818CF8; background: #312E81; padding: 4px 10px; border-radius: 6px; font-weight: 600; }
  .img-container {
    background: #090D16;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #334155;
  }
  .img-container img {
    width: 100%;
    height: auto;
    display: block;
  }
  .meta {
    margin-top: 14px;
    font-size: 15px;
    color: #94A3B8;
    display: flex;
    justify-content: space-between;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  }
</style>
</head>
<body>
  <header>
    <div>
      <h1>TargetPulse / Giggal Tool Images — Contact Sheet</h1>
      <div class="subtitle">Complete Set: 7 In-Page Illustrations (1600x900) + 7 Social Previews (1200x630)</div>
    </div>
    <div style="font-size: 18px; color: #64748B;">Total: 14 Assets Generated</div>
  </header>
  <div class="grid">
    ${generatedFiles
      .map((f) => {
        const b64 = fs.readFileSync(f.path).toString('base64')
        return `<div class="row-card">
        <div class="card-header">
          <span class="card-title">${f.name}</span>
          <span class="card-tag">${f.type}</span>
        </div>
        <div class="img-container">
          <img src="data:image/webp;base64,${b64}" alt="${f.name}" />
        </div>
        <div class="meta">
          <span>Dimensions: ${f.width}×${f.height} px</span>
          <span>File Size: ${f.sizeKb} KB</span>
        </div>
      </div>`
      })
      .join('\n')}
  </div>
</body>
</html>`

const contactHtmlPath = path.join(TMP_DIR, 'contact-sheet.html')
const contactPngPath = path.join(TMP_DIR, 'tool-images-contact-sheet.png')
fs.writeFileSync(contactHtmlPath, contactSheetHtml, 'utf8')

console.log('Rendering Contact Sheet image...')
execFileSync(browserPath, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--window-size=2400,4800',
  `--screenshot=${contactPngPath}`,
  `file://${contactHtmlPath.replace(/\\/g, '/')}`,
])

if (fs.existsSync(contactPngPath)) {
  const stat = fs.statSync(contactPngPath)
  console.log(`Contact sheet created successfully: ${contactPngPath} (${(stat.size / 1024).toFixed(1)} KB)`)
  if (fs.existsSync(contactHtmlPath)) fs.unlinkSync(contactHtmlPath)
}

console.log('\n--- Complete 14 Image Summary ---')
console.table(
  generatedFiles.map((f) => ({
    File: f.name,
    Dimensions: `${f.width}x${f.height}`,
    'Size (KB)': `${f.sizeKb} KB`,
  }))
)
