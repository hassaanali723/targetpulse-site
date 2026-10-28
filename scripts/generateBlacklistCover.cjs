const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const logoBase64 = fs.readFileSync(path.resolve('public/giggal-logo-wordmark.png')).toString('base64');
const logoSrc = `data:image/png;base64,${logoBase64}`;

const c = {
  out: 'public/blog/covers/how-to-check-if-email-domain-is-blacklisted.webp',
  label: 'DELIVERABILITY & REPUTATION',
  line1: 'Email Blacklist Check:',
  line2: 'How to Detect & Delist Your Domain',
  stats: [
    { val: 'Spamhaus & BRBL', caption: 'Tier-1 DNSBL blocklist audits' },
    { val: '550 5.7.1 Logs', caption: 'SMTP bounce code diagnostics' },
    { val: 'Delisting Playbook', caption: 'Clean lists to avoid re-blocking' },
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
      <stop offset="0%" stop-color="#1F1B4C"/>
      <stop offset="40%" stop-color="#2A2368"/>
      <stop offset="75%" stop-color="#3730A2"/>
      <stop offset="100%" stop-color="#4543B1"/>
    </linearGradient>

    <radialGradient id="glow-tr" cx="95%" cy="10%" r="50%">
      <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="glow-bl" cx="10%" cy="90%" r="50%">
      <stop offset="0%" stop-color="#2C4475" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#2C4475" stop-opacity="0"/>
    </radialGradient>

    <pattern id="grid" width="75" height="75" patternUnits="userSpaceOnUse">
      <path d="M 75 0 L 0 0 0 75" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1.5"/>
    </pattern>

    <filter id="card-shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.15"/>
    </filter>
  </defs>

  <rect width="1600" height="840" fill="url(#bg-grad)"/>
  <rect width="1600" height="840" fill="url(#glow-tr)"/>
  <rect width="1600" height="840" fill="url(#glow-bl)"/>
  <rect width="1600" height="840" fill="url(#grid)"/>

  <text x="90" y="135" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="26" font-weight="700" fill="#A5B4FC" letter-spacing="4">${escapeXml(c.label)}</text>

  <rect x="1296" y="80" width="212" height="68" rx="16" fill="#FFFFFF" filter="url(#card-shadow)"/>
  <image href="${logoSrc}" x="1320" y="98" width="164" height="32" preserveAspectRatio="xMidYMid meet"/>

  <text x="90" y="300" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="74" font-weight="800" fill="#FFFFFF" letter-spacing="-1">
    <tspan x="90" dy="0">${escapeXml(c.line1)}</tspan>
    <tspan x="90" dy="88">${escapeXml(c.line2)}</tspan>
  </text>

  <rect x="90" y="420" width="128" height="6" rx="3" fill="#34D399"/>

  <g transform="translate(90, 520)">
    <text x="0" y="0" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="700" fill="#6EE7B7">${escapeXml(c.stats[0].val)}</text>
    <text x="0" y="36" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="400" fill="#E2E8F0">${escapeXml(c.stats[0].caption)}</text>
  </g>

  <g transform="translate(560, 520)">
    <text x="0" y="0" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="700" fill="#6EE7B7">${escapeXml(c.stats[1].val)}</text>
    <text x="0" y="36" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="400" fill="#E2E8F0">${escapeXml(c.stats[1].caption)}</text>
  </g>

  <g transform="translate(1040, 520)">
    <text x="0" y="0" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="44" font-weight="700" fill="#6EE7B7">${escapeXml(c.stats[2].val)}</text>
    <text x="0" y="36" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="400" fill="#E2E8F0">${escapeXml(c.stats[2].caption)}</text>
  </g>
</svg>
`;

async function run() {
  const outPath = path.resolve(c.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(outPath);
  const stat = fs.statSync(outPath);
  console.log(`Generated official cover: ${c.out} (${(stat.size / 1024).toFixed(1)} KB)`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
