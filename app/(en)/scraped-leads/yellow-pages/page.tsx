import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  AlertTriangle,
  Database,
  ArrowRight,
  Server,
  Zap,
  Filter,
  CheckCircle2,
  HelpCircle,
  FileSpreadsheet,
  Globe,
  Layers,
  Flame,
  Award,
  ChevronRight,
  MailCheck,
  Search,
  RefreshCw,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Yellow Pages Email Verification | Clean Yellow Pages Scraped Leads',
  description:
    'Clean unverified Yellow Pages leads with 98.5% accuracy on catch-all domains. Eliminate dead directory domains, spam traps, and protect your cold email deliverability.',
  alternates: {
    canonical: 'https://giggal.io/scraped-leads/yellow-pages',
  },
  openGraph: {
    title: 'Yellow Pages Email Verification - Clean Directory Leads',
    description:
      'Purge defunct directory listings, obsolete domains, and spam traps from Yellow Pages leads with 98.5% catch-all accuracy. Protect sender score.',
    url: 'https://giggal.io/scraped-leads/yellow-pages',
    siteName: 'Giggal.io',
    type: 'website',
  },
};

interface FaqItem {
  question: string;
  answer: string;
}

const yellowPagesFaqs: FaqItem[] = [
  {
    question: 'Why do Yellow Pages leads have significantly higher bounce rates than other directories?',
    answer:
      'Yellow Pages is one of the earliest digital business directories on the web. Millions of business entries were created five to fifteen years ago. Small service companies experience high turnover, rebranding, and domain expirations. Scrapers harvest these abandoned business websites, leading to invalid mail exchangers, dead DNS records, and hard bounces exceeding 35% on raw exports when seeking local business leads.',
  },
  {
    question: 'How does Yellow Pages email verification handle catch-all business domains?',
    answer:
      'Most local contractors, plumbers, electricians, and independent service providers on Yellow Pages use Google Workspace or Microsoft 365 configured with catch-all acceptance. Traditional verification tools mark every catch-all address as risky or unknown, forcing marketers to discard genuine prospects. Giggal performs Yellow Pages email verification by testing individual mailbox responses without sending messages, validating catch-all addresses with 98.5% precision.',
  },
  {
    question: 'What second-hop scraper errors occur during Yellow Pages data extraction?',
    answer:
      'Because Yellow Pages often hides direct email addresses behind contact forms or JavaScript, scrapers follow outbound website links to parse homepage and contact page HTML. This process mistakenly scrapes website agency credits, privacy policy emails, webmaster addresses, and third-party software contacts rather than the actual business owner, contaminating your campaign database and ruining cold email deliverability.',
  },
  {
    question: 'Can sending raw Yellow Pages leads trigger spam trap blacklists?',
    answer:
      'Yes. When small businesses shut down, their domains frequently expire. Major anti-spam organizations like Spamhaus acquire abandoned legacy business domains and convert them into recycled spam traps. Because Yellow Pages directories contain stale listings, sending cold campaigns to uncleaned Yellow Pages leads exposes your domain to severe blacklisting.',
  },
  {
    question: 'How does cleaning Yellow Pages exports protect cold email deliverability?',
    answer:
      'Maintaining top cold email deliverability requires keeping your hard bounce rate below 2%. By filtering inactive mailboxes, resolving catch-all addresses with 98.5% accuracy, removing webmaster duplicates, and stripping spam traps, you generate a clean email list that ensures sending platforms like Instantly and Smartlead maintain pristine sender reputations.',
  },
  {
    question: 'Which file formats and fields does Giggal support for Yellow Pages list cleaning?',
    answer:
      'Giggal accepts standard CSV, XLSX, and TXT files exported from popular scrapers like Octoparse, Apify, Leads Sniper, and custom Python scrapers. All original directory fields such as business name, phone number, physical address, category, and website URL are preserved intact in the clean email list export.',
  },
  {
    question: 'How does Giggal detect dead DNS and parked domains in Yellow Pages exports?',
    answer:
      'Our engine performs real-time DNS queries against authoritative name servers, checking for valid MX records, A records, and domain registrar parking indicators. If an old directory listing points to an expired domain displaying a registrar advertisement or auction page, Giggal automatically flags the record as invalid, preventing hard bounces and protecting cold email deliverability.',
  },
  {
    question: 'What is the optimal workflow for importing cleaned Yellow Pages leads into cold email sending tools?',
    answer:
      'After completing Yellow Pages email verification, download your cleaned export file filtered to only include deliverable records and catch-all addresses verified at 98.5% accuracy. Import this verified clean email list directly into Instantly, Smartlead, or Lemlist. Set your daily sending limits per mailbox to 30 to 40 messages to maintain warm sending reputations across your prospecting campaigns.',
  },
];

export default function YellowPagesScrapedLeadsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-500 selection:text-neutral-950">
      {/* Breadcrumbs */}
      <section className="border-b border-neutral-800 bg-neutral-900/50 py-3 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-neutral-400">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-neutral-600" />
          <Link href="/scraped-leads" className="hover:text-emerald-400 transition-colors">
            Scraped Leads
          </Link>
          <ChevronRight className="w-4 h-4 text-neutral-600" />
          <span className="text-neutral-200">Yellow Pages Directory</span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Yellow Pages Email Verification for Clean, Deliverable Local B2B Data
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Eliminate obsolete directory listings, expired business domains, and spam traps from your Yellow Pages leads. Validate catch-all local business mailboxes with 98.5% accuracy to secure maximum cold email deliverability.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 text-neutral-950 font-bold text-base hover:bg-emerald-400 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 inline-flex items-center justify-center space-x-2"
            >
              <span>Verify Yellow Pages Leads Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-200 font-semibold text-base hover:bg-neutral-800 hover:text-white transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>View Pricing Plans</span>
            </Link>
          </div>

          {/* Metric Highlights */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-3xl font-extrabold text-red-400">38.4%</div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">Average Invalid Rate in Raw Directory Scrapes</div>
            </div>
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-3xl font-extrabold text-emerald-400">98.5%</div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">Accuracy on Catch-All Local Business Mailboxes</div>
            </div>
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-3xl font-extrabold text-blue-400">&lt; 1.0%</div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">Cold Outreach Bounce Rate After Verification</div>
            </div>
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-3xl font-extrabold text-purple-400">Zero</div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">Spam Trap and Blacklist Risk Post-Scrubbing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Decay & Hazards Section */}
      <section className="py-20 bg-neutral-900/30 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Why Raw Yellow Pages Scrapes Destroy Your Sender Score
            </h2>
            <p className="mt-4 text-neutral-400 leading-relaxed text-base sm:text-lg">
              Yellow Pages directories (YP.com, YellowPages.ca, Yell) remain popular sources for acquiring local business leads, but relying on unverified exports causes catastrophic delivery failures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative">
              <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center text-red-400 mb-6">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Severe Directory Data Decay</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Directory listings accumulate over decades. In trade industries like construction, roofing, and independent retail, up to 20% of small companies shutter or rebrand annually. Scrapers harvest listings linked to abandoned domain names that no longer possess active mail servers.
              </p>
              <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 text-xs text-red-300 font-mono">
                Result: 30%+ instant hard bounce rate from NXDOMAIN errors.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative">
              <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-amber-400 mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Second-Hop Scraping Contamination</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                When scrapers encounter directory listings with hidden email fields, they follow outward links to crawl homepages and footer code. Regex scripts indiscriminately grab web designer credit lines, hosting support contacts, and privacy compliance mailboxes.
              </p>
              <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 text-xs text-amber-300 font-mono">
                Result: Cold pitches sent to web agencies instead of business owners.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative">
              <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-6">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Recycled Spam Trap Infection</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Security blocklists and major spam research groups routinely register expired business domains that were previously published in legacy business directories. Sending unsolicited email to these addresses triggers automated firewall blacklisting within hours.
              </p>
              <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80 text-xs text-purple-300 font-mono">
                Result: Instant blacklisting on Spamhaus, Barracuda, and SORBS.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Anatomy of Scraped Record Failure Points */}
      <section className="py-20 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Anatomy of a Scraped Yellow Pages Record: Six Hidden Hazards
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg">
              Understanding why raw Yellow Pages email verification is non-negotiable for protecting cold email deliverability across B2B outreach campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-red-950/60 text-red-400">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Lapsed DNS & NXDOMAIN</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Directory listings often cite business domains that expired years ago. When cold mailers attempt delivery, mail servers return immediate NXDOMAIN errors, causing severe reputation penalties on sender IP pools.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-amber-950/60 text-amber-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Catch-All Misclassification</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Small business mail servers accept every incoming connection by default. Outdated verifiers discard all catch-all mailboxes, deleting 35% of valid contractor and retail prospects from your outreach campaigns.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400">
                  <Filter className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Agency Webmaster Scrapes</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Automated regex scrapers follow website links on directory pages and grab contact emails from site footers. These belong to digital agencies and website developers rather than the business owners you want to target.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-950/60 text-purple-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Parked Registrar Pages</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Many domain names registered in legacy Yellow Pages directories are now parked on GoDaddy, Sedo, or HugeDomains. They retain default DNS records but possess no active mailboxes, generating hard bounces.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Role-Based Gatekeeper Accounts</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Scraped directory lists are saturated with generic role accounts such as info@, sales@, and office@. Without precise classification, sending blasts to these mailboxes produces high complaint rates and low opens.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-red-950/60 text-red-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Pristine Honeypot Traps</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Anti-spam organizations place hidden decoy email addresses on legacy directory pages to catch automated scrapers. Sending to even one honeypot trap can get your sending domain permanently blacklisted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catch-All Precision Breakdown */}
      <section className="py-20 border-b border-neutral-800 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Why Standard Verifiers Fail on Yellow Pages Catch-All Domains
              </h2>
              <p className="mt-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                Over 35% of local commercial contractors and independent companies found in Yellow Pages configure their Google Workspace or Microsoft 365 tenants as catch-all domains. When a verification tool asks their mail exchanger if an address exists, the server responds affirmatively to every mailbox query.
              </p>
              <p className="mt-3 text-neutral-400 text-base leading-relaxed">
                Conventional email verification tools classify every catch-all domain as unverifiable or risky. Sales teams following their advice discard over a third of their best prospective customers when harvesting local business leads. Giggal solves this challenge using deep behavioral response analysis during Yellow Pages email verification, validating catch-all accounts with 98.5% accuracy without triggering false rejections.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300">
                    <strong className="text-white">Recover 35%+ Lost Leads:</strong> Turn discard piles into verified sales contacts while maintaining high cold email deliverability.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300">
                    <strong className="text-white">No Test Messages Sent:</strong> Mailboxes are evaluated through server protocol analysis, keeping your outreach invisible until you launch.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300">
                    <strong className="text-white">Full Platform Compatibility:</strong> Cleaned files import directly into cold email sending systems such as Instantly, Smartlead, and Lemlist.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 shadow-2xl relative">
                <div className="text-sm font-bold text-neutral-300 mb-4 pb-3 border-b border-neutral-800 flex items-center justify-between">
                  <span>Yellow Pages Verification Comparison</span>
                  <span className="text-xs text-neutral-500 font-mono">Sample: 10,000 Records</span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800">
                    <div className="text-neutral-400 font-semibold mb-1">Raw Scraped File</div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Total Leads:</span> <span>10,000</span>
                    </div>
                    <div className="flex justify-between text-red-400">
                      <span>Dead/Invalid Domains:</span> <span>3,840 (38.4%)</span>
                    </div>
                    <div className="flex justify-between text-amber-400">
                      <span>Catch-All Domains:</span> <span>3,620 (36.2%)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800">
                    <div className="text-neutral-400 font-semibold mb-1">Old-School Verifiers</div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Valid Output:</span> <span>2,540 (25.4%)</span>
                    </div>
                    <div className="flex justify-between text-red-400">
                      <span>Discarded as Risky:</span> <span>3,620 Catch-Alls</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Pipeline Value Lost:</span> <span>Huge ($$$)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60">
                    <div className="text-emerald-400 font-semibold mb-1">Giggal Verified Output</div>
                    <div className="flex justify-between text-neutral-200">
                      <span>Valid Deliverable Leads:</span> <span className="font-bold text-emerald-400">5,980 (59.8%)</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Catch-Alls Validated:</span> <span>3,440 (98.5% Acc.)</span>
                    </div>
                    <div className="flex justify-between text-emerald-400">
                      <span>Expected Bounce Rate:</span> <span>&lt; 1.0%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Workflow */}
      <section className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Three Steps from Raw Directory Export to Clean Email List
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg">
              Transform messy, dangerous directory scraper output into an engagement-ready prospecting database in minutes to safely contact local business leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative">
              <div className="w-10 h-10 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Upload Directory File</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Export your leads from Octoparse, Apify, Leads Sniper, or your custom scraper as a CSV or XLSX file. Drop it directly into Giggal. All custom business metadata is safely preserved throughout the verification pipeline.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative">
              <div className="w-10 h-10 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Automated Multi-Layer Scrubbing</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Giggal initiates MX checks, verifies domain active status, isolates webmaster scrapes, eliminates spam traps, and performs Yellow Pages email verification with 98.5% precision on catch-all mailboxes.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative">
              <div className="w-10 h-10 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Export Clean Email List</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Download your verified clean email list filtered by status. Upload directly to Instantly, Smartlead, or your sales platform with confidence that cold email deliverability is completely secured.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Feature Matrix */}
      <section className="py-20 border-b border-neutral-800 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Deep Verification Engine Built for Directory Scraped Data
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg">
              Designed specifically to resolve the anomalies, decay patterns, and second-hop artifacts characteristic of business directory lists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-emerald-400 mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Domain & MX Verification</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Confirms that business web domains have active DNS, valid mail exchange configurations, and responsive mail transfer agents before performing mailbox queries.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-emerald-400 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Catch-All Verification</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Reclaims 35%+ of legitimate contractors and local businesses by classifying catch-all mailboxes with 98.5% accuracy instead of dumping them as dangerous.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-emerald-400 mb-4">
                <Filter className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Webmaster & Role Stripping</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Identifies and segments second-hop scraping artifacts such as web design agency emails, privacy disclaimers, and administrative mailboxes from your clean email list.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-emerald-400 mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Spam Trap Protection</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Maintains up-to-date tracking of recycled domain traps and honeypots commonly seeded across abandoned directory listings to guard your sending domains and cold email deliverability.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-emerald-400 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">High-Speed File Processing</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Scans and validates 10,000 Yellow Pages leads in under 3 minutes with multi-threaded distributed processing and zero false positives.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-emerald-400 mb-4">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Metadata Preservation</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Keeps your scraped company names, phone numbers, addresses, categories, and review ratings perfectly mapped in your cleaned export files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory FAQ Section */}
      <section className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Frequently Asked Questions About Yellow Pages Email Verification
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg">
              Everything you need to know about scrubbing directory leads and maintaining peak cold email deliverability.
            </p>
          </div>

          <div className="space-y-6">
            {yellowPagesFaqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <p className="mt-3 text-neutral-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Call to Action */}
      <section className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Protect Your Outreach Campaigns with Verified Directory Data
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Stop burning sending domains on obsolete directory listings. Run Yellow Pages email verification on your uncleaned Yellow Pages leads and download a clean email list with 98.5% accuracy on catch-all mailboxes today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 text-neutral-950 font-bold text-base hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 inline-flex items-center justify-center space-x-2"
            >
              <span>Get 100 Free Verification Credits</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/scraped-leads"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 font-semibold text-base hover:bg-neutral-800 hover:text-white transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Explore All Scraped Lead Tools</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
