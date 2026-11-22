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
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Scraped Leads Email Verification | Clean B2B & Directory Exports',
  description:
    'Clean unverified scraped leads from Google Maps, Outscraper, Scrap.io, Apify, D7, Yelp, Yellow Pages, and Bark. Verify catch-all business domains with 98.5% accuracy.',
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

const hubFaqs = [
  {
    question: 'Why do scraped directory lists produce higher bounce rates than inbound contact forms?',
    answer:
      'Inbound forms capture verified email addresses submitted directly by active users. Web scrapers, by contrast, harvest public HTML text using automated regular expressions. They pull in expired domain names, closed businesses, website builder template emails, and anti-scraping honeypots. Sending cold outreach to raw scraped lists frequently generates hard bounce rates exceeding 30%, which immediately burns sender domain reputation.',
  },
  {
    question: 'How does Giggal resolve catch-all domains in scraped business datasets?',
    answer:
      'Over 35% of local commercial businesses and digital agencies use Google Workspace or Microsoft 365 configured with catch-all routing. Standard verification tools mark every catch-all address as risky and instruct users to discard them. Giggal uses deep mail server protocol interrogation to evaluate mailbox responses without sending messages, validating catch-all addresses with 98.5% accuracy.',
  },
  {
    question: 'Will Giggal preserve the original metadata columns from my scraping tool?',
    answer:
      'Yes. When you upload a CSV, XLSX, or TXT export from Google Maps, Outscraper, Apify, D7, or any directory scraper, Giggal retains all original columns including business name, telephone, physical address, review score, and website URL. Your cleaned export contains your original data enriched with precise verification status flags.',
  },
  {
    question: 'What bounce rate can I expect after verifying scraped leads with Giggal?',
    answer:
      'When you filter your campaigns to deliverable addresses and catch-all mailboxes verified at 98.5% accuracy, your cold email campaigns will maintain an average hard bounce rate below 1.0%. This keeps your outreach safely within the deliverability thresholds required by Google, Microsoft, Instantly, and Smartlead.',
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
            Raw scraped exports from maps, directories, and web scrapers contain up to 35% invalid emails, expired domains, and spam traps. Verify local business mailboxes and resolve catch-all domains with 98.5% precision to safeguard your sender score.
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
              Select your data source to explore our dedicated scrubbing engine tailored to that platform’s unique data structure and error patterns.
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

      {/* Why Scraped Leads Require Deep Cleaning */}
      <section className="py-20 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800/50 text-emerald-400 text-xs font-semibold mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>The Cold Outreach Imperative</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Why Raw Scraped Lists Destroy Your Cold Email Infrastructure
              </h2>
              <p className="mt-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
                When you scrape Google Maps, Yelp, Yellow Pages, or Bark, you are harvesting public directory listings that often decay silently. Businesses change hands, websites go offline, and solo operators return to regular employment.
              </p>
              <p className="mt-3 text-neutral-400 text-base leading-relaxed">
                Furthermore, scrapers extract emails by crawling outbound websites with regular expressions. They pull in website agency credits, privacy policy addresses, and anti-scraping spam traps. Sending outreach to these unverified addresses triggers mailbox provider filters, tanks domain reputation, and leads to sending account bans.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300">
                    <strong className="text-white">Active Mailbox Interrogation:</strong> Confirms mailboxes exist without sending emails, avoiding spam flags and rate limits.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300">
                    <strong className="text-white">98.5% Catch-All Precision:</strong> Recovers genuine commercial prospects that other tools discard as risky.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300">
                    <strong className="text-white">Ready for Instantly & Smartlead:</strong> Export clean, filtered lists that import straight into cold email software.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 shadow-2xl">
                <div className="text-sm font-bold text-neutral-300 mb-4 pb-3 border-b border-neutral-800 flex items-center justify-between">
                  <span>Data Quality Breakdown</span>
                  <span className="text-xs text-neutral-500 font-mono">Raw vs. Cleaned</span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-red-950/30 border border-red-800/40">
                    <div className="text-red-400 font-semibold mb-1">Uncleaned Scraped List</div>
                    <ul className="space-y-1 text-neutral-300">
                      <li>• 25% to 38% Hard Bounce Rate</li>
                      <li>• Recycled Spam Traps Included</li>
                      <li>• Webmaster & Agency Credits Scraped</li>
                      <li>• High Risk of Blacklist Penalties</li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60">
                    <div className="text-emerald-400 font-semibold mb-1">Giggal Verified List</div>
                    <ul className="space-y-1 text-neutral-200">
                      <li>• Under 1.0% Hard Bounce Rate</li>
                      <li>• Catch-Alls Validated at 98.5% Accuracy</li>
                      <li>• Cleaned of Webmaster & Support Emails</li>
                      <li>• Preserved Sender Domain Health</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hub FAQs */}
      <section className="py-20 bg-neutral-900/30 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Frequently Asked Questions
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
            Upload your unverified scraper exports today. Get 100 free verification credits and start sending cold campaigns with complete deliverability confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 text-neutral-950 font-bold text-base hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 inline-flex items-center justify-center space-x-2"
            >
              <span>Start Verifying Free</span>
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
