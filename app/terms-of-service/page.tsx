import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service | TargetPulse',
  description: 'Terms of Service and conditions for using TargetPulse email marketing services.',
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
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
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using TargetPulse's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 mb-4">
                These Terms of Service govern your use of the TargetPulse Email Verifier service operated by <strong>Hassaan Ali Mehmood</strong>, doing business as <strong>TargetPulse</strong>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                TargetPulse Email Verifier is a cloud-based tool that helps teams clean and validate email lists before sending campaigns. Users upload CSV files or individual emails, and we check deliverability, syntax, and mailbox status to reduce bounces and spam complaints. The product is sold as a pay-as-you-go credit system, so customers only pay for the emails they actually validate.
              </p>
              <p className="text-gray-700 mb-4">
                The Service is provided to you subject to these Terms of Service and any additional terms and conditions that may apply.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Email Verification Service</h3>
              <p className="text-gray-700 mb-4">
                Our primary service is email verification and validation, which includes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Email Syntax Validation:</strong> Verification of proper email format and structure</li>
                <li><strong>Domain Validation:</strong> Checking if the email domain exists and has valid MX records</li>
                <li><strong>Mailbox Verification:</strong> Verifying if the specific email address exists and can receive emails</li>
                <li><strong>Disposable Email Detection:</strong> Identifying temporary or disposable email addresses</li>
                <li><strong>Role-Based Email Detection:</strong> Detecting generic email addresses (e.g., info@, support@)</li>
                <li><strong>Catch-All Detection:</strong> Identifying domains that accept all email addresses</li>
                <li><strong>SMTP Validation:</strong> Real-time verification through SMTP protocol</li>
                <li><strong>Bulk Verification:</strong> Processing thousands of email addresses simultaneously</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Credit-Based System</h3>
              <p className="text-gray-700 mb-4">
                Our service operates on a credit-based model where:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>1 Credit = 1 Email Verification:</strong> Each email address verification consumes exactly 1 credit from your account balance</li>
                <li><strong>Pay-As-You-Go:</strong> Purchase credits in packages ranging from 2,000 to 1,000,000 credits at any time</li>
                <li><strong>Recurring Subscriptions:</strong> Subscribe to monthly recurring credit packages with a 5% discount on the regular price</li>
                <li><strong>No Expiration:</strong> Credits never expire and remain available in your account until used</li>
                <li><strong>Free Trial:</strong> New accounts receive 1,000 complimentary credits to test the service</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Service Features</h3>
              <p className="text-gray-700 mb-4">
                Our email verification service includes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Real-time API access for instant verification</li>
                <li>Bulk upload and processing capabilities</li>
                <li>Detailed verification reports and analytics</li>
                <li>Export results in CSV, Excel, and JSON formats</li>
                <li>Duplicate email detection and removal</li>
                <li>List cleaning and segmentation tools</li>
                <li>Integration support for popular email marketing platforms</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Account</h2>
              <p className="text-gray-700 mb-4">
                To use certain features of the Service, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and accept all risks of unauthorized access</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Be responsible for all activities that occur under your account</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment processing is handled securely through Paddle, our authorized payment gateway. By purchasing credits or services, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Provide current, complete, and accurate purchase and account information</li>
                <li>Promptly update your account and payment information as needed</li>
                <li>Pay all charges at the prices then in effect for your purchases</li>
                <li>Pay applicable taxes, VAT, or other fees related to your purchases</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Credit Purchase Options</h3>
              <p className="text-gray-700 mb-4">
                You may purchase credits through the following methods:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>One-Time Purchase (Pay-As-You-Go):</strong> Buy credit packages as needed with immediate account addition</li>
                <li><strong>Monthly Recurring Subscription:</strong> Receive credits automatically each month with a 5% discount</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Pricing and Billing</h3>
              <p className="text-gray-700 mb-4">
                All prices are displayed in your selected currency and include applicable fees. Credits are immediately added to your account upon successful payment confirmation. All credit purchases are non-refundable except as required by law or as explicitly stated in our Refund Policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.3 Free Trial Credits</h3>
              <p className="text-gray-700 mb-4">
                New users receive 1,000 free trial credits upon account registration. Trial credits:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Are provided at no cost and require no payment information</li>
                <li>Function identically to paid credits for email verification</li>
                <li>Are non-refundable as they are complimentary</li>
                <li>Can be used to verify up to 1,000 email addresses</li>
                <li>Help you evaluate our service quality before purchasing</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Recurring Subscription Services</h2>
              <p className="text-gray-700 mb-4">
                Monthly recurring credit subscriptions are billed automatically each month. You will be billed in advance on a recurring monthly basis, and credits will be added to your account upon successful payment. Key terms include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Subscriptions automatically renew at the end of each billing cycle unless cancelled</li>
                <li>You can cancel your subscription at any time before the next billing date</li>
                <li>Cancellations take effect at the end of the current billing period</li>
                <li>Credits already added to your account remain available after cancellation</li>
                <li>Recurring subscribers receive a 5% discount compared to pay-as-you-go pricing</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Credit Usage and Management</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 Credit Consumption</h3>
              <p className="text-gray-700 mb-4">
                Credits are consumed as follows:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Each successful email verification consumes exactly 1 credit</li>
                <li>Credits are deducted only for completed verifications</li>
                <li>Failed verifications due to system errors do not consume credits</li>
                <li>Duplicate emails in the same verification batch are processed only once</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 Credit Validity and Transfer</h3>
              <p className="text-gray-700 mb-4">
                Important credit policies:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>No Expiration:</strong> Credits never expire and remain in your account indefinitely</li>
                <li><strong>Non-Transferable:</strong> Credits cannot be transferred between accounts</li>
                <li><strong>Non-Refundable:</strong> Once purchased, credits are non-refundable (see Refund Policy for exceptions)</li>
                <li><strong>Account-Specific:</strong> Credits are tied to your account and cannot be shared</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cancellation and Refunds</h2>
              <p className="text-gray-700 mb-4">
                You may cancel your recurring subscription at any time through your account settings or by contacting our support team at info@targetpulse.net. Upon cancellation:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Your subscription will not renew for the next billing cycle</li>
                <li>You will retain all credits in your account</li>
                <li>You can continue using your existing credits without restriction</li>
                <li>You can still purchase pay-as-you-go credit packages</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Refunds for unusual activity or exceptional circumstances are handled in accordance with our Refund Policy. If you experience issues or suspect fraudulent activity, contact our support team immediately for review.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Acceptable Use Policy</h2>
              <p className="text-gray-700 mb-4">
                You agree to use the Service only for lawful purposes and in compliance with all applicable laws and regulations. You agree not to use the Service:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>To verify email addresses obtained without proper consent or authorization</li>
                <li>To send spam or unsolicited email messages after verification</li>
                <li>To violate any applicable laws or regulations, including CAN-SPAM Act, GDPR, and CASL</li>
                <li>To infringe upon or violate the rights of others</li>
                <li>To distribute malware or other harmful code</li>
                <li>To impersonate any person or entity</li>
                <li>To engage in any fraudulent activity or abuse of our service</li>
                <li>To resell or redistribute our verification services without authorization</li>
                <li>To attempt to reverse engineer or compromise our verification systems</li>
                <li>To share your account credentials or credits with unauthorized users</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Service Accuracy and Limitations</h2>
              <p className="text-gray-700 mb-4">
                While we strive for maximum accuracy in email verification, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Email verification cannot guarantee 100% accuracy due to technical limitations</li>
                <li>Some email servers may provide false-positive or false-negative responses</li>
                <li>Verification results are based on real-time checks and may change over time</li>
                <li>We provide verification results "as is" and make no guarantees about deliverability</li>
                <li>You are responsible for compliance with email marketing laws regardless of verification results</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Email Marketing Compliance</h2>
              <p className="text-gray-700 mb-4">
                If you use verified email addresses for marketing purposes, you are solely responsible for ensuring compliance with all applicable laws and regulations, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>CAN-SPAM Act (United States)</li>
                <li>GDPR (European Union)</li>
                <li>CASL (Canada)</li>
                <li>Other applicable anti-spam and data protection laws</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You must obtain proper consent before sending marketing emails and include clear unsubscribe mechanisms in all communications. TargetPulse is not responsible for your use of verified email addresses.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                The Service and its original content, features, and functionality are owned by TargetPulse and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our services without prior written permission.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Data and Privacy</h2>
              <p className="text-gray-700 mb-4">
                Your use of the Service is also governed by our Privacy Policy. We collect, store, and process your data as described in the Privacy Policy. You retain all rights to your customer data and email lists, and we will not use them except as necessary to provide the Service or as required by law.
              </p>
              <p className="text-gray-700 mb-4">
                Email addresses submitted for verification are processed securely and are not stored permanently. We do not sell, share, or use your email lists for any purpose other than providing verification services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Service Modifications and Availability</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
              </p>
              <p className="text-gray-700 mb-4">
                We strive to maintain high service availability but do not guarantee uninterrupted access. Scheduled maintenance will be announced in advance when possible.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL TARGETPULSE, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                <li>Inaccurate email verification results</li>
                <li>Failed email deliveries or bounces after verification</li>
                <li>Credits consumed due to user error or misuse</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Disclaimer of Warranties</h2>
              <p className="text-gray-700 mb-4">
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TARGETPULSE DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 mb-4">
                WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT EMAIL VERIFICATION RESULTS WILL BE 100% ACCURATE.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to defend, indemnify, and hold harmless TargetPulse and its licensees and licensors from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising from your use of the Service or violation of these Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">17. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Your right to use the Service will immediately cease</li>
                <li>Unused credits will be forfeited without refund</li>
                <li>Recurring subscriptions will be cancelled</li>
                <li>Access to your account and data may be permanently revoked</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">18. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which TargetPulse operates, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">19. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                Any disputes arising out of or relating to these Terms or the Service shall first be attempted to be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration in accordance with the rules of the appropriate arbitration association.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">20. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">21. Severability</h2>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">22. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@targetpulse.net</p>
                <p className="text-gray-700 mb-2"><strong>Website:</strong> https://targetpulse.net</p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  By using TargetPulse's services, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
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
