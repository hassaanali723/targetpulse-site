'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, XCircle } from 'lucide-react'
import NavbarIt from '@/components/it/NavbarIt'
import FooterIt from '@/components/it/FooterIt'
import Wordmark from '@/components/Wordmark'
import JsonLd from '@/components/JsonLd'
import { breadcrumbIt } from '@/lib/i18n/schemaIt'

// Same form and endpoint as /contact-us; Italian labels and messages.

const fieldClass =
  'w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all'
const labelClass = 'block text-sm font-semibold text-slate-700 mb-2'

export default function ContattiPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Invio non riuscito')
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', phone: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setIsSubmitting(false)
      setError(err instanceof Error ? err.message : 'Invio non riuscito')
      setTimeout(() => setError(''), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbIt([{ name: 'Contatti', path: '/it/contatti' }])} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarIt />

      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Parla con{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">noi</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
          Domande sulla verifica email, aiuto per iniziare o un volume su misura: scrivici e ti rispondiamo di norma entro 24 ore.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 card-vivid-shadow space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 bg-indigo-600">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Inviaci un messaggio</h2>
            </div>

            {submitted && (
              <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl text-emerald-700 text-sm font-semibold flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Grazie! Ti rispondiamo entro 24 ore.</span>
              </div>
            )}
            {error && (
              <div className="p-4 bg-rose-50 border-2 border-rose-200 rounded-xl text-rose-700 text-sm font-semibold flex items-center gap-2.5">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className={labelClass}>Nome e cognome *</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={fieldClass} placeholder="Mario Rossi" />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email *</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={fieldClass} placeholder="mario@azienda.it" />
              </div>
              <div>
                <label htmlFor="company" className={labelClass}>Azienda</label>
                <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className={fieldClass} placeholder="La tua azienda S.r.l." />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Telefono</label>
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={fieldClass} placeholder="+39 02 1234 5678" />
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>Messaggio *</label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={fieldClass} placeholder="Raccontaci di cosa hai bisogno..." />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? <span>Invio in corso...</span> : (<><span>Invia il messaggio</span><Send className="w-4 h-4" /></>)}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-50/50 border-2 border-dashed border-indigo-200 rounded-3xl p-6 flex items-center gap-4">
              <Wordmark className="text-xl" />
              <span className="text-xs font-bold text-slate-500 leading-snug">Persone vere, pronte ad aiutarti. Rispondiamo di norma entro 24 ore, in inglese o in italiano.</span>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 bg-indigo-600"><Mail className="w-6 h-6" /></div>
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-slate-900">Scrivici</h3>
                  <p className="text-sm text-slate-600 font-medium">info@giggal.ai</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 bg-emerald-500"><Phone className="w-6 h-6" /></div>
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-slate-900">Chiamaci</h3>
                  <p className="text-sm text-slate-600 font-medium">+16462697026</p>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Lun-Ven, 9:00-18:00 (ora di Londra)</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 bg-violet-600"><MapPin className="w-6 h-6" /></div>
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-slate-900">Sede</h3>
                  <p className="text-sm text-slate-600 font-medium">Office 17366</p>
                  <p className="text-sm text-slate-600 font-medium">182-184 High Street North</p>
                  <p className="text-sm text-slate-600 font-medium">East Ham, Londra E6 2JA, Regno Unito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">Preferisci non aspettare?</h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">Inizia subito a verificare con 1.000 crediti gratuiti. Nessuna carta richiesta.</p>
          <div className="pt-4">
            <Link href="/it/registrati" className="px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md inline-block hover:scale-[1.03] active:scale-95 duration-200">
              Inizia gratis
            </Link>
          </div>
        </div>
      </section>

      <FooterIt />
    </main>
  )
}
