import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | TargetPulse',
  description: 'Privacy Policy for TargetPulse email marketing services.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: February 4, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                TargetPulse ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our email marketing services and website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Register for an account</li>
                <li>Make a purchase or subscription</li>
                <li>Contact our customer support</li>
                <li>Subscribe to our newsletter</li>
                <li>Fill out forms on our website</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This information may include: name, email address, phone number, billing address, payment information, and company details.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Usage Data</h3>
              <p className="text-gray-700 mb-4">
                We automatically collect certain information when you visit our website, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Operating system</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Email Campaign Data</h3>
              <p className="text-gray-700 mb-4">
                When you use our email marketing services, we collect and process:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Email addresses in your contact lists</li>
                <li>Email content and templates</li>
                <li>Campaign performance metrics (opens, clicks, bounces)</li>
                <li>Subscriber engagement data</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>To provide and maintain our services</li>
                <li>To process your transactions and manage subscriptions</li>
                <li>To send you service-related notifications</li>
                <li>To provide customer support</li>
                <li>To improve and optimize our services</li>
                <li>To detect and prevent fraud and abuse</li>
                <li>To comply with legal obligations</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To analyze usage patterns and trends</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-700 mb-4">
                If you are from the European Economic Area (EEA), our legal basis for collecting and using your information depends on the data and context:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Contract Performance:</strong> Processing is necessary to perform our services</li>
                <li><strong>Legitimate Interests:</strong> Processing is in our legitimate business interests</li>
                <li><strong>Consent:</strong> You have given explicit consent for specific purposes</li>
                <li><strong>Legal Obligation:</strong> Processing is necessary to comply with the law</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Service Providers</h3>
              <p className="text-gray-700 mb-4">
                We share your information with third-party service providers who perform services on our behalf:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Payment processors (Paddle)</li>
                <li>Cloud hosting providers</li>
                <li>Email delivery services</li>
                <li>Analytics providers</li>
                <li>Customer support tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 Legal Requirements</h3>
              <p className="text-gray-700 mb-4">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.3 Business Transfers</h3>
              <p className="text-gray-700 mb-4">
                If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data centers</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-700 mb-4">
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, please contact us at privacy@targetpulse.com.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Third-Party Links</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place for such transfers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. California Privacy Rights (CCPA)</h2>
              <p className="text-gray-700 mb-4">
                If you are a California resident, you have specific rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Right to know what personal information is collected</li>
                <li>Right to know whether personal information is sold or disclosed</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to deletion of personal information</li>
                <li>Right to non-discrimination for exercising CCPA rights</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> hassaan@targetpulse.com</p>
                <p className="text-gray-700 mb-2"><strong>Support:</strong> info@targetpulse.com</p>
                <p className="text-gray-700 mb-2"><strong>Website:</strong> https://targetpulse.com</p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  By using TargetPulse's services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
