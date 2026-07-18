import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Giggal.ai',
  description: 'Privacy Policy for Giggal.ai email verification tool.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-28 md:pt-32 pb-12 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          Privacy{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">Policy</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 font-semibold">
          Last Updated: February 4, 2026
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 card-vivid-shadow [&_strong]:font-bold [&_strong]:text-slate-900">

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 first:mt-0 scroll-mt-28">1. Introduction</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Giggal.ai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our email verification services and website.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">2. Information We Collect</h2>

          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-3">2.1 Personal Information</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5 text-slate-600 leading-relaxed marker:text-indigo-400">
            <li>Register for an account</li>
            <li>Purchase verification credits or a subscription</li>
            <li>Contact our customer support</li>
            <li>Submit email lists for verification</li>
            <li>Use contact or support forms on our website</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-4">
            This information may include: name, email address, account identifiers, optional company details, and transaction metadata. Payment card details are handled by our payment processor and are not stored by us.
          </p>

          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-3">2.2 Authentication and Technical Data</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            We use Clerk for account registration and login (including Google sign-in and email/password sign-up). Through this authentication process, we collect and process:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5 text-slate-600 leading-relaxed marker:text-indigo-400">
            <li>Account identifiers (such as user ID, name, and email address)</li>
            <li>Authentication provider and sign-in method (Google or email/password)</li>
            <li>Sign-in activity metadata (such as login timestamps)</li>
            <li>Security-related technical data (such as IP address and user agent) used to protect accounts and prevent abuse</li>
            <li>Essential session cookies or tokens required to keep you signed in securely</li>
          </ul>

          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-3">2.3 Email Verification Data</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            When you use our email verification services, we collect and process:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5 text-slate-600 leading-relaxed marker:text-indigo-400">
            <li>Email addresses submitted for verification</li>
            <li>Verification results and status (valid, invalid, catch-all, disposable, etc.)</li>
            <li>Bulk email lists uploaded for processing</li>
            <li>API usage data and verification history</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">3. How We Use Your Information</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5 text-slate-600 leading-relaxed marker:text-indigo-400">
            <li>To provide and maintain our services</li>
            <li>To process your transactions and manage subscriptions</li>
            <li>To send you service-related notifications</li>
            <li>To provide customer support</li>
            <li>To improve and optimize our services</li>
            <li>To detect and prevent fraud and abuse</li>
            <li>To comply with legal obligations</li>
            <li>To analyze usage patterns and trends</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">4. Legal Basis for Processing (GDPR)</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            If you are from the European Economic Area (EEA), our legal basis for collecting and using your information depends on the data and context:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5 text-slate-600 leading-relaxed marker:text-indigo-400">
            <li><strong>Contract Performance:</strong> Processing is necessary to perform our services</li>
            <li><strong>Legitimate Interests:</strong> Processing is in our legitimate business interests</li>
            <li><strong>Consent:</strong> You have given explicit consent for specific purposes</li>
            <li><strong>Legal Obligation:</strong> Processing is necessary to comply with the law</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">5. Data Sharing and Disclosure</h2>

          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-3">5.1 Service Providers</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            We share your information with third-party service providers who perform services on our behalf:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5 text-slate-600 leading-relaxed marker:text-indigo-400">
            <li>Payment processors (our authorized payment gateway)</li>
            <li>Authentication providers (such as Clerk)</li>
            <li>Cloud hosting providers</li>
            <li>Security and monitoring providers</li>
            <li>Customer support tools</li>
          </ul>

          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-3">5.2 Legal Requirements</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas).
          </p>

          <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-3">5.3 Business Transfers</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">6. Data Security</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We implement appropriate technical and organizational security measures to protect your information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5 text-slate-600 leading-relaxed marker:text-indigo-400">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Secure data centers</li>
            <li>Employee training on data protection</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-4">
            However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">7. Data Retention</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">8. Your Rights</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5 text-slate-600 leading-relaxed marker:text-indigo-400">
            <li><strong>Access:</strong> Request access to your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your information</li>
            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
            <li><strong>Restriction:</strong> Request restriction of processing</li>
            <li><strong>Objection:</strong> Object to processing of your information</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-4">
            To exercise these rights, please contact us at info@targetpulse.net.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">9. Cookies and Tracking Technologies</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">10. Third-Party Links</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">11. Children's Privacy</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">12. International Data Transfers</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place for such transfers.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">13. California Privacy Rights (CCPA)</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            If you are a California resident, you have specific rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5 text-slate-600 leading-relaxed marker:text-indigo-400">
            <li>Right to know what personal information is collected</li>
            <li>Right to know whether personal information is sold or disclosed</li>
            <li>Right to opt-out of the sale of personal information</li>
            <li>Right to deletion of personal information</li>
            <li>Right to non-discrimination for exercising CCPA rights</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">14. Changes to This Privacy Policy</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 scroll-mt-28">15. Contact Us</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="bg-indigo-50/50 border-2 border-dashed border-indigo-200 rounded-2xl p-6 mb-4 space-y-2">
            <p className="text-slate-600"><strong>Email:</strong> info@targetpulse.net</p>
            <p className="text-slate-600"><strong>Website:</strong> https://targetpulse.net</p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 leading-relaxed">
              By using Giggal.ai's services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
