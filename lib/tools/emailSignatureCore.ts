/**
 * Email Signature Generator Core Logic
 * Pure TypeScript, table-based HTML with inline CSS, max-width 600px,
 * client-side only with zero backend or external API dependencies.
 */

export type SignatureTemplateId = 'simple-text' | 'logo-left' | 'photo-divider' | 'compact'

export type SignatureFont = 'Arial' | 'Helvetica' | 'Georgia' | 'Verdana' | 'Tahoma'

export interface SocialLinks {
  linkedin?: string
  x?: string
  facebook?: string
  instagram?: string
  youtube?: string
}

export interface SignatureData {
  // Personal & Company
  fullName: string
  jobTitle?: string
  company?: string
  department?: string
  pronouns?: string

  // Contact
  phone?: string
  mobile?: string
  email?: string
  website?: string
  address?: string

  // Images
  logoUrl?: string
  photoUrl?: string

  // Social
  socialLinks?: SocialLinks
  useSocialIcons?: boolean

  // Styling
  template: SignatureTemplateId
  font: SignatureFont
  accentColor: string // hex code e.g. #4f46e5

  // CTA & Legal
  ctaText?: string
  ctaUrl?: string
  disclaimer?: string

  // Options
  showMadeWithGiggal?: boolean
}

export const SIGNATURE_FONTS: { name: SignatureFont; stack: string }[] = [
  { name: 'Arial', stack: 'Arial, Helvetica, sans-serif' },
  { name: 'Helvetica', stack: 'Helvetica, Arial, sans-serif' },
  { name: 'Georgia', stack: 'Georgia, serif' },
  { name: 'Verdana', stack: 'Verdana, Geneva, sans-serif' },
  { name: 'Tahoma', stack: 'Tahoma, Geneva, sans-serif' },
]

/**
 * Social platform icons
 * Source: Simple Icons (https://github.com/simple-icons/simple-icons)
 * License: Creative Commons Zero v1.0 Universal (CC0-1.0)
 * - LinkedIn: Simple Icons (siLinkedin), CC0-1.0
 * - X: Simple Icons (siX), CC0-1.0
 * - Facebook: Simple Icons (siFacebook), CC0-1.0
 * - Instagram: Simple Icons (siInstagram), CC0-1.0
 * - YouTube: Simple Icons (siYoutube), CC0-1.0
 * Rendered to 24x24 px PNG assets and self-hosted at /signature-icons/
 */
export const SOCIAL_PLATFORMS: { key: keyof SocialLinks; label: string; iconFile: string }[] = [
  { key: 'linkedin', label: 'LinkedIn', iconFile: 'linkedin.png' },
  { key: 'x', label: 'X', iconFile: 'x.png' },
  { key: 'facebook', label: 'Facebook', iconFile: 'facebook.png' },
  { key: 'instagram', label: 'Instagram', iconFile: 'instagram.png' },
  { key: 'youtube', label: 'YouTube', iconFile: 'youtube.png' },
]

export const ACCENT_COLOR_PRESETS = [
  '#4f46e5', // Indigo
  '#2563eb', // Blue
  '#0284c7', // Sky
  '#0d9488', // Teal
  '#16a34a', // Green
  '#d97706', // Amber
  '#dc2626', // Red
  '#9333ea', // Purple
  '#334155', // Slate
]

export function validateImageUrl(url?: string): { valid: boolean; warning?: string } {
  if (!url || !url.trim()) return { valid: true }
  const trimmed = url.trim()
  if (!trimmed.startsWith('https://')) {
    return { valid: false, warning: 'Image URL must start with https://' }
  }
  try {
    new URL(trimmed)
    return { valid: true }
  } catch {
    return { valid: false, warning: 'Invalid image URL' }
  }
}

