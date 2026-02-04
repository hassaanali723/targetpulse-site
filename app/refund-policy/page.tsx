import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Refund Policy | TargetPulse',
  description: 'Refund Policy for TargetPulse email marketing services.',
}

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Refund Policy
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
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Overview</h2>
              <p className="text-gray-700 mb-4">
                At TargetPulse, we strive to provide exceptional email verification services. This Refund Policy outlines the circumstances under which refunds may be issued for our credit-based service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How Our Credit System Works</h2>
              <p className="text-gray-700 mb-4">
                TargetPulse operates on a credit-based system for email verification:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>1 Credit = 1 Email Validation:</strong> Each email address verification consumes 1 credit from your account</li>
                <li><strong>Pay-As-You-Go:</strong> Purchase credits in bulk at any time (packages from 2,000 to 1,000,000 credits)</li>
                <li><strong>Recurring Credits:</strong> Subscribe to monthly recurring credit packages with a 5% discount</li>
                <li><strong>No Expiration:</strong> Credits never expire and remain in your account until used</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Free Trial Credits</h2>
              <p className="text-gray-700 mb-4">
                New users receive <strong>1,000 free trial credits</strong> to test our email verification service. Please note:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Trial credits are provided free of charge with no payment required</li>
                <li>Trial credits are <strong>non-refundable</strong> as they are complimentary</li>
                <li>Trial credits follow the same validation rules as paid credits</li>
                <li>Trial credits can be used to verify 1,000 email addresses</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Credit Purchase Refund Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Pay-As-You-Go Credits (One-Time Purchase)</h3>
              <p className="text-gray-700 mb-4">
                Credits purchased through pay-as-you-go packages are generally <strong>non-refundable</strong> once the purchase is complete because:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Credits are instantly added to your account and available for immediate use</li>
                <li>Credits do not expire and retain their value indefinitely</li>
                <li>You have the flexibility to use them at any time</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Recurring Credit Subscriptions</h3>
              <p className="text-gray-700 mb-4">
                For recurring monthly credit subscriptions:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Credits are billed and added to your account monthly</li>
                <li>You may cancel your subscription at any time before the next billing cycle</li>
                <li>Credits already added to your account are non-refundable</li>
                <li>Cancellation takes effect at the end of your current billing period</li>
                <li>Unused credits from previous months remain in your account after cancellation</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Exceptional Circumstances and Support</h2>
              <p className="text-gray-700 mb-4">
                While our standard policy is that credits are non-refundable, we understand that unusual situations may occur. In cases of:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Technical errors resulting in incorrect credit deduction</li>
                <li>Service failures preventing email validation</li>
                <li>Duplicate charges or billing errors</li>
                <li>Unusual account activity or suspected fraud</li>
                <li>Any other exceptional circumstances</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Please contact our support team immediately at <strong>info@targetpulse.net</strong>. We will thoroughly review your case and may issue refunds or credit adjustments on a case-by-case basis at our discretion.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Service Quality Issues</h2>
              <p className="text-gray-700 mb-4">
                If you experience technical issues or service disruptions that prevent email verification:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Credits will not be deducted for failed validations due to our system errors</li>
                <li>Report any validation issues immediately to our support team</li>
                <li>We may add compensatory credits to your account for service disruptions</li>
                <li>Extended outages may qualify for partial refunds at our discretion</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Account Termination and Violations</h2>
              <p className="text-gray-700 mb-4">
                If your account is terminated due to violation of our Terms of Service or Acceptable Use Policy:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>No refunds will be issued for unused credits</li>
                <li>Access to your account and remaining credits will be permanently revoked</li>
                <li>Recurring subscriptions will be immediately cancelled</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. How to Request a Refund or Report Issues</h2>
              <p className="text-gray-700 mb-4">
                To request a refund or report unusual activity, please contact our support team:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@targetpulse.net</p>
                <p className="text-gray-700 mb-2"><strong>Subject:</strong> Refund Request / Issue Report</p>
              </div>
              <p className="text-gray-700 mb-4">
                Please include the following information in your request:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Your account email address</li>
                <li>Transaction ID or order number</li>
                <li>Detailed description of the issue or unusual activity</li>
                <li>Date and time of the incident (if applicable)</li>
                <li>Screenshots or evidence supporting your claim (if applicable)</li>
                <li>Number of credits affected</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Refund Processing Timeline</h2>
              <p className="text-gray-700 mb-4">
                If your refund request is approved:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>We will review your case within 2-3 business days</li>
                <li>You will receive a response via email regarding the decision</li>
                <li>Approved refunds will be processed within 5-10 business days</li>
                <li>Refunds will be issued to the original payment method via Paddle</li>
                <li>It may take an additional 5-7 business days for the refund to appear in your account, depending on your payment provider</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Chargebacks</h2>
              <p className="text-gray-700 mb-4">
                If you file a chargeback or payment dispute with your bank or payment provider without first contacting us to resolve the issue:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>We reserve the right to permanently terminate your account</li>
                <li>You will be banned from future use of our services</li>
                <li>All remaining credits will be forfeited</li>
                <li>We will provide evidence to the payment processor defending the charge</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We strongly encourage you to contact our support team first. We're committed to resolving issues fairly and promptly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Credit Transfers and Account Sharing</h2>
              <p className="text-gray-700 mb-4">
                Credits are non-transferable between accounts. Refunds will not be issued for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Credits purchased on the wrong account</li>
                <li>Requests to transfer credits to a different account</li>
                <li>Account sharing violations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Refund Policy or need assistance, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@targetpulse.net</p>
                <p className="text-gray-700 mb-2"><strong>Website:</strong> https://targetpulse.net</p>
              </div>
              <p className="text-gray-700 mb-4">
                Our support team is committed to addressing your concerns and finding fair solutions. We typically respond to all inquiries within 24-48 hours.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  This Refund Policy is part of our Terms of Service. By using TargetPulse's services, you acknowledge that you have read and understood this policy.
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
