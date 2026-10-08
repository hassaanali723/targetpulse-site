'use client'

import React, { useState, useMemo } from 'react'
import {
  Copy,
  Check,
  Download,
  AlertTriangle,
  Info,
  Palette,
  Layout,
  ExternalLink,
  Smartphone,
  Eye,
  Code,
} from 'lucide-react'
import {
  generateSignatureHtml,
  generatePlainTextSignature,
  validateImageUrl,
  SIGNATURE_FONTS,
  ACCENT_COLOR_PRESETS,
  type SignatureTemplateId,
  type SignatureFont,
  type SignatureData,
} from '@/lib/tools/emailSignatureCore'

export default function EmailSignatureTool() {
  // Personal Details
  const [fullName, setFullName] = useState('Jane Doe')
  const [jobTitle, setJobTitle] = useState('Account Manager')
  const [company, setCompany] = useState('Example Ltd')
  const [department, setDepartment] = useState('')
  const [pronouns, setPronouns] = useState('')

  // Contact Details
  const [phone, setPhone] = useState('+44 20 7946 0000')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('jane@example.com')
  const [website, setWebsite] = useState('example.com')
  const [address, setAddress] = useState('')

  // Image URLs
  const [logoUrl, setLogoUrl] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')

  // Social Links
  const [linkedin, setLinkedin] = useState('')
  const [xSocial, setXSocial] = useState('')
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [youtube, setYoutube] = useState('')
  const [useSocialIcons, setUseSocialIcons] = useState(false)

  // Styling & Template
  const [template, setTemplate] = useState<SignatureTemplateId>('simple-text')
  const [font, setFont] = useState<SignatureFont>('Arial')
  const [accentColor, setAccentColor] = useState('#4f46e5')

  // CTA & Legal
  const [ctaText, setCtaText] = useState('')
  const [ctaUrl, setCtaUrl] = useState('')
  const [disclaimer, setDisclaimer] = useState('')

  // Made with Giggal option (OFF by default)
  const [showMadeWithGiggal, setShowMadeWithGiggal] = useState(false)

  // View & Copy state
  const [outputTab, setOutputTab] = useState<'preview' | 'html' | 'plain'>('preview')
  const [copiedType, setCopiedType] = useState<string | null>(null)

  // Validation
  const logoValidation = useMemo(() => validateImageUrl(logoUrl), [logoUrl])
  const photoValidation = useMemo(() => validateImageUrl(photoUrl), [photoUrl])

  // Build Signature Data
  const signatureData: SignatureData = useMemo(() => {
    return {
      fullName,
      jobTitle: jobTitle || undefined,
      company: company || undefined,
      department: department || undefined,
      pronouns: pronouns || undefined,
      phone: phone || undefined,
      mobile: mobile || undefined,
      email: email || undefined,
      website: website || undefined,
      address: address || undefined,
      logoUrl: logoUrl.trim() || undefined,
      photoUrl: photoUrl.trim() || undefined,
      socialLinks: {
        linkedin: linkedin.trim() || undefined,
        x: xSocial.trim() || undefined,
        facebook: facebook.trim() || undefined,
        instagram: instagram.trim() || undefined,
        youtube: youtube.trim() || undefined,
      },
      useSocialIcons,
      template,
      font,
      accentColor,
      ctaText: ctaText.trim() || undefined,
      ctaUrl: ctaUrl.trim() || undefined,
      disclaimer: disclaimer.trim() || undefined,
      showMadeWithGiggal,
    }
  }, [
    fullName,
    jobTitle,
    company,
    department,
    pronouns,
    phone,
    mobile,
    email,
    website,
    address,
    logoUrl,
    photoUrl,
    linkedin,
    xSocial,
    facebook,
    instagram,
    youtube,
    useSocialIcons,
    template,
    font,
    accentColor,
    ctaText,
    ctaUrl,
    disclaimer,
    showMadeWithGiggal,
  ])

  // HTML and Plain Text outputs
  const renderedHtml = useMemo(() => generateSignatureHtml(signatureData), [signatureData])
  const plainText = useMemo(() => generatePlainTextSignature(signatureData), [signatureData])
  const htmlLength = renderedHtml.length
  const isOverGmailLimit = htmlLength > 10000

  // Copy signature rich HTML to clipboard
  const handleCopyRichSignature = async () => {
    try {
      const blobHtml = new Blob([renderedHtml], { type: 'text/html' })
      const blobText = new Blob([plainText], { type: 'text/plain' })
      const item = new ClipboardItem({
        'text/html': blobHtml,
        'text/plain': blobText,
      })
      await navigator.clipboard.write([item])
      setCopiedType('rich')
      setTimeout(() => setCopiedType(null), 2500)
    } catch {
      // Fallback: document.execCommand
      const container = document.createElement('div')
      container.innerHTML = renderedHtml
      container.style.position = 'fixed'
      container.style.pointerEvents = 'none'
      container.style.opacity = '0'
      document.body.appendChild(container)
      window.getSelection()?.removeAllRanges()
      const range = document.createRange()
      range.selectNode(container)
      window.getSelection()?.addRange(range)
      document.execCommand('copy')
      document.body.removeChild(container)
      setCopiedType('rich')
      setTimeout(() => setCopiedType(null), 2500)
    }
  }

  // Copy HTML code string
  const handleCopyHtmlCode = async () => {
    try {
      await navigator.clipboard.writeText(renderedHtml)
      setCopiedType('html')
      setTimeout(() => setCopiedType(null), 2500)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = renderedHtml
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopiedType('html')
      setTimeout(() => setCopiedType(null), 2500)
    }
  }

  // Copy plain text
  const handleCopyPlainText = async () => {
    try {
      await navigator.clipboard.writeText(plainText)
      setCopiedType('plain')
      setTimeout(() => setCopiedType(null), 2500)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = plainText
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopiedType('plain')
      setTimeout(() => setCopiedType(null), 2500)
    }
  }

  // Download .html file
  const handleDownloadHtml = () => {
    const blob = new Blob([renderedHtml], { type: 'text/html;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'signature.html'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* LEFT COLUMN: EDITOR FORM */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
        {/* Template Selector */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            1. Select Layout Template
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: 'simple-text', label: 'Simple text' },
              { id: 'logo-left', label: 'Logo left' },
              { id: 'photo-divider', label: 'Photo divider' },
              { id: 'compact', label: 'Compact' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTemplate(t.id as SignatureTemplateId)}
                className={`py-2 px-3 rounded-xl border text-xs font-bold transition text-center ${
                  template === t.id
                    ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 shadow-sm'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Styling: Font & Accent Color */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
          <div>
            <label htmlFor="sig-font" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Font Family
            </label>
            <select
              id="sig-font"
              value={font}
              onChange={(e) => setFont(e.target.value as SignatureFont)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-900 bg-white"
            >
              {SIGNATURE_FONTS.map((f) => (
                <option key={f.name} value={f.name}>
                  {f.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Accent Color
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-8 h-8 rounded-lg border border-slate-300 cursor-pointer p-0.5 bg-white"
              />
              <div className="flex flex-wrap gap-1.5">
                {ACCENT_COLOR_PRESETS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setAccentColor(c)}
                    style={{ backgroundColor: c }}
                    aria-label={`Color ${c}`}
                    className={`w-5 h-5 rounded-full transition ${accentColor === c ? 'ring-2 ring-offset-1 ring-slate-900 scale-110' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            2. Personal &amp; Company Details
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="sig-fullName" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Full Name *
              </label>
              <input
                id="sig-fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jane Doe"
                required
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="sig-jobTitle" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Job Title
              </label>
              <input
                id="sig-jobTitle"
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Account Manager"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="sig-company" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Company
              </label>
              <input
                id="sig-company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Example Ltd"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="sig-dept" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Department (optional)
              </label>
              <input
                id="sig-dept"
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Client Success"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="sig-pronouns" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Pronouns (optional)
              </label>
              <input
                id="sig-pronouns"
                type="text"
                value={pronouns}
                onChange={(e) => setPronouns(e.target.value)}
                placeholder="she/her"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            3. Contact Information
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="sig-phone" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Phone
              </label>
              <input
                id="sig-phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+44 20 7946 0000"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="sig-mobile" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Mobile (optional)
              </label>
              <input
                id="sig-mobile"
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="+44 7700 900077"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="sig-email" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Email
              </label>
              <input
                id="sig-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="sig-website" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Website
              </label>
              <input
                id="sig-website"
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="example.com"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="sig-address" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Office Address (optional)
              </label>
              <input
                id="sig-address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="100 Business Way, London"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>
          </div>
        </div>

        {/* Images: Logo & Photo URLs */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-0.5">
              4. Logo &amp; Photo Links
            </span>
            <p className="text-[11px] text-slate-500">
              Paste an image link. Must be a public HTTPS URL (no direct file uploads).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="sig-logoUrl" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Company Logo URL
              </label>
              <input
                id="sig-logoUrl"
                type="url"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
                placeholder="https://example.com/logo.png"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
              {logoUrl && !logoValidation.valid && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  {logoValidation.warning}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="sig-photoUrl" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Profile Photo URL
              </label>
              <input
                id="sig-photoUrl"
                type="url"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
              {photoUrl && !photoValidation.valid && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  {photoValidation.warning}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              5. Social Links (Optional)
            </span>
            <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer">
              <input
                type="checkbox"
                checked={useSocialIcons}
                onChange={(e) => setUseSocialIcons(e.target.checked)}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              {/* Social icons sourced from Simple Icons under CC0-1.0 Universal */}
              <span>Use small icons instead of text</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="sig-linkedin" className="block text-[11px] font-semibold text-slate-600 mb-1">
                LinkedIn Profile URL
              </label>
              <input
                id="sig-linkedin"
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="https://linkedin.com/in/..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="sig-x" className="block text-[11px] font-semibold text-slate-600 mb-1">
                X / Twitter URL
              </label>
              <input
                id="sig-x"
                type="url"
                value={xSocial}
                onChange={(e) => setXSocial(e.target.value)}
                placeholder="https://x.com/..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="sig-facebook" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Facebook URL
              </label>
              <input
                id="sig-facebook"
                type="url"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                placeholder="https://facebook.com/..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="sig-instagram" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Instagram URL
              </label>
              <input
                id="sig-instagram"
                type="url"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="https://instagram.com/..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="sig-youtube" className="block text-[11px] font-semibold text-slate-600 mb-1">
                YouTube Channel URL
              </label>
              <input
                id="sig-youtube"
                type="url"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
                placeholder="https://youtube.com/@..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>
          </div>
        </div>

        {/* CTA & Legal */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            6. Call-to-Action &amp; Legal
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="sig-ctaText" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Button Text (optional)
              </label>
              <input
                id="sig-ctaText"
                type="text"
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                placeholder="Book a 15-minute call"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="sig-ctaUrl" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Button URL
              </label>
              <input
                id="sig-ctaUrl"
                type="url"
                value={ctaUrl}
                onChange={(e) => setCtaUrl(e.target.value)}
                placeholder="https://cal.com/..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="sig-disclaimer" className="block text-[11px] font-semibold text-slate-600 mb-1">
                Legal Disclaimer (optional)
              </label>
              <textarea
                id="sig-disclaimer"
                rows={2}
                value={disclaimer}
                onChange={(e) => setDisclaimer(e.target.value)}
                placeholder="The content of this email is confidential..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
              />
            </div>

            {/* Show "Made with Giggal" link option (OFF by default) */}
            <div className="sm:col-span-2 pt-1">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showMadeWithGiggal}
                  onChange={(e) => setShowMadeWithGiggal(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>Show &ldquo;Made with Giggal&rdquo; link (off by default)</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: PREVIEW & ACTIONS (STICKY) */}
      <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
        {/* Output Mode Switcher */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setOutputTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  outputTab === 'preview'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>
              <button
                type="button"
                onClick={() => setOutputTab('html')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  outputTab === 'html'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>HTML Code</span>
              </button>
              <button
                type="button"
                onClick={() => setOutputTab('plain')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  outputTab === 'plain'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Plain Text</span>
              </button>
            </div>

            {/* Character counter */}
            <div className="text-[11px] font-mono">
              <span className={isOverGmailLimit ? 'text-red-600 font-bold' : 'text-slate-500 font-medium'}>
                {htmlLength.toLocaleString()}/10,000 chars
              </span>
            </div>
          </div>

          {isOverGmailLimit && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>Exceeds Gmail&apos;s 10,000 character signature limit. Shorten text or URLs.</span>
            </div>
          )}

          {/* VIEW: LIVE PREVIEW */}
          {outputTab === 'preview' && (
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 min-h-[220px] overflow-x-auto">
              <div
                dangerouslySetInnerHTML={{ __html: renderedHtml }}
                className="select-text"
              />
            </div>
          )}

          {/* VIEW: RAW HTML */}
          {outputTab === 'html' && (
            <div className="space-y-2">
              <textarea
                readOnly
                rows={10}
                value={renderedHtml}
                className="w-full p-3 font-mono text-[11px] bg-slate-900 text-slate-100 rounded-xl border border-slate-800 select-all"
              />
            </div>
          )}

          {/* VIEW: PLAIN TEXT */}
          {outputTab === 'plain' && (
            <div className="space-y-2">
              <textarea
                readOnly
                rows={10}
                value={plainText}
                className="w-full p-3 font-mono text-xs bg-slate-50 text-slate-800 rounded-xl border border-slate-200 select-all"
              />
              <p className="text-[11px] text-slate-500">
                Recommended for mobile email apps such as Gmail on iOS/Android.
              </p>
            </div>
          )}

          {/* Primary Action Buttons */}
          <div className="space-y-2.5 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={handleCopyRichSignature}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition"
            >
              {copiedType === 'rich' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedType === 'rich' ? 'Signature Copied! Paste into Email Client' : 'Copy signature'}</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleCopyHtmlCode}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs transition"
              >
                {copiedType === 'html' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>Copy HTML code</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadHtml}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs transition"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span>Download .html</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopyPlainText}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs transition"
            >
              {copiedType === 'plain' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Smartphone className="w-3.5 h-3.5 text-slate-400" />}
              <span>Copy plain-text version</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
