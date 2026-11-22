import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  ArrowRight,
  Database,
  MapPin,
  Search,
  Globe,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Zap,
  HelpCircle,
  Briefcase,
  Store,
  ChevronRight,
  Sparkles,
  Server,
  FileSpreadsheet,
  MailCheck,
  Filter,
  Flame,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Scraped Leads Email Verification | Clean B2B & Directory Exports',
  description:
    'Run scraped leads email verification for Google Maps, Outscraper, Scrap.io, Apify, D7, Yelp, Yellow Pages, and Bark. Validate catch-all mailboxes with 98.5% accuracy.',
  alternates: {
    canonical: 'https://giggal.io/scraped-leads',
  },
  openGraph: {
    title: 'Scraped Leads Email Verification - Clean Directory Exports',
    description:
      'Purge defunct businesses, invalid domains, and spam traps from scraped lists. Verify catch-all mailboxes with 98.5% accuracy to protect cold email deliverability.',
    url: 'https://giggal.io/scraped-leads',
    siteName: 'Giggal.io',
    type: 'website',
  },
};

interface ScraperToolCard {
  title: string;
  slug: string;
  category: string;
  description: string;
  highlight: string;
  icon: any;
}

const scraperTools: ScraperToolCard[] = [
  {
    title: 'Google Maps Scraped Leads',
    slug: '/scraped-leads/google-maps',
    category: 'Map & Places Scrapers',
    description:
      'Scrub raw exports from G-Maps scrapers. Eliminate closed brick-and-mortar storefronts, dead domains, and validate local trade catch-alls with 98.5% precision.',
    highlight: 'Overcomes 20%+ annual local business closure rate',
    icon: MapPin,
  },
  {
    title: 'Outscraper Export Cleaning',
    slug: '/scraped-leads/outscraper',
    category: 'Multi-Source Scrapers',
    description:
      'Filter out secondary regex scraping errors, webmaster emails, and honeypots from Outscraper CSV files to preserve cold email deliverability.',
    highlight: 'Purges generic website agency credit emails',
    icon: Database,
  },
  {
    title: 'Scrap.io Export Verification',
    slug: '/scraped-leads/scrap-io',
    category: 'Global Map Extraction',
    description:
      'Clean multi-country Scrap.io files across international ccTLDs. Resolve Google Workspace catch-all mailboxes and prevent hard bounce suspensions.',
    highlight: 'Handles international domain and DNS decay',
    icon: Globe,
  },
  {
    title: 'Apify Lead Cleaning',
    slug: '/scraped-leads/apify',
    category: 'Actor Datasets',
    description:
      'Validate raw datasets harvested by Apify cloud actors. Strip malformed syntax, bot protection decoy addresses, and parked registrar pages.',
    highlight: 'Isolates Cloudflare and scraper trap decoys',
    icon: Zap,
  },
  {
    title: 'D7 Lead Finder Verification',
    slug: '/scraped-leads/d7-lead-finder',
    category: 'B2B Search Engines',
    description:
      'Clean high-speed D7 Lead Finder exports. Separate active commercial decision makers from stale listings and unmonitored role mailboxes.',
    highlight: 'Removes dead listings and expired web domains',
    icon: Search,
  },
  {
    title: 'Yelp Directory Leads',
    slug: '/scraped-leads/yelp',
    category: 'Review Directories',
    description:
      'Clean scraped Yelp business listings. Filter out unmonitored general mailboxes, obsolete restaurant domains, and recycled spam traps.',
    highlight: 'Neutralizes anti-scraping directory decoys',
    icon: Store,
  },
  {
    title: 'Yellow Pages Directory Cleaning',
    slug: '/scraped-leads/yellow-pages',
    category: 'Legacy Directories',
    description:
      'Purge legacy listings, defunct contractors, and expired domains from YP.com and Yell exports while validating catch-alls with 98.5% accuracy.',
    highlight: 'Eliminates 38%+ dead domains in legacy directories',
    icon: Layers,
  },
  {
    title: 'Bark Service Provider Leads',
    slug: '/scraped-leads/bark',
    category: 'Service Marketplaces',
    description:
      'Clean solo freelancer and agency leads from Bark.com. Remove expired portfolio domains and validate agency catch-alls with 98.5% precision.',
    highlight: 'Recovers 35%+ agency catch-all mailboxes',
    icon: Briefcase,
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const hubFaqs: FaqItem[] = [
  {
    question: 'Why do scraped leads produce significantly higher bounce rates than inbound contact forms?',
    answer:
      'Inbound forms capture verified email addresses submitted directly by active users who want to hear from you. Web scrapers, by contrast, harvest public HTML text using automated regular expressions across online directories and social listings. They pull in expired domain names, closed storefronts, website builder template emails, and anti-scraping honeypots. Sending cold outreach to raw scraped leads frequently generates hard bounce rates exceeding 30%, which quickly degrades sender reputation.',
  },
  {
    question: 'How does scraped leads email verification resolve catch-all business domains?',
    answer:
      'Over 35% of local commercial businesses and digital agencies configure Google Workspace or Microsoft 365 with catch-all routing enabled. Standard verification tools mark every catch-all address as risky and instruct users to discard them. Giggal performs deep mail server protocol interrogation to evaluate mailbox responses without sending messages, validating catch-all addresses with 98.5% accuracy to produce a dependable clean email list.',
  },
  {
    question: 'Will Giggal preserve the original metadata columns from my directory scraper?',
    answer:
      'Yes. When you upload a CSV, XLSX, or TXT export from Google Maps, Outscraper, Scrap.io, Apify, D7, Yelp, Yellow Pages, or Bark, Giggal retains all original columns including business name, telephone, physical address, review score, and website URL. Your cleaned export contains your original data enriched with precise verification status flags ready for campaign segmentation.',
  },
  {
    question: 'What bounce rate can I expect after verifying scraped leads with Giggal?',
    answer:
      'When you filter your campaigns to deliverable addresses and catch-all mailboxes verified at 98.5% accuracy, your cold outreach campaigns maintain an average hard bounce rate below 1.0%. This keeps your outreach safely within the deliverability thresholds required by Google, Microsoft, Instantly, and Smartlead, protecting cold email deliverability.',
  },
  {
    question: 'How does Giggal detect dead DNS and parked registrar domains in scraped directories?',
    answer:
      'Our verification engine conducts real-time authoritative DNS queries, confirming active MX records, valid A records, and registrar parking signatures. If a scraped business listing points to an abandoned domain displaying a registrar advertisement or auction page, Giggal automatically flags the record as invalid, preventing hard bounces before they damage your sending domain.',
  },
  {
    question: 'Can sending uncleaned scraped leads result in spam trap blacklisting?',
    answer:
      'Yes. When small businesses dissolve, their domain names eventually lapse. Threat intelligence organizations like Spamhaus acquire abandoned legacy business domains and convert them into recycled spam traps. Sending cold email campaigns to uncleaned scraped leads exposes your sender domain to immediate firewall blacklisting.',
  },
  {
    question: 'What is the difference between single-tier syntax checking and deep mailbox verification?',
    answer:
      'Single-tier syntax checkers only verify if an email address follows standard RFC formatting rules (such as having an @ symbol and a valid domain format). Deep mailbox verification, as performed by Giggal, simulates a mail transfer handshake with the recipient mail server, confirms the specific mailbox exists, validates catch-all routing with 98.5% precision, and inspects MX records without sending marketing messages.',
  },
  {
    question: 'How should cold outreach agencies structure sending volumes when prospecting local business leads?',
    answer:
      'When prospecting local business leads using a clean email list verified with Giggal, we recommend assigning no more than 30 to 40 emails per sending inbox per day. Spread your outreach across multiple secondary domains and warmup schedules. By combining verified contacts with conservative daily limits, you secure top tier inbox placement across Google Workspace and Microsoft 365 inboxes.',
  },
];

export default function ScrapedLeadsHubPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-500 selection:text-neutral-950">
      {/* Breadcrumbs */}
      <section className="border-b border-neutral-800 bg-neutral-900/50 py-3 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-neutral-400">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-neutral-600" />
          <span className="text-neutral-200">Scraped Leads Cleaning</span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Directory & Web Scraper Data Hygiene</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Scraped Leads Email Verification for High Deliverability Cold Outreach
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Raw scraped exports from maps, directories, and web scrapers contain up to 35% invalid emails, expired domains, and spam traps. Run scraped leads email verification to validate local business mailboxes and resolve catch-all domains with 98.5% precision to turn raw directories into deliverable local business leads.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 text-neutral-950 font-bold text-base hover:bg-emerald-400 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 inline-flex items-center justify-center space-x-2"
            >
              <span>Clean Your Scraped Leads Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-200 font-semibold text-base hover:bg-neutral-800 hover:text-white transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>View Bulk Verification Pricing</span>
            </Link>
          </div>

          {/* Metric Highlights */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-3xl font-extrabold text-emerald-400">98.5%</div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">Catch-All Accuracy on SMB & Agency Domains</div>
            </div>
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-3xl font-extrabold text-blue-400">&lt; 1.0%</div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">Target Hard Bounce Rate After Cleaning</div>
            </div>
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-3xl font-extrabold text-amber-400">35%+</div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">Pipeline Recovered from False Risky Flags</div>
            </div>
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-3xl font-extrabold text-purple-400">100%</div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">Original Scraper Metadata Columns Retained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Tools Grid */}
      <section className="py-20 bg-neutral-900/30 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Specialized Verification for Every Scraper Platform
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg">
              Select your data source to explore our dedicated scrubbing engine tailored to that platform’s unique data structure and error patterns to produce a reliable clean email list.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scraperTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={tool.slug}
                  className="group p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-900 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                      {tool.category}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {tool.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80">
                    <span className="text-[11px] font-mono text-neutral-300 block mb-3">
                      {tool.highlight}
                    </span>
                    <span className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                      <span>Explore Verification</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Anatomy of Scraped Leads Failure Points */}
      <section className="py-20 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Why Raw Scraped Lists Destroy Your Cold Email Infrastructure
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg">
              Web harvesters and directory extractors capture public text without validating mail server responsiveness, introducing high risk factors to your campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800/40 text-red-400 flex items-center justify-center mb-6">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Local Business Data Decay</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Independent retail stores, contractors, and hospitality venues experience high churn rates exceeding 20% annually. Harvesters pick up listings from closed businesses whose web domains have expired, resulting in instant NXDOMAIN hard bounces on cold outreach.
              </p>
              <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 text-xs text-red-300 font-mono">
                Impact: 25% to 35% immediate hard bounce rate.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-800/40 text-amber-400 flex items-center justify-center mb-6">
                <Filter className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Second-Hop Scraping Artifacts</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                When scrapers encounter directory listings with hidden email fields, they follow links to crawl external homepages and footers. Regular expression scripts indiscriminately capture web design credits, hosting support mailboxes, and privacy policy notices.
              </p>
              <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 text-xs text-amber-300 font-mono">
                Impact: Sales pitches sent to agencies instead of decision makers.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-800/40 text-purple-400 flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Recycled Honeypot Traps</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Major anti-spam organizations like Spamhaus regularly purchase lapsed business domain names published in historical directories and transform them into spam traps. Sending outreach to these addresses triggers automated firewall blacklisting within hours.
              </p>
              <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 text-xs text-purple-300 font-mono">
                Impact: Permanent sending domain reputation destruction.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catch-All Accuracy Section */}
      <section className="py-20 border-b border-neutral-800 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800/50 text-emerald-400 text-xs font-semibold mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Proprietary Catch-All Resolution</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Recover 35%+ of High-Value Local Business Prospects
              </h2>
              <p className="mt-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                Over 35% of local commercial enterprises, professional practices, and service contractors configure their Google Workspace or Microsoft 365 environments with catch-all routing enabled. When an old-school verifier queries their mail exchanger, the server confirms every mailbox name as valid.
              </p>
              <p className="mt-3 text-neutral-400 text-base leading-relaxed">
                Conventional email verification tools classify every catch-all address as risky or unknown. Sales teams following their warnings discard over a third of their best prospective customers when harvesting local business leads. Giggal solves this challenge using deep behavioral response analysis during scraped leads email verification, validating catch-all accounts with 98.5% accuracy without sending test messages.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300">
                    <strong className="text-white">Recover 35%+ Lost Pipeline:</strong> Transform discarded catch-all leads into verified prospect data while keeping hard bounces under 1%.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300">
                    <strong className="text-white">Zero Test Email Footprint:</strong> Mailboxes are evaluated through server protocol analysis, keeping your outreach completely invisible until campaign launch.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300">
                    <strong className="text-white">Full Outreach Tool Compatibility:</strong> Cleaned files import directly into sending software such as Instantly, Smartlead, and Lemlist to sustain cold email deliverability.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 shadow-2xl">
                <div className="text-sm font-bold text-neutral-300 mb-4 pb-3 border-b border-neutral-800 flex items-center justify-between">
                  <span>Verification Benchmark Comparison</span>
                  <span className="text-xs text-neutral-500 font-mono">Sample: 10,000 Records</span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800">
                    <div className="text-neutral-400 font-semibold mb-1">Raw Scraped File</div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Total Leads:</span> <span>10,000</span>
                    </div>
                    <div className="flex justify-between text-red-400">
                      <span>Dead/Invalid Domains:</span> <span>3,250 (32.5%)</span>
                    </div>
                    <div className="flex justify-between text-amber-400">
                      <span>Catch-All Domains:</span> <span>3,680 (36.8%)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800">
                    <div className="text-neutral-400 font-semibold mb-1">Traditional Verifiers</div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Valid Output:</span> <span>3,070 (30.7%)</span>
                    </div>
                    <div className="flex justify-between text-red-400">
                      <span>Discarded as Risky:</span> <span>3,680 Catch-Alls</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Pipeline Value Lost:</span> <span>Huge ($$$)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60">
                    <div className="text-emerald-400 font-semibold mb-1">Giggal Verified Output</div>
                    <div className="flex justify-between text-neutral-200">
                      <span>Deliverable Active Leads:</span> <span className="font-bold text-emerald-400">6,650 (66.5%)</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Catch-Alls Validated:</span> <span>3,580 (98.5% Acc.)</span>
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
              Three Steps from Scraped File to High-Converting Clean Email List
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg">
              Transform raw directory extractor output into an engagement-ready prospecting database of local business leads in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative">
              <div className="w-10 h-10 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Upload Directory File</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Export your prospect records from Google Maps, Outscraper, Apify, D7, Yelp, Yellow Pages, or Bark as CSV or XLSX. Upload directly to Giggal with all custom columns preserved intact.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative">
              <div className="w-10 h-10 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Multi-Tier Automated Scrubbing</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Our engine conducts MX record checks, domain active checks, syntax checks, honeypot detection, and runs scraped leads email verification with 98.5% precision on catch-all mailboxes.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 relative">
              <div className="w-10 h-10 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Export Clean Email List</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Download your verified clean email list filtered by deliverability status. Upload directly into your cold email software with complete confidence that cold email deliverability is preserved.
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
              Enterprise Verification Architecture for Scraped Data
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg">
              Built specifically to eliminate the anomalies, data decay, and second-hop scraping errors characteristic of online business directories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-emerald-400 mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Domain & MX Verification</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Validates that business web domains have active DNS, valid mail exchange configurations, and responsive mail transfer agents before performing mailbox queries.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-emerald-400 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Catch-All Verification</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Recovers 35%+ of legitimate contractors and local businesses by classifying catch-all mailboxes with 98.5% accuracy instead of dumping them as dangerous.
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
                Maintains up-to-date tracking of recycled domain traps and honeypots commonly seeded across abandoned directory listings to guard cold email deliverability.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="text-emerald-400 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">High-Speed File Processing</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Scans and validates 10,000 scraped records in under 3 minutes with multi-threaded distributed processing and zero false positive rejections.
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

      {/* Hub FAQs */}
      <section className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Frequently Asked Questions About Scraped Leads Verification
            </h2>
            <p className="mt-4 text-neutral-400 text-base sm:text-lg">
              Key guidance for cleaning directory datasets and safeguarding cold email deliverability.
            </p>
          </div>

          <div className="space-y-6">
            {hubFaqs.map((faq, index) => (
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

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Clean Your Scraped Leads?
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Stop risking domain reputation on defunct directory data. Run scraped leads email verification on your raw exports and download a clean email list with 98.5% accuracy on catch-all mailboxes today.
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
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 font-semibold text-base hover:bg-neutral-800 hover:text-white transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Explore Volume Plans</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
