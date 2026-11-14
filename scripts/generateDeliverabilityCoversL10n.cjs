const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const logoBase64 = fs.readFileSync(path.resolve('public/giggal-logo-wordmark.png')).toString('base64');
const logoSrc = `data:image/png;base64,${logoBase64}`;

const covers = [
  {
    out: 'public/blog/covers/fr/ameliorer-delivrabilite-email.webp',
    label: 'INFRASTRUCTURE EMAIL & RÉPUTATION',
    line1: 'Checklist délivrabilité email :',
    line2: 'Comment atteindre la boîte principale en 2026',
    stats: [
      { val: 'Règles Google & Yahoo', caption: 'Plafond de spam 0,3 % et conformité RFC 8058' },
      { val: 'SPF, DKIM & DMARC', caption: "Alignement cryptographique de l'identité" },
      { val: 'Rebonds < 2 %', caption: 'Hygiène pré-envoi et défense anti-pièges' },
    ],
  },
  {
    out: 'public/blog/covers/de/e-mail-zustellbarkeit-verbessern.webp',
    label: 'E-MAIL-INFRASTRUKTUR & REPUTATION',
    line1: 'E-Mail-Zustellbarkeit Checkliste:',
    line2: 'So erreichen Sie 2026 den Posteingang',
    stats: [
      { val: 'Google- & Yahoo-Regeln', caption: '0,3 % Spam-Grenze & RFC 8058-Konformität' },
      { val: 'SPF, DKIM & DMARC', caption: 'Kryptografischer Identitätsabgleich' },
      { val: '< 2 % Bounce-Rate', caption: 'Listenhygiene & Schutz vor Spam-Fallen' },
    ],
  },
  {
    out: 'public/blog/covers/es/como-mejorar-la-entregabilidad-del-correo.webp',
    label: 'INFRAESTRUCTURA DE EMAIL Y REPUTACIÓN',
    line1: 'Checklist de entregabilidad de correo:',
    line2: 'Cómo llegar a la bandeja principal en 2026',
    stats: [
      { val: 'Reglas Google y Yahoo', caption: 'Límite 0,3 % spam y norma RFC 8058' },
      { val: 'SPF, DKIM y DMARC', caption: 'Alineación criptográfica de identidad' },
      { val: '< 2 % de rebotes', caption: 'Higiene previa y defensa ante trampas' },
    ],
  },
  {
    out: 'public/blog/covers/it/come-migliorare-deliverability-email.webp',
    label: 'INFRASTRUTTURA EMAIL E REPUTAZIONE',
    line1: 'Checklist deliverability email:',
    line2: 'Come raggiungere la posta in arrivo nel 2026',
    stats: [
      { val: 'Regole Google e Yahoo', caption: 'Limite spam 0,3% e conformità RFC 8058' },
      { val: 'SPF, DKIM e DMARC', caption: "Allineamento crittografico dell'identità" },
      { val: 'Rimbalzi < 2%', caption: 'Igiene preventiva e difesa anti-trappole' },
    ],
  },
];

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

function buildSvg(c) {
  return `
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

  <rect x="90" y="190" width="110" height="8" rx="4" fill="#34D399"/>

  <text x="90" y="275" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="56" font-weight="800" fill="#FFFFFF" letter-spacing="-1">${escapeXml(c.line1)}</text>
  <text x="90" y="350" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="54" font-weight="800" fill="#E0E7FF" letter-spacing="-1">${escapeXml(c.line2)}</text>

  <g transform="translate(90, 480)">
    <g transform="translate(0, 0)">
      <rect width="440" height="220" rx="20" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="14" fill="#34D399" fill-opacity="0.2"/>
      <path d="M 44 50 L 48 54 L 56 46" fill="none" stroke="#34D399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="80" y="58" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="800" fill="#34D399">${escapeXml(c.stats[0].val)}</text>
      <text x="36" y="125" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="500" fill="#CBD5E1">
        ${escapeXml(c.stats[0].caption)}
      </text>
    </g>

    <g transform="translate(480, 0)">
      <rect width="440" height="220" rx="20" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="14" fill="#60A5FA" fill-opacity="0.2"/>
      <path d="M 44 50 L 48 54 L 56 46" fill="none" stroke="#60A5FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="80" y="58" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="800" fill="#60A5FA">${escapeXml(c.stats[1].val)}</text>
      <text x="36" y="125" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="500" fill="#CBD5E1">
        ${escapeXml(c.stats[1].caption)}
      </text>
    </g>

    <g transform="translate(960, 0)">
      <rect width="440" height="220" rx="20" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="14" fill="#F472B6" fill-opacity="0.2"/>
      <path d="M 44 50 L 48 54 L 56 46" fill="none" stroke="#F472B6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="80" y="58" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="22" font-weight="800" fill="#F472B6">${escapeXml(c.stats[2].val)}</text>
      <text x="36" y="125" font-family="Plus Jakarta Sans, -apple-system, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="500" fill="#CBD5E1">
        ${escapeXml(c.stats[2].caption)}
      </text>
    </g>
  </g>
</svg>
`;
}

async function run() {
  for (const c of covers) {
    const fullOut = path.resolve(c.out);
    fs.mkdirSync(path.dirname(fullOut), { recursive: true });
    const svgStr = buildSvg(c);
    await sharp(Buffer.from(svgStr))
      .webp({ quality: 90 })
      .toFile(fullOut);
    const stat = fs.statSync(fullOut);
    console.log(`Generated: ${c.out} (${stat.size} bytes)`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