function escapeHtml(text?: string): string {
  if (!text) return ''
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function cleanUrl(url?: string): string {
  if (!url) return ''
  let u = url.trim()
  if (!/^https?:\/\//i.test(u) && !/^mailto:/i.test(u) && !/^tel:/i.test(u)) {
    u = `https://${u}`
  }
  return u
}

/**
 * Helper to build social links row
 */
function renderSocialRow(data: SignatureData, fontStack: string): string {
  if (!data.socialLinks) return ''
  const activeItems: { label: string; url: string; iconFile: string }[] = []

  for (const plat of SOCIAL_PLATFORMS) {
    const val = data.socialLinks[plat.key]
    if (val && val.trim()) {
      activeItems.push({
        label: plat.label,
        url: cleanUrl(val),
        iconFile: plat.iconFile,
      })
    }
  }

  if (activeItems.length === 0) return ''

  if (data.useSocialIcons) {
    const iconLinks = activeItems.map((item) => {
      const iconUrl = `https://giggal.ai/signature-icons/${item.iconFile}`
      return `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-right:8px; text-decoration:none;"><img src="${iconUrl}" width="18" height="18" alt="${item.label}" style="display:inline-block; border:0; vertical-align:middle;" /></a>`
    })
    return `<div style="padding-top:8px;">${iconLinks.join('')}</div>`
  }

  // Text links by default
  const textLinks = activeItems.map((item) => {
    return `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" style="color:${data.accentColor}; font-size:12px; font-family:${fontStack}; text-decoration:none; margin-right:8px;">${item.label}</a>`
  })
  return `<div style="padding-top:8px;">${textLinks.join('<span style="color:#cbd5e1; margin-right:8px;">·</span>')}</div>`
}

/**
 * Helper to build CTA button/link
 */
function renderCta(data: SignatureData, fontStack: string): string {
  if (!data.ctaText || !data.ctaText.trim()) return ''
  const url = cleanUrl(data.ctaUrl) || '#'
  return `<div style="padding-top:10px;"><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" style="display:inline-block; background-color:${data.accentColor}; color:#ffffff; font-family:${fontStack}; font-size:12px; font-weight:600; text-decoration:none; padding:6px 14px; border-radius:4px;">${escapeHtml(data.ctaText)}</a></div>`
}

/**
 * Helper to build disclaimer
 */
function renderDisclaimer(data: SignatureData, fontStack: string): string {
  if (!data.disclaimer || !data.disclaimer.trim()) return ''
  return `<tr><td colspan="2" style="padding-top:12px; border-top:1px solid #e2e8f0; font-family:${fontStack}; font-size:11px; line-height:1.4; color:#94a3b8;">${escapeHtml(data.disclaimer)}</td></tr>`
}

/**
 * Helper for "Made with Giggal" subtle tag
 */
function renderMadeWithGiggal(data: SignatureData, fontStack: string): string {
  if (!data.showMadeWithGiggal) return ''
  return `<tr><td colspan="2" style="padding-top:6px; font-family:${fontStack}; font-size:10px; color:#94a3b8;"><a href="https://giggal.ai" target="_blank" rel="noopener noreferrer" style="color:#94a3b8; text-decoration:none;">Created with Giggal.ai</a></td></tr>`
}

/**
 * Collect contact lines (phone, mobile, email, website, address)
 */
function collectContactItems(data: SignatureData, fontStack: string): string[] {
  const items: string[] = []
  if (data.phone?.trim()) {
    items.push(
      `<span style="color:#64748b;">Phone:</span> <a href="tel:${escapeHtml(data.phone.trim())}" style="color:#334155; text-decoration:none; font-family:${fontStack};">${escapeHtml(data.phone.trim())}</a>`
    )
  }
  if (data.mobile?.trim()) {
    items.push(
      `<span style="color:#64748b;">Mobile:</span> <a href="tel:${escapeHtml(data.mobile.trim())}" style="color:#334155; text-decoration:none; font-family:${fontStack};">${escapeHtml(data.mobile.trim())}</a>`
    )
  }
  if (data.email?.trim()) {
    items.push(
      `<span style="color:#64748b;">Email:</span> <a href="mailto:${escapeHtml(data.email.trim())}" style="color:#334155; text-decoration:none; font-family:${fontStack};">${escapeHtml(data.email.trim())}</a>`
    )
  }
  if (data.website?.trim()) {
    const rawUrl = data.website.trim()
    const clean = cleanUrl(rawUrl)
    const display = rawUrl.replace(/^https?:\/\//i, '').replace(/\/$/, '')
    items.push(
      `<span style="color:#64748b;">Web:</span> <a href="${escapeHtml(clean)}" target="_blank" rel="noopener noreferrer" style="color:#334155; text-decoration:none; font-family:${fontStack};">${escapeHtml(display)}</a>`
    )
  }
  if (data.address?.trim()) {
    items.push(`<span style="color:#64748b;">Address:</span> <span style="color:#334155;">${escapeHtml(data.address.trim())}</span>`)
  }
  return items
}

/**
 * Generate Table-Based HTML with inline CSS (max 600px width)
 */
export function generateSignatureHtml(data: SignatureData): string {
  const fontObj = SIGNATURE_FONTS.find((f) => f.name === data.font) || SIGNATURE_FONTS[0]
  const fontStack = fontObj.stack
  const contactItems = collectContactItems(data, fontStack)
  const socialHtml = renderSocialRow(data, fontStack)
  const ctaHtml = renderCta(data, fontStack)
  const disclaimerHtml = renderDisclaimer(data, fontStack)
  const madeWithHtml = renderMadeWithGiggal(data, fontStack)

  const titleCompanyParts = [data.jobTitle?.trim(), data.department?.trim(), data.company?.trim()].filter(Boolean)
  const titleCompany = titleCompanyParts.join(' · ')
  const pronouns = data.pronouns?.trim() ? ` <span style="font-size:12px; font-weight:normal; color:#64748b;">(${escapeHtml(data.pronouns.trim())})</span>` : ''

  // Template 1: Simple text
  if (data.template === 'simple-text') {
    return `<table cellpadding="0" cellspacing="0" border="0" style="max-width:600px; font-family:${fontStack}; font-size:13px; line-height:1.45; color:#334155;">
  <tr>
    <td style="padding-bottom:4px;">
      <span style="font-size:16px; font-weight:bold; color:#0f172a;">${escapeHtml(data.fullName)}${pronouns}</span>
    </td>
  </tr>
  ${titleCompany ? `<tr><td style="padding-bottom:8px; font-size:13px; font-weight:500; color:${data.accentColor};">${escapeHtml(titleCompany)}</td></tr>` : ''}
  ${
    contactItems.length > 0
      ? `<tr><td style="padding-bottom:6px; font-size:12px; color:#475569;">${contactItems.join('<br />')}</td></tr>`
      : ''
  }
  ${socialHtml ? `<tr><td>${socialHtml}</td></tr>` : ''}
  ${ctaHtml ? `<tr><td>${ctaHtml}</td></tr>` : ''}
  ${disclaimerHtml}
  ${madeWithHtml}
</table>`
  }

  // Template 2: Logo left
  if (data.template === 'logo-left') {
    const hasLogo = !!data.logoUrl?.trim()
    const logoCol = hasLogo
      ? `<td valign="top" style="padding-right:16px; width:100px; text-align:center;">
      <img src="${escapeHtml(data.logoUrl?.trim())}" alt="${escapeHtml(data.company || 'Logo')}" width="90" style="display:block; max-width:90px; height:auto; border:0;" />
    </td>`
      : ''

    return `<table cellpadding="0" cellspacing="0" border="0" style="max-width:600px; font-family:${fontStack}; font-size:13px; line-height:1.45; color:#334155;">
  <tr>
    ${logoCol}
    <td valign="top" style="${hasLogo ? `border-left:2px solid ${data.accentColor}; padding-left:16px;` : ''}">
      <div><span style="font-size:16px; font-weight:bold; color:#0f172a;">${escapeHtml(data.fullName)}${pronouns}</span></div>
      ${titleCompany ? `<div style="font-size:13px; font-weight:500; color:${data.accentColor}; margin-top:2px; margin-bottom:8px;">${escapeHtml(titleCompany)}</div>` : '<div style="margin-bottom:8px;"></div>'}
      ${contactItems.length > 0 ? `<div style="font-size:12px; color:#475569;">${contactItems.join('<br />')}</div>` : ''}
      ${socialHtml}
      ${ctaHtml}
    </td>
  </tr>
  ${disclaimerHtml}
  ${madeWithHtml}
</table>`
  }

  // Template 3: Photo with divider
  if (data.template === 'photo-divider') {
    const hasPhoto = !!data.photoUrl?.trim()
    const photoCol = hasPhoto
      ? `<td valign="top" style="padding-right:16px; width:80px; text-align:center;">
      <img src="${escapeHtml(data.photoUrl?.trim())}" alt="${escapeHtml(data.fullName)}" width="70" height="70" style="display:block; width:70px; height:70px; border-radius:50%; border:0; object-fit:cover;" />
    </td>`
      : ''

    return `<table cellpadding="0" cellspacing="0" border="0" style="max-width:600px; font-family:${fontStack}; font-size:13px; line-height:1.45; color:#334155;">
  <tr>
    ${photoCol}
    <td valign="top" style="${hasPhoto ? `border-left:2px solid ${data.accentColor}; padding-left:16px;` : ''}">
      <div><span style="font-size:16px; font-weight:bold; color:#0f172a;">${escapeHtml(data.fullName)}${pronouns}</span></div>
      ${titleCompany ? `<div style="font-size:13px; font-weight:500; color:${data.accentColor}; margin-top:2px; margin-bottom:8px;">${escapeHtml(titleCompany)}</div>` : '<div style="margin-bottom:8px;"></div>'}
      ${contactItems.length > 0 ? `<div style="font-size:12px; color:#475569;">${contactItems.join('<br />')}</div>` : ''}
      ${socialHtml}
      ${ctaHtml}
    </td>
  </tr>
  ${disclaimerHtml}
  ${madeWithHtml}
</table>`
  }

  // Template 4: Compact (horizontal / condensed)
  const compactContact = contactItems.join(' <span style="color:#cbd5e1; margin:0 4px;">·</span> ')
  return `<table cellpadding="0" cellspacing="0" border="0" style="max-width:600px; font-family:${fontStack}; font-size:12px; line-height:1.4; color:#334155;">
  <tr>
    <td>
      <span style="font-size:14px; font-weight:bold; color:#0f172a;">${escapeHtml(data.fullName)}${pronouns}</span>
      ${titleCompany ? `<span style="color:#94a3b8; margin:0 6px;">/</span><span style="font-weight:600; color:${data.accentColor};">${escapeHtml(titleCompany)}</span>` : ''}
    </td>
  </tr>
  ${compactContact ? `<tr><td style="padding-top:4px; font-size:12px; color:#475569;">${compactContact}</td></tr>` : ''}
  ${socialHtml ? `<tr><td style="padding-top:4px;">${socialHtml}</td></tr>` : ''}
  ${ctaHtml ? `<tr><td>${ctaHtml}</td></tr>` : ''}
  ${disclaimerHtml}
  ${madeWithHtml}
</table>`
}

/**
 * Generate Plain-Text signature representation for mobile apps
 */
export function generatePlainTextSignature(data: SignatureData): string {
  const lines: string[] = []

  // Name & Pronouns
  let nameLine = data.fullName.trim()
  if (data.pronouns?.trim()) nameLine += ` (${data.pronouns.trim()})`
  lines.push(nameLine)

  // Title / Company
  const titleParts = [data.jobTitle?.trim(), data.department?.trim(), data.company?.trim()].filter(Boolean)
  if (titleParts.length > 0) lines.push(titleParts.join(' | '))

  // Divider
  lines.push('---')

  // Contact items
  if (data.phone?.trim()) lines.push(`Phone: ${data.phone.trim()}`)
  if (data.mobile?.trim()) lines.push(`Mobile: ${data.mobile.trim()}`)
  if (data.email?.trim()) lines.push(`Email: ${data.email.trim()}`)
  if (data.website?.trim()) lines.push(`Web: ${data.website.trim()}`)
  if (data.address?.trim()) lines.push(`Address: ${data.address.trim()}`)

  // CTA
  if (data.ctaText?.trim()) {
    lines.push(`${data.ctaText.trim()}: ${data.ctaUrl?.trim() || ''}`)
  }

  // Social
  if (data.socialLinks) {
    const socials: string[] = []
    for (const plat of SOCIAL_PLATFORMS) {
      const v = data.socialLinks[plat.key]
      if (v?.trim()) socials.push(`${plat.label}: ${v.trim()}`)
    }
    if (socials.length > 0) lines.push(socials.join(' | '))
  }

  // Disclaimer
  if (data.disclaimer?.trim()) {
    lines.push('')
    lines.push(data.disclaimer.trim())
  }

  if (data.showMadeWithGiggal) {
    lines.push('')
    lines.push('Created with Giggal.ai')
  }

  return lines.join('\n')
}
