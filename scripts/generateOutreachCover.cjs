const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const logoBase64 = fs.readFileSync(path.resolve('public/giggal-logo-wordmark.png')).toString('base64');
const logoSrc = `data:image/png;base64,${logoBase64}`;

const c = {
  out: 'public/blog/covers/outreach-email-deliverability.webp',
  label: 'OUTREACH & SEQUENCE DELIVERABILITY',
  line1: 'Outreach Email Deliverability:',
  line2: 'How to Keep Cold Sequences Out of Spam',
  stats: [
    { val: 'Domain Isolation', caption: 'Secondary domains & mailbox spreading' },
    { val: 'DNS & Custom Tracking', caption: 'SPF, DKIM, DMARC & branded CNAME' },
    { val: '<1% Bounce Target', caption: 'Pre-send verification & catch-all safety' },
  ],
};

function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&'"]/g, function (char) {
    switch (char) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return char;
    }
  });
}

const svg = `
<svg width="1600" height="840" viewBox="0 0 1600 840" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E1B4B"/>
      <stop offset="40%" stop-color="#2E1065"/>
      <stop offset="75%" stop-color="#3B0764"/>
      <stop offset="100%" stop-color="#4C1D95"/>
    </linearGradient>

    <radialGradient id="glow-tr" cx="95%" cy="10%" r="50%">
      <stop offset="0%" stop-color="#A855F7" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#A855F7" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="glow-bl" cx="10%" cy="90%" r="50%">
      <stop offset="0%" stop-color="#4338CA" stop-opacity="0.40"/>
      <stop offset="100%" stop-color="#4338CA" stop-opacity="0"/>
    </radialGradient>

    <pattern id="grid" width="75" height="75" patternUnits="userSpaceOnUse">
      <path d="M 75 0 L 0 0 0 75" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1.5"/>
    </pattern>

    <filter id="card-shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.18"/>
    </filter>
  </defs>

  <rect width="1600" height="840" fill="url(#bg-grad)"/>
  <rect width="1600" height="840" fill="url(#glow-tr)"/>
  <rect width="1600" height="840" fill="url(#glow-bl)"/>
  <rect width="1600" height="840" fill="url(#grid)"/>

  <text x="90" y="135" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="26" font-weight="700" fill="#DDD6FE" letter-spacing="4">${escapeXml(c.label)}</text>

  <rect x="1296" y="80" width="212" height="68" rx="16" fill="#FFFFFF" filter="url(#card-shadow)"/>
  <image href="${logoSrc}" x="1320" y="98" width="164" height="32" preserveAspectRatio="xMidYMid meet"/>

  <rect x="90" y="170" width="100" height="6" rx="3" fill="#34D399"/>

  <text x="90" y="270" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="62" font-weight="800" fill="#FFFFFF" letter-spacing="-1">${escapeXml(c.line1)}</text>
  <text x="90" y="355" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="54" font-weight="700" fill="#E9D5FF" letter-spacing="-0.5">${escapeXml(c.line2)}</text>

  <g transform="translate(90, 480)">
    <g transform="translate(0, 0)">
      <rect width="440" height="230" rx="20" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5" filter="url(#card-shadow)"/>
      <rect x="0" y="0" width="440" height="8" rx="4" fill="#34D399"/>
      <text x="36" y="80" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="32" font-weight="800" fill="#FFFFFF">${escapeXml(c.stats[0].val)}</text>
      <text x="36" y="125" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="20" font-weight="500" fill="#E9D5FF">${escapeXml(c.stats[0].caption)}</text>
    </g>

    <g transform="translate(485, 0)">
      <rect width="440" height="230" rx="20" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5" filter="url(#card-shadow)"/>
      <rect x="0" y="0" width="440" height="8" rx="4" fill="#A855F7"/>
      <text x="36" y="80" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="32" font-weight="800" fill="#FFFFFF">${escapeXml(c.stats[1].val)}</text>
      <text x="36" y="125" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="20" font-weight="500" fill="#E9D5FF">${escapeXml(c.stats[1].caption)}</text>
    </g>

    <g transform="translate(970, 0)">
      <rect width="440" height="230" rx="20" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5" filter="url(#card-shadow)"/>
      <rect x="0" y="0" width="440" height="8" rx="4" fill="#38BDF8"/>
      <text x="36" y="80" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="32" font-weight="800" fill="#FFFFFF">${escapeXml(c.stats[2].val)}</text>
      <text x="36" y="125" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="20" font-weight="500" fill="#E9D5FF">${escapeXml(c.stats[2].caption)}</text>
    </g>
  </g>
</svg>
`;

async function run() {
  const outDir = path.dirname(path.resolve(c.out));
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const svgBuffer = Buffer.from(svg.trim());
  await sharp(svgBuffer)
    .resize(1600, 840)
    .webp({ quality: 92 })
    .toFile(path.resolve(c.out));

  console.log(`Successfully generated: ${c.out}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
