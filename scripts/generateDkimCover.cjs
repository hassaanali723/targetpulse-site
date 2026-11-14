const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const logoBase64 = fs.readFileSync(path.resolve('public/giggal-logo-wordmark.png')).toString('base64');
const logoSrc = `data:image/png;base64,${logoBase64}`;

const item = {
  out: 'public/blog/covers/what-is-dkim.webp',
  label: 'EMAIL AUTHENTICATION &amp; SECURITY',
  line1: 'What is DKIM?',
  line2: 'DomainKeys Identified Mail &amp; DNS Cryptography',
  stats: [
    { val: 'RFC 6376 Standards', caption: 'RSA-2048 and Ed25519 asymmetric cryptographic signatures' },
    { val: 'Selectors and DNS TXT', caption: 'Multi-stream selector routing without key collision' },
    { val: 'Anti-Tampering Hash', caption: 'Cryptographic body and header integrity validation' },
  ],
};

function renderSvg(c) {
  const statCards = c.stats.map((s, idx) => {
    const x = 96 + idx * 464;
    return `
      <g transform="translate(${x}, 580)">
        <rect width="432" height="150" rx="16" fill="#0f172a" fill-opacity="0.85" stroke="#1e293b" stroke-width="2"/>
        <text x="24" y="52" fill="#38bdf8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="28">${s.val}</text>
        <text x="24" y="96" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="400" font-size="18">${s.caption}</text>
      </g>
    `;
  }).join('');

  return `
    <svg width="1600" height="840" viewBox="0 0 1600 840" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0" y1="0" x2="1600" y2="840" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#030712"/>
          <stop offset="50%" stop-color="#0b1329"/>
          <stop offset="100%" stop-color="#030712"/>
        </linearGradient>
        <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1300 200) rotate(90) scale(400)">
          <stop stop-color="#38bdf8" stop-opacity="0.25"/>
          <stop offset="1" stop-color="#38bdf8" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="glow2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 700) rotate(90) scale(400)">
          <stop stop-color="#6366f1" stop-opacity="0.2"/>
          <stop offset="1" stop-color="#6366f1" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Background -->
      <rect width="1600" height="840" fill="url(#bgGradient)"/>
      <rect width="1600" height="840" fill="url(#glow)"/>
      <rect width="1600" height="840" fill="url(#glow2)"/>

      <!-- Grid lines -->
      <g stroke="#1e293b" stroke-opacity="0.4" stroke-width="1">
        <line x1="0" y1="120" x2="1600" y2="120"/>
        <line x1="0" y1="240" x2="1600" y2="240"/>
        <line x1="0" y1="360" x2="1600" y2="360"/>
        <line x1="0" y1="480" x2="1600" y2="480"/>
        <line x1="0" y1="600" x2="1600" y2="600"/>
        <line x1="0" y1="720" x2="1600" y2="720"/>
        <line x1="200" y1="0" x2="200" y2="840"/>
        <line x1="400" y1="0" x2="400" y2="840"/>
        <line x1="600" y1="0" x2="600" y2="840"/>
        <line x1="800" y1="0" x2="800" y2="840"/>
        <line x1="1000" y1="0" x2="1000" y2="840"/>
        <line x1="1200" y1="0" x2="1200" y2="840"/>
        <line x1="1400" y1="0" x2="1400" y2="840"/>
      </g>

      <!-- Logo top right -->
      <image href="${logoSrc}" x="1240" y="70" width="260" height="65"/>

      <!-- Category pill -->
      <g transform="translate(96, 80)">
        <rect width="360" height="42" rx="21" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" stroke-width="1.5"/>
        <circle cx="24" cy="21" r="5" fill="#38bdf8"/>
        <text x="40" y="27" fill="#38bdf8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="14" letter-spacing="1.5">${c.label}</text>
      </g>

      <!-- Main Headline -->
      <text x="96" y="240" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="64" letter-spacing="-1.5">${c.line1}</text>
      <text x="96" y="325" fill="#e2e8f0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="44" letter-spacing="-0.5">${c.line2}</text>

      <!-- Explanatory subline -->
      <text x="96" y="420" fill="#94a3b8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="400" font-size="24">
        A deep-dive technical guide into asymmetric keys, selector DNS TXT syntax, canonicalization, and anti-spoofing protection
      </text>

      <!-- Stat Cards -->
      ${statCards}
    </svg>
  `;
}

async function generate() {
  const outPath = path.resolve(item.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const svg = renderSvg(item);
  await sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toFile(outPath);
  const stat = fs.statSync(outPath);
  console.log(`Generated: ${item.out} (${stat.size} bytes)`);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
