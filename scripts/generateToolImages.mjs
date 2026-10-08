import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const OUT_DIR = path.resolve('public/tools')
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true })
}

function getExtractorSvg(w, h) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#312e81" stop-opacity="0.5"/>
      <stop offset="60%" stop-color="#0f172a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#090d16" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1600" height="900" fill="url(#bgGlow)"/>

  <!-- Subtle grid lines -->
  <g opacity="0.12" stroke="#6366f1" stroke-width="1">
    ${Array.from({ length: 17 }).map((_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="900"/>`).join('\n')}
    ${Array.from({ length: 10 }).map((_, i) => `<line x1="0" y1="${i * 100}" x2="1600" y2="${i * 100}"/>`).join('\n')}
  </g>

  <!-- Left Container: Raw Text -->
  <g transform="translate(180, 180)">
    <rect width="520" height="540" rx="20" fill="url(#cardGrad)" stroke="#334155" stroke-width="2"/>
    <!-- Window header -->
    <rect width="520" height="56" rx="20" fill="#1e293b"/>
    <rect y="36" width="520" height="20" fill="#1e293b"/>
    <circle cx="36" cy="28" r="7" fill="#ef4444" opacity="0.8"/>
    <circle cx="58" cy="28" r="7" fill="#f59e0b" opacity="0.8"/>
    <circle cx="80" cy="28" r="7" fill="#10b981" opacity="0.8"/>
    <text x="110" y="34" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="16" font-weight="600" letter-spacing="1">RAW TEXT</text>

    <!-- Content simulation -->
    <g transform="translate(36, 90)">
      <rect y="0" width="280" height="12" rx="4" fill="#475569" opacity="0.5"/>
      <rect y="24" width="440" height="12" rx="4" fill="#475569" opacity="0.4"/>
      
      <!-- Highlighted email 1 -->
      <rect y="52" width="260" height="28" rx="6" fill="#4f46e5" fill-opacity="0.35" stroke="#6366f1" stroke-width="1.5"/>
      <circle cx="16" cy="66" r="4" fill="#818cf8"/>
      <rect x="30" y="61" width="180" height="10" rx="3" fill="#c7d2fe"/>

      <rect y="96" width="420" height="12" rx="4" fill="#475569" opacity="0.4"/>
      <rect y="120" width="340" height="12" rx="4" fill="#475569" opacity="0.4"/>

      <!-- Highlighted email 2 (duplicate) -->
      <rect y="148" width="260" height="28" rx="6" fill="#4f46e5" fill-opacity="0.35" stroke="#6366f1" stroke-width="1.5"/>
      <circle cx="16" cy="162" r="4" fill="#818cf8"/>
      <rect x="30" y="157" width="180" height="10" rx="3" fill="#c7d2fe"/>

      <rect y="192" width="380" height="12" rx="4" fill="#475569" opacity="0.3"/>
      
      <!-- Highlighted email 3 -->
      <rect y="220" width="290" height="28" rx="6" fill="#4f46e5" fill-opacity="0.35" stroke="#6366f1" stroke-width="1.5"/>
      <circle cx="16" cy="234" r="4" fill="#818cf8"/>
      <rect x="30" y="229" width="210" height="10" rx="3" fill="#c7d2fe"/>

      <rect y="264" width="300" height="12" rx="4" fill="#475569" opacity="0.4"/>
      <rect y="288" width="410" height="12" rx="4" fill="#475569" opacity="0.3"/>

      <!-- Highlighted email 4 -->
      <rect y="316" width="240" height="28" rx="6" fill="#4f46e5" fill-opacity="0.35" stroke="#6366f1" stroke-width="1.5"/>
      <circle cx="16" cy="330" r="4" fill="#818cf8"/>
      <rect x="30" y="325" width="160" height="10" rx="3" fill="#c7d2fe"/>

      <rect y="360" width="360" height="12" rx="4" fill="#475569" opacity="0.4"/>
      <rect y="384" width="260" height="12" rx="4" fill="#475569" opacity="0.3"/>
    </g>
  </g>

  <!-- Flow Arrow in Center -->
  <g transform="translate(730, 410)">
    <circle cx="70" cy="40" r="54" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <path d="M50 40H86M86 40L72 26M86 40L72 54" stroke="url(#arrowGrad)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Right Container: Clean Deduplicated List -->
  <g transform="translate(900, 180)">
    <rect width="520" height="540" rx="20" fill="url(#cardGrad)" stroke="#10b981" stroke-width="2" stroke-opacity="0.6"/>
    <!-- Header -->
    <rect width="520" height="56" rx="20" fill="#1e293b"/>
    <rect y="36" width="520" height="20" fill="#1e293b"/>
    <text x="36" y="34" fill="#34d399" font-family="system-ui, sans-serif" font-size="16" font-weight="700" letter-spacing="1">CLEAN LIST</text>
    <rect x="420" y="16" width="68" height="24" rx="12" fill="#065f46"/>
    <text x="454" y="32" text-anchor="middle" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="12" font-weight="700">UNIQUE</text>

    <!-- Clean list items -->
    <g transform="translate(32, 85)">
      <!-- Item 1 -->
      <rect y="0" width="456" height="64" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
      <circle cx="28" cy="32" r="14" fill="#065f46"/>
      <path d="M23 32L27 36L34 28" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="56" y="24" width="220" height="14" rx="4" fill="#f8fafc"/>
      <rect x="370" y="24" width="60" height="14" rx="4" fill="#64748b" opacity="0.6"/>

      <!-- Item 2 -->
      <rect y="80" width="456" height="64" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
      <circle cx="28" cy="112" r="14" fill="#065f46"/>
      <path d="M23 112L27 116L34 108" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="56" y="104" width="250" height="14" rx="4" fill="#f8fafc"/>
      <rect x="370" y="104" width="60" height="14" rx="4" fill="#64748b" opacity="0.6"/>

      <!-- Item 3 -->
      <rect y="160" width="456" height="64" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
      <circle cx="28" cy="192" r="14" fill="#065f46"/>
      <path d="M23 192L27 196L34 188" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="56" y="184" width="190" height="14" rx="4" fill="#f8fafc"/>
      <rect x="370" y="184" width="60" height="14" rx="4" fill="#64748b" opacity="0.6"/>

      <!-- Item 4 -->
      <rect y="240" width="456" height="64" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
      <circle cx="28" cy="272" r="14" fill="#065f46"/>
      <path d="M23 272L27 276L34 268" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="56" y="264" width="230" height="14" rx="4" fill="#f8fafc"/>
      <rect x="370" y="264" width="60" height="14" rx="4" fill="#64748b" opacity="0.6"/>

      <!-- Export action simulation -->
      <rect y="330" width="456" height="74" rx="12" fill="#0f172a" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="228" y="372" text-anchor="middle" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="15" font-weight="600">EXPORT CSV / TXT</text>
    </g>
  </g>
</svg>`
}

function getDkimSvg(w, h) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="dkimBg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#312e81" stop-opacity="0.5"/>
      <stop offset="60%" stop-color="#0f172a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#090d16" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="dkimCard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95"/>
    </linearGradient>
  </defs>

  <rect width="1600" height="900" fill="url(#dkimBg)"/>

  <!-- Grid -->
  <g opacity="0.12" stroke="#6366f1" stroke-width="1">
    ${Array.from({ length: 17 }).map((_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="900"/>`).join('\n')}
    ${Array.from({ length: 10 }).map((_, i) => `<line x1="0" y1="${i * 100}" x2="1600" y2="${i * 100}"/>`).join('\n')}
  </g>

  <!-- Left: Mail Server (Private Key) -->
  <g transform="translate(180, 180)">
    <rect width="520" height="540" rx="20" fill="url(#dkimCard)" stroke="#4f46e5" stroke-width="2"/>
    <rect width="520" height="60" rx="20" fill="#1e293b"/>
    <rect y="40" width="520" height="20" fill="#1e293b"/>
    <text x="36" y="38" fill="#c7d2fe" font-family="system-ui, sans-serif" font-size="18" font-weight="700" letter-spacing="1">MAIL SERVER</text>
    
    <g transform="translate(36, 100)">
      <!-- Key Card -->
      <rect width="448" height="220" rx="14" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      <rect x="24" y="24" width="40" height="40" rx="10" fill="#312e81"/>
      <path d="M40 38V34C40 30.7 42.7 28 46 28C49.3 28 52 30.7 52 34V38" stroke="#818cf8" stroke-width="2.5" fill="none"/>
      <rect x="36" y="38" width="16" height="12" rx="3" fill="#818cf8"/>
      <text x="80" y="50" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="18" font-weight="700">PRIVATE KEY</text>
      
      <!-- Key Content representation -->
      <rect x="24" y="86" width="400" height="16" rx="4" fill="#1e293b"/>
      <text x="34" y="99" fill="#818cf8" font-family="monospace" font-size="13">-----BEGIN PRIVATE KEY-----</text>
      <rect x="24" y="112" width="370" height="12" rx="4" fill="#334155" opacity="0.6"/>
      <rect x="24" y="132" width="390" height="12" rx="4" fill="#334155" opacity="0.6"/>
      <rect x="24" y="152" width="340" height="12" rx="4" fill="#334155" opacity="0.6"/>
      <text x="34" y="186" fill="#818cf8" font-family="monospace" font-size="13">-----END PRIVATE KEY-----</text>

      <!-- Server signing indicator -->
      <g transform="translate(0, 250)">
        <rect width="448" height="100" rx="14" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <text x="24" y="38" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="14" font-weight="600">DKIM-Signature Header</text>
        <rect x="24" y="54" width="360" height="10" rx="3" fill="#64748b" opacity="0.5"/>
        <rect x="24" y="72" width="280" height="10" rx="3" fill="#64748b" opacity="0.4"/>
      </g>
    </g>
  </g>

  <!-- Flow Center Connector -->
  <g transform="translate(730, 410)">
    <circle cx="70" cy="40" r="54" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <path d="M50 40H86M86 40L72 26M86 40L72 54" stroke="#10b981" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Right: DNS TXT Record (Public Key) -->
  <g transform="translate(900, 180)">
    <rect width="520" height="540" rx="20" fill="url(#dkimCard)" stroke="#10b981" stroke-width="2"/>
    <rect width="520" height="60" rx="20" fill="#1e293b"/>
    <rect y="40" width="520" height="20" fill="#1e293b"/>
    <text x="36" y="38" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="18" font-weight="700" letter-spacing="1">DNS RECORD</text>
    
    <g transform="translate(36, 100)">
      <!-- Record Host -->
      <rect width="448" height="80" rx="14" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      <text x="24" y="32" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13" font-weight="600">HOST / NAME</text>
      <text x="24" y="58" fill="#38bdf8" font-family="monospace" font-size="16" font-weight="600">s2026a._domainkey</text>

      <!-- Record Value -->
      <g transform="translate(0, 105)">
        <rect width="448" height="250" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.8"/>
        <text x="24" y="32" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13" font-weight="600">TXT VALUE (PUBLIC KEY)</text>
        <rect x="24" y="48" width="400" height="170" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="38" y="76" fill="#34d399" font-family="monospace" font-size="14" font-weight="600">v=DKIM1; k=rsa; p=</text>
        <rect x="38" y="92" width="370" height="12" rx="3" fill="#047857" opacity="0.6"/>
        <rect x="38" y="112" width="350" height="12" rx="3" fill="#047857" opacity="0.6"/>
        <rect x="38" y="132" width="380" height="12" rx="3" fill="#047857" opacity="0.6"/>
        <rect x="38" y="152" width="290" height="12" rx="3" fill="#047857" opacity="0.6"/>
      </g>
    </g>
  </g>
</svg>`
}

function getDmarcSvg(w = 1600, h = 900) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="dmarcBg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#312e81" stop-opacity="0.5"/>
      <stop offset="60%" stop-color="#0f172a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#090d16" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="dmarcCard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.98"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1600" height="900" fill="url(#dmarcBg)"/>

  <!-- Grid -->
  <g opacity="0.12" stroke="#6366f1" stroke-width="1">
    ${Array.from({ length: 17 }).map((_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="900"/>`).join('\n')}
    ${Array.from({ length: 10 }).map((_, i) => `<line x1="0" y1="${i * 100}" x2="1600" y2="${i * 100}"/>`).join('\n')}
  </g>

  <!-- LEFT CARD: DNS PUBLICATION (540x580) -->
  <g transform="translate(180, 160)">
    <rect width="540" height="580" rx="20" fill="url(#dmarcCard)" stroke="#4f46e5" stroke-width="2"/>
    <rect width="540" height="60" rx="20" fill="#1e293b"/>
    <rect y="40" width="540" height="20" fill="#1e293b"/>
    <text x="36" y="38" fill="#c7d2fe" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="1">1. DNS TXT PUBLICATION</text>

    <!-- Host Card -->
    <g transform="translate(36, 88)">
      <rect width="468" height="84" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      <text x="24" y="30" fill="#94a3b8" font-family="Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="1">DNS HOST / NAME</text>
      <text x="24" y="60" fill="#38bdf8" font-family="Courier New, monospace" font-size="18" font-weight="700">_dmarc.yourdomain.com</text>
    </g>

    <!-- TXT Value Card -->
    <g transform="translate(36, 192)">
      <rect width="468" height="348" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      <text x="24" y="30" fill="#94a3b8" font-family="Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="1">TXT RECORD VALUE (RFC 9989)</text>

      <!-- Record code banner -->
      <rect x="20" y="46" width="428" height="68" rx="10" fill="#1e293b" stroke="#475569" stroke-width="1"/>
      <text x="36" y="74" fill="#34d399" font-family="Courier New, monospace" font-size="15" font-weight="700">v=DMARC1; p=reject;</text>
      <text x="36" y="98" fill="#7dd3fc" font-family="Courier New, monospace" font-size="14" font-weight="600">rua=mailto:dmarc@yourdomain.com</text>

      <!-- Tag explanation grid -->
      <g transform="translate(20, 132)">
        <!-- Tag 1 -->
        <g transform="translate(0, 0)">
          <rect width="206" height="84" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="16" y="32" fill="#7dd3fc" font-family="Courier New, monospace" font-size="15" font-weight="700">p=reject</text>
          <text x="16" y="54" fill="#f8fafc" font-family="Arial, sans-serif" font-size="13" font-weight="600">Policy Level</text>
          <text x="16" y="72" fill="#94a3b8" font-family="Arial, sans-serif" font-size="11">Drops spoofed emails</text>
        </g>

        <!-- Tag 2 -->
        <g transform="translate(222, 0)">
          <rect width="206" height="84" rx="10" fill="#1e293b" stroke="#818cf8" stroke-width="1.5"/>
          <text x="16" y="32" fill="#c7d2fe" font-family="Courier New, monospace" font-size="15" font-weight="700">rua=mailto:</text>
          <text x="16" y="54" fill="#f8fafc" font-family="Arial, sans-serif" font-size="13" font-weight="600">Aggregate Reports</text>
          <text x="16" y="72" fill="#94a3b8" font-family="Arial, sans-serif" font-size="11">Daily XML pass/fail data</text>
        </g>

        <!-- Tag 3 -->
        <g transform="translate(0, 96)">
          <rect width="206" height="84" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
          <text x="16" y="32" fill="#cbd5e1" font-family="Courier New, monospace" font-size="15" font-weight="700">sp=reject</text>
          <text x="16" y="54" fill="#f8fafc" font-family="Arial, sans-serif" font-size="13" font-weight="600">Subdomains</text>
          <text x="16" y="72" fill="#94a3b8" font-family="Arial, sans-serif" font-size="11">Inherits domain policy</text>
        </g>

        <!-- Tag 4 -->
        <g transform="translate(222, 96)">
          <rect width="206" height="84" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
          <text x="16" y="32" fill="#6ee7b7" font-family="Courier New, monospace" font-size="15" font-weight="700">t=y (RFC 9989)</text>
          <text x="16" y="54" fill="#f8fafc" font-family="Arial, sans-serif" font-size="13" font-weight="600">Testing Flag</text>
          <text x="16" y="72" fill="#94a3b8" font-family="Arial, sans-serif" font-size="11">Trial before full reject</text>
        </g>
      </g>
    </g>
  </g>

  <!-- CENTER CONNECTOR: Arrow & Evaluation -->
  <g transform="translate(740, 410)">
    <circle cx="60" cy="40" r="50" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <path d="M42 40H78M78 40L64 26M78 40L64 54" stroke="#10b981" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- RIGHT CARD: RECEIVER ACTIONS (540x580) -->
  <g transform="translate(880, 160)">
    <rect width="540" height="580" rx="20" fill="url(#dmarcCard)" stroke="#10b981" stroke-width="2"/>
    <rect width="540" height="60" rx="20" fill="#1e293b"/>
    <rect y="40" width="540" height="20" fill="#1e293b"/>
    <text x="36" y="38" fill="#6ee7b7" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="1">2. RECEIVER EVALUATION &amp; ACTIONS</text>

    <g transform="translate(36, 88)">
      <!-- Action 1: None -->
      <g transform="translate(0, 0)">
        <rect width="468" height="92" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
        <rect x="20" y="24" width="104" height="44" rx="8" fill="#0369a1"/>
        <text x="72" y="51" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="Courier New, monospace" font-size="14" font-weight="700">p=none</text>
        <text x="142" y="40" fill="#bae6fd" font-family="Arial, sans-serif" font-size="16" font-weight="700">MONITOR MODE</text>
        <text x="142" y="62" fill="#94a3b8" font-family="Arial, sans-serif" font-size="13">Mail delivered normally; audits all senders</text>
      </g>

      <!-- Action 2: Quarantine -->
      <g transform="translate(0, 108)">
        <rect width="468" height="92" rx="12" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="20" y="24" width="134" height="44" rx="8" fill="#b45309"/>
        <text x="87" y="51" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="Courier New, monospace" font-size="14" font-weight="700">p=quarantine</text>
        <text x="172" y="40" fill="#fde68a" font-family="Arial, sans-serif" font-size="16" font-weight="700">FILTER MODE</text>
        <text x="172" y="62" fill="#94a3b8" font-family="Arial, sans-serif" font-size="13">Failing mail routed to spam / junk folder</text>
      </g>

      <!-- Action 3: Reject -->
      <g transform="translate(0, 216)">
        <rect width="468" height="92" rx="12" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <rect x="20" y="24" width="112" height="44" rx="8" fill="#047857"/>
        <text x="76" y="51" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="Courier New, monospace" font-size="14" font-weight="700">p=reject</text>
        <text x="150" y="40" fill="#a7f3d0" font-family="Arial, sans-serif" font-size="16" font-weight="700">ENFORCE MODE</text>
        <text x="150" y="62" fill="#94a3b8" font-family="Arial, sans-serif" font-size="13">Spoofed mail dropped and blocked completely</text>
      </g>

      <!-- Feedback Loop Box -->
      <g transform="translate(0, 324)">
        <rect width="468" height="96" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <circle cx="44" cy="48" r="22" fill="#312e81"/>
        <path d="M36 48L42 54L54 42" stroke="#818cf8" stroke-width="3" fill="none" stroke-linecap="round"/>
        <text x="80" y="38" fill="#c7d2fe" font-family="Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="1">DAILY XML AGGREGATE REPORTS (RUA)</text>
        <text x="80" y="64" fill="#94a3b8" font-family="Arial, sans-serif" font-size="13">Mailbox receivers report senders back to your rua inbox</text>
      </g>
    </g>
  </g>
</svg>`
}

function getPermutatorSvg(w = 1600, h = 900) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="permBg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#312e81" stop-opacity="0.5"/>
      <stop offset="60%" stop-color="#0f172a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#090d16" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="permCard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.98"/>
    </linearGradient>
  </defs>

  <rect width="1600" height="900" fill="url(#permBg)"/>

  <!-- Grid -->
  <g opacity="0.12" stroke="#6366f1" stroke-width="1">
    ${Array.from({ length: 17 }).map((_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="900"/>`).join('\n')}
    ${Array.from({ length: 10 }).map((_, i) => `<line x1="0" y1="${i * 100}" x2="1600" y2="${i * 100}"/>`).join('\n')}
  </g>

  <!-- Left: Input Card (Jane Doe, example.com) -->
  <g transform="translate(180, 200)">
    <rect width="480" height="500" rx="20" fill="url(#permCard)" stroke="#4f46e5" stroke-width="2"/>
    <rect width="480" height="56" rx="20" fill="#1e293b"/>
    <rect y="36" width="480" height="20" fill="#1e293b"/>
    <text x="36" y="36" fill="#c7d2fe" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="1">NAME &amp; DOMAIN</text>

    <g transform="translate(36, 85)">
      <!-- Name field -->
      <rect width="408" height="84" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      <text x="20" y="30" fill="#94a3b8" font-family="Arial, sans-serif" font-size="12" font-weight="700">PERSON</text>
      <text x="20" y="60" fill="#f8fafc" font-family="Courier New, monospace" font-size="18" font-weight="700">Jane Doe</text>

      <!-- Domain field -->
      <g transform="translate(0, 110)">
        <rect width="408" height="84" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <text x="20" y="30" fill="#94a3b8" font-family="Arial, sans-serif" font-size="12" font-weight="700">DOMAIN</text>
        <text x="20" y="60" fill="#38bdf8" font-family="Courier New, monospace" font-size="18" font-weight="700">example.com</text>
      </g>

      <!-- Generate indicator -->
      <g transform="translate(0, 230)">
        <rect width="408" height="56" rx="12" fill="#4f46e5"/>
        <text x="204" y="34" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="700">GENERATE</text>
      </g>
    </g>
  </g>

  <!-- Branching Lines in Center -->
  <g transform="translate(660, 220)">
    <path d="M 0 230 C 120 230, 100 60, 220 60" stroke="#6366f1" stroke-width="3" fill="none"/>
    <path d="M 0 230 C 120 230, 100 145, 220 145" stroke="#818cf8" stroke-width="3" fill="none"/>
    <path d="M 0 230 C 120 230, 100 230, 220 230" stroke="#10b981" stroke-width="3.5" fill="none"/>
    <path d="M 0 230 C 120 230, 100 315, 220 315" stroke="#34d399" stroke-width="3" fill="none"/>
    <path d="M 0 230 C 120 230, 100 400, 220 400" stroke="#6ee7b7" stroke-width="3" fill="none"/>
  </g>

  <!-- Right: Formats Tree Card -->
  <g transform="translate(880, 170)">
    <rect width="540" height="560" rx="20" fill="url(#permCard)" stroke="#10b981" stroke-width="2"/>
    <rect width="540" height="56" rx="20" fill="#1e293b"/>
    <rect y="36" width="540" height="20" fill="#1e293b"/>
    <text x="36" y="36" fill="#6ee7b7" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="1">EMAIL FORMATS</text>

    <g transform="translate(32, 80)">
      <!-- Row 1: first.last -->
      <g transform="translate(0, 0)">
        <rect width="476" height="68" rx="12" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <text x="24" y="40" fill="#34d399" font-family="Courier New, monospace" font-size="17" font-weight="700">jane.doe@example.com</text>
        <rect x="360" y="20" width="94" height="26" rx="6" fill="#065f46"/>
        <text x="407" y="37" text-anchor="middle" fill="#a7f3d0" font-family="Courier New, monospace" font-size="12" font-weight="700">first.last</text>
      </g>

      <!-- Row 2: flast -->
      <g transform="translate(0, 80)">
        <rect width="476" height="68" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <text x="24" y="40" fill="#f8fafc" font-family="Courier New, monospace" font-size="17" font-weight="600">jdoe@example.com</text>
        <rect x="390" y="20" width="64" height="26" rx="6" fill="#1e293b"/>
        <text x="422" y="37" text-anchor="middle" fill="#94a3b8" font-family="Courier New, monospace" font-size="12" font-weight="700">flast</text>
      </g>

      <!-- Row 3: first -->
      <g transform="translate(0, 160)">
        <rect width="476" height="68" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <text x="24" y="40" fill="#f8fafc" font-family="Courier New, monospace" font-size="17" font-weight="600">jane@example.com</text>
        <rect x="390" y="20" width="64" height="26" rx="6" fill="#1e293b"/>
        <text x="422" y="37" text-anchor="middle" fill="#94a3b8" font-family="Courier New, monospace" font-size="12" font-weight="700">first</text>
      </g>

      <!-- Row 4: firstlast -->
      <g transform="translate(0, 240)">
        <rect width="476" height="68" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <text x="24" y="40" fill="#f8fafc" font-family="Courier New, monospace" font-size="17" font-weight="600">janedoe@example.com</text>
        <rect x="360" y="20" width="94" height="26" rx="6" fill="#1e293b"/>
        <text x="407" y="37" text-anchor="middle" fill="#94a3b8" font-family="Courier New, monospace" font-size="12" font-weight="700">firstlast</text>
      </g>

      <!-- Row 5: f.last -->
      <g transform="translate(0, 320)">
        <rect width="476" height="68" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <text x="24" y="40" fill="#f8fafc" font-family="Courier New, monospace" font-size="17" font-weight="600">j.doe@example.com</text>
        <rect x="380" y="20" width="74" height="26" rx="6" fill="#1e293b"/>
        <text x="417" y="37" text-anchor="middle" fill="#94a3b8" font-family="Courier New, monospace" font-size="12" font-weight="700">f.last</text>
      </g>
    </g>
  </g>
</svg>`
}

function getBimiSvg(w = 1600, h = 900) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bimiBg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#312e81" stop-opacity="0.5"/>
      <stop offset="60%" stop-color="#0f172a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#090d16" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="bimiCard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.98"/>
    </linearGradient>
  </defs>

  <rect width="1600" height="900" fill="url(#bimiBg)"/>

  <!-- Grid -->
  <g opacity="0.12" stroke="#6366f1" stroke-width="1">
    ${Array.from({ length: 17 }).map((_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="900"/>`).join('\n')}
    ${Array.from({ length: 10 }).map((_, i) => `<line x1="0" y1="${i * 100}" x2="1600" y2="${i * 100}"/>`).join('\n')}
  </g>

  <!-- TOP CARD: INBOX MESSAGE (Brand logo next to it) -->
  <g transform="translate(240, 160)">
    <rect width="1120" height="240" rx="20" fill="url(#bimiCard)" stroke="#4f46e5" stroke-width="2"/>
    <rect width="1120" height="52" rx="20" fill="#1e293b"/>
    <rect y="32" width="1120" height="20" fill="#1e293b"/>
    <text x="36" y="34" fill="#c7d2fe" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="1">INBOX MESSAGE</text>

    <!-- Message item row -->
    <g transform="translate(36, 80)">
      <!-- Brand logo square (Tiny PS SVG symbol) -->
      <rect width="90" height="90" rx="16" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
      <circle cx="45" cy="45" r="26" fill="#6366f1"/>
      <rect x="35" y="35" width="20" height="20" rx="4" fill="#ffffff"/>

      <!-- Sender Info -->
      <g transform="translate(120, 16)">
        <text x="0" y="24" fill="#f8fafc" font-family="Arial, sans-serif" font-size="20" font-weight="700">Acme Corporation</text>
        <!-- Blue verification mark -->
        <circle cx="215" cy="18" r="11" fill="#38bdf8"/>
        <path d="M210 18L213 21L220 14" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        
        <text x="0" y="54" fill="#94a3b8" font-family="Arial, sans-serif" font-size="15">Monthly Security Summary</text>
      </g>

      <!-- Time badge -->
      <text x="1020" y="40" text-anchor="end" fill="#64748b" font-family="Arial, sans-serif" font-size="14">10:42 AM</text>
    </g>
  </g>

  <!-- Flow Connector -->
  <g transform="translate(800, 420)">
    <line x1="0" y1="0" x2="0" y2="40" stroke="#10b981" stroke-width="3" stroke-dasharray="4 4"/>
    <circle cx="0" cy="40" r="6" fill="#10b981"/>
  </g>

  <!-- BOTTOM CARD: DNS TXT RECORD -->
  <g transform="translate(240, 480)">
    <rect width="1120" height="260" rx="20" fill="url(#bimiCard)" stroke="#10b981" stroke-width="2"/>
    <rect width="1120" height="52" rx="20" fill="#1e293b"/>
    <rect y="32" width="1120" height="20" fill="#1e293b"/>
    <text x="36" y="34" fill="#6ee7b7" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="1">DNS RECORD</text>

    <g transform="translate(36, 80)">
      <!-- Host -->
      <rect width="1048" height="56" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      <text x="24" y="34" fill="#94a3b8" font-family="Courier New, monospace" font-size="15" font-weight="700">HOST:</text>
      <text x="80" y="34" fill="#38bdf8" font-family="Courier New, monospace" font-size="15" font-weight="700">default._bimi.example.com</text>

      <!-- Value -->
      <g transform="translate(0, 72)">
        <rect width="1048" height="72" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <text x="24" y="42" fill="#94a3b8" font-family="Courier New, monospace" font-size="14" font-weight="700">VALUE:</text>
        <text x="90" y="42" fill="#34d399" font-family="Courier New, monospace" font-size="15" font-weight="700">v=BIMI1; l=https://example.com/logo.svg; a=https://example.com/cert.pem</text>
      </g>
    </g>
  </g>
</svg>`
}

function getSpamCheckerSvg(w = 1600, h = 900) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="spamBg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#312e81" stop-opacity="0.5"/>
      <stop offset="60%" stop-color="#0f172a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#090d16" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="spamCard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.98"/>
    </linearGradient>
  </defs>

  <rect width="1600" height="900" fill="url(#spamBg)"/>

  <!-- Grid -->
  <g opacity="0.12" stroke="#6366f1" stroke-width="1">
    ${Array.from({ length: 17 }).map((_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="900"/>`).join('\n')}
    ${Array.from({ length: 10 }).map((_, i) => `<line x1="0" y1="${i * 100}" x2="1600" y2="${i * 100}"/>`).join('\n')}
  </g>

  <!-- Left: Email Draft Card -->
  <g transform="translate(180, 180)">
    <rect width="640" height="540" rx="20" fill="url(#spamCard)" stroke="#4f46e5" stroke-width="2"/>
    <rect width="640" height="56" rx="20" fill="#1e293b"/>
    <rect y="36" width="640" height="20" fill="#1e293b"/>
    <text x="36" y="36" fill="#c7d2fe" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="1">EMAIL DRAFT</text>

    <g transform="translate(36, 85)">
      <!-- Subject row with highlighted trigger -->
      <rect width="568" height="64" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      <text x="20" y="38" fill="#94a3b8" font-family="Courier New, monospace" font-size="14">Subject: Quick update on our </text>
      <!-- Highlighted word -->
      <rect x="290" y="18" width="130" height="28" rx="6" fill="#b45309" fill-opacity="0.4" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="355" y="37" text-anchor="middle" fill="#fde68a" font-family="Courier New, monospace" font-size="14" font-weight="700">special deal</text>

      <!-- Body text lines with highlights -->
      <g transform="translate(0, 90)">
        <rect width="568" height="310" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        
        <text x="24" y="44" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="15">Hi Alex,</text>
        <text x="24" y="80" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="15">Here are the details regarding our upcoming launch.</text>

        <!-- Highlighted word in body: act now -->
        <text x="24" y="130" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="15">Please </text>
        <rect x="76" y="112" width="94" height="26" rx="5" fill="#dc2626" fill-opacity="0.35" stroke="#ef4444" stroke-width="1.5"/>
        <text x="123" y="129" text-anchor="middle" fill="#fca5a5" font-family="Arial, sans-serif" font-size="14" font-weight="700">act now</text>
        <text x="180" y="130" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="15"> to secure your reservation.</text>

        <!-- Highlighted word: guaranteed -->
        <text x="24" y="180" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="15">All results are </text>
        <rect x="135" y="162" width="124" height="26" rx="5" fill="#b45309" fill-opacity="0.35" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="197" y="179" text-anchor="middle" fill="#fde68a" font-family="Arial, sans-serif" font-size="14" font-weight="700">guaranteed</text>
        <text x="268" y="180" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="15"> under our terms.</text>

        <text x="24" y="240" fill="#94a3b8" font-family="Arial, sans-serif" font-size="14">Best regards,</text>
        <text x="24" y="265" fill="#f8fafc" font-family="Arial, sans-serif" font-size="15" font-weight="600">Sarah Jenkins</text>
      </g>
    </g>
  </g>

  <!-- Right: Findings Card -->
  <g transform="translate(860, 180)">
    <rect width="560" height="540" rx="20" fill="url(#spamCard)" stroke="#10b981" stroke-width="2"/>
    <rect width="560" height="56" rx="20" fill="#1e293b"/>
    <rect y="36" width="560" height="20" fill="#1e293b"/>
    <text x="36" y="36" fill="#6ee7b7" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="1">ANALYSIS</text>

    <g transform="translate(36, 85)">
      <!-- Finding 1 -->
      <rect width="488" height="90" rx="12" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
      <circle cx="28" cy="45" r="10" fill="#b45309"/>
      <text x="28" y="49" text-anchor="middle" fill="#fde68a" font-family="Arial, sans-serif" font-size="12" font-weight="700">!</text>
      <text x="52" y="36" fill="#fde68a" font-family="Arial, sans-serif" font-size="15" font-weight="700">Urgency Phrase: act now</text>
      <text x="52" y="62" fill="#94a3b8" font-family="Arial, sans-serif" font-size="13">Suggestion: when you're ready</text>

      <!-- Finding 2 -->
      <g transform="translate(0, 110)">
        <rect width="488" height="90" rx="12" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="28" cy="45" r="10" fill="#b45309"/>
        <text x="28" y="49" text-anchor="middle" fill="#fde68a" font-family="Arial, sans-serif" font-size="12" font-weight="700">!</text>
        <text x="52" y="36" fill="#fde68a" font-family="Arial, sans-serif" font-size="15" font-weight="700">Overpromising: guaranteed</text>
        <text x="52" y="62" fill="#94a3b8" font-family="Arial, sans-serif" font-size="13">Suggestion: backed by our terms</text>
      </g>

      <!-- Check Passed: Merge Tags -->
      <g transform="translate(0, 220)">
        <rect width="488" height="74" rx="12" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <circle cx="28" cy="37" r="12" fill="#065f46"/>
        <path d="M23 37L27 41L34 33" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="52" y="42" fill="#6ee7b7" font-family="Arial, sans-serif" font-size="15" font-weight="700">Merge tags verified</text>
      </g>
    </g>
  </g>
</svg>`
}

function getSignatureSvg(w = 1600, h = 900) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sigBg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#312e81" stop-opacity="0.5"/>
      <stop offset="60%" stop-color="#0f172a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#090d16" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="sigCard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.98"/>
    </linearGradient>
  </defs>

  <rect width="1600" height="900" fill="url(#sigBg)"/>

  <!-- Grid -->
  <g opacity="0.12" stroke="#6366f1" stroke-width="1">
    ${Array.from({ length: 17 }).map((_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="900"/>`).join('\n')}
    ${Array.from({ length: 10 }).map((_, i) => `<line x1="0" y1="${i * 100}" x2="1600" y2="${i * 100}"/>`).join('\n')}
  </g>

  <!-- Signature Card -->
  <g transform="translate(350, 220)">
    <rect width="900" height="460" rx="20" fill="url(#sigCard)" stroke="#4f46e5" stroke-width="2"/>
    <rect width="900" height="56" rx="20" fill="#1e293b"/>
    <rect y="36" width="900" height="20" fill="#1e293b"/>
    <text x="36" y="36" fill="#c7d2fe" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="1">SIGNATURE CARD</text>

    <!-- Layout Container -->
    <g transform="translate(60, 110)">
      <!-- Left Photo / Logo placeholder -->
      <g transform="translate(0, 10)">
        <rect width="120" height="120" rx="60" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
        <circle cx="60" cy="50" r="24" fill="#6366f1"/>
        <path d="M30 102 C30 78, 90 78, 90 102" fill="#6366f1"/>
      </g>

      <!-- Vertical Divider Line -->
      <line x1="160" y1="0" x2="160" y2="280" stroke="#4f46e5" stroke-width="3"/>

      <!-- Right Details Column -->
      <g transform="translate(190, 10)">
        <text x="0" y="28" fill="#f8fafc" font-family="Arial, sans-serif" font-size="24" font-weight="800">Jane Doe</text>
        <text x="0" y="58" fill="#818cf8" font-family="Arial, sans-serif" font-size="16" font-weight="600">Account Manager · Example Ltd</text>

        <!-- Contact Details -->
        <g transform="translate(0, 95)">
          <text x="0" y="18" fill="#94a3b8" font-family="Arial, sans-serif" font-size="14">Phone: +44 20 7946 0000</text>
          <text x="0" y="46" fill="#94a3b8" font-family="Arial, sans-serif" font-size="14">Email: jane.doe@example.com</text>
          <text x="0" y="74" fill="#94a3b8" font-family="Arial, sans-serif" font-size="14">Web: example.com</text>
        </g>

        <!-- Social Icons / CTA -->
        <g transform="translate(0, 210)">
          <rect width="32" height="32" rx="8" fill="#1e293b"/>
          <circle cx="16" cy="16" r="6" fill="#38bdf8"/>

          <rect x="42" y="0" width="32" height="32" rx="8" fill="#1e293b"/>
          <circle cx="58" cy="16" r="6" fill="#818cf8"/>

          <rect x="84" y="0" width="32" height="32" rx="8" fill="#1e293b"/>
          <circle cx="100" cy="16" r="6" fill="#34d399"/>

          <!-- CTA Pill -->
          <rect x="150" y="2" width="160" height="28" rx="6" fill="#4f46e5"/>
          <text x="230" y="21" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="12" font-weight="700">Book a 15-min call</text>
        </g>
      </g>
    </g>
  </g>
</svg>`
}

async function render() {
  const configs = [
    { slug: 'email-extractor', svgFn: getExtractorSvg },
    { slug: 'dkim-generator', svgFn: getDkimSvg },
    { slug: 'dmarc-generator', svgFn: getDmarcSvg },
    { slug: 'email-permutator', svgFn: getPermutatorSvg },
    { slug: 'bimi-generator', svgFn: getBimiSvg },
    { slug: 'spam-word-checker', svgFn: getSpamCheckerSvg },
    { slug: 'email-signature-generator', svgFn: getSignatureSvg },
  ]

  for (const { slug, svgFn } of configs) {
    // 1600x900 version
    const svg1600 = svgFn(1600, 900)
    const file1600 = path.join(OUT_DIR, `${slug}.webp`)
    await sharp(Buffer.from(svg1600))
      .resize(1600, 900)
      .webp({ quality: 85, effort: 6 })
      .toFile(file1600)

    const stats1600 = fs.statSync(file1600)
    console.log(`Created ${file1600} (${(stats1600.size / 1024).toFixed(1)} KB)`)

    // 1200x630 OG version
    const svg1200 = svgFn(1200, 630)
    const file1200 = path.join(OUT_DIR, `${slug}-og.webp`)
    await sharp(Buffer.from(svg1200))
      .resize(1200, 630)
      .webp({ quality: 85, effort: 6 })
      .toFile(file1200)

    const stats1200 = fs.statSync(file1200)
    console.log(`Created ${file1200} (${(stats1200.size / 1024).toFixed(1)} KB)`)
  }
}

render().catch(console.error)
