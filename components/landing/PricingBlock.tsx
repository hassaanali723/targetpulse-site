import React from 'react'
import Link from 'next/link'
import { MailCheck, Forward, BadgePercent, MailPlus } from 'lucide-react'
import PricingTable from '@/components/landing/PricingTable'

/**
 * Shared pricing widget used on both the landing page and the /pricing page,
 * so the pricing UI is identical everywhere. Contains: the credit-cost formula
 * chips, the interactive PricingTable, and the "custom volume" contact banner.
 * Render your own section heading above it.
 */
export default function PricingBlock() {
  return (
    <>
      {/* Credit formula chips */}
      <div className="flex justify-center">
        <div className="inline-flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-6 gap-y-2.5 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-2.5 text-center sm:text-left">
          <div className="flex items-center space-x-2.5 whitespace-nowrap text-xs font-bold text-slate-700">
            <MailCheck className="w-4 h-4 text-emerald-600" />
            <span>1 Standard Validation = <strong className="text-emerald-700 font-extrabold">1 Credit</strong></span>
          </div>
          <div className="hidden sm:block h-3.5 w-px bg-slate-300" />
          <div className="flex items-center space-x-2.5 whitespace-nowrap text-xs font-bold text-slate-700">
            <Forward className="w-4 h-4 text-amber-600" />
            <span>1 Catch-All Validation = <strong className="text-amber-700 font-extrabold">2 Credits</strong></span>
          </div>
          <div className="hidden sm:block h-3.5 w-px bg-slate-300" />
          <div className="flex items-center space-x-2.5 whitespace-nowrap text-xs font-bold text-slate-700">
            <BadgePercent className="w-4 h-4 text-indigo-600" />
            <span>Add Catch-All while validating = <strong className="text-indigo-700 font-extrabold">1.5 Credits</strong></span>
            <span className="bg-indigo-100 text-indigo-700 text-[9px] px-1.5 py-0.5 rounded-md font-bold">Save 25%</span>
          </div>
        </div>
      </div>

      <PricingTable />

      {/* Custom volume banner */}
      <div className="bg-indigo-50/50 border-2 border-dashed border-indigo-200 rounded-3xl p-6 text-center max-w-2xl mx-auto shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-200/30">
            <MailPlus className="w-5 h-5" />
          </div>
          <div className="text-left text-sm font-semibold flex-1">
            <h4 className="text-slate-900 font-extrabold text-base leading-tight">Need a custom credit volume?</h4>
            <p className="text-slate-500 text-xs mt-0.5">We offer bespoke plans and dedicated IP verification pool setups for high-volume enterprises.</p>
          </div>
          <Link href="/contact-us" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-xl transition-all shadow shrink-0 whitespace-nowrap">
            Contact Sales
          </Link>
        </div>
      </div>
    </>
  )
}
