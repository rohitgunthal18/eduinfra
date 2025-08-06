'use client';

import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Header */}
      <header className="bg-white/95 dark:bg-gray-900/95 shadow-xl border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-all duration-300">
                EI
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
                  Edu Infra
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400 font-semibold tracking-wider uppercase opacity-80">
                  Educational Infrastructure
                </span>
              </div>
            </Link>

            {/* Back to Home */}
            <Link 
              href="/"
              className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold sm:font-bold text-sm sm:text-base rounded-lg sm:rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
              Refund Policy
            </h1>
            <p className="text-green-100 text-lg">
              Clear and fair refund terms for our educational technology services
            </p>
            <p className="text-green-200 text-sm mt-2">
              Last updated: December 2024
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Refund Policy Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At Edu Infra, we are committed to providing high-quality educational technology services and ensuring 
                customer satisfaction. This Refund Policy outlines the terms and conditions under which refunds may be 
                requested and processed for our final year project development and related services.
              </p>
            </section>

            {/* Refund Eligibility */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Refund Eligibility
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    2.1 Full Refund Conditions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                    You are eligible for a full refund in the following circumstances:
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Request made within 24 hours of initial payment and before work has commenced</li>
                    <li>• We are unable to deliver the agreed-upon project due to technical limitations</li>
                    <li>• Significant delays (more than 2 weeks beyond agreed timeline) caused by us</li>
                    <li>• Project delivered does not meet the basic requirements as specified in the agreement</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    2.2 Partial Refund Conditions
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Cancellation after work has commenced but before 50% completion</li>
                    <li>• Minor issues that cannot be resolved within the warranty period</li>
                    <li>• Mutual agreement to terminate the project midway</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* No Refund Situations */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. No Refund Situations
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Refunds will not be provided in the following circumstances:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>• Project has been completed and delivered as per agreed specifications</li>
                <li>• Cancellation requested after 75% project completion</li>
                <li>• Changes in project requirements requested by the client after work commencement</li>
                <li>• Client failure to provide necessary information or cooperation</li>
                <li>• Issues arising from client modifications to delivered code</li>
                <li>• Dissatisfaction with technology choices approved by the client</li>
                <li>• Academic institution policy changes affecting project submission</li>
                <li>• Requests made more than 30 days after project delivery</li>
              </ul>
            </section>

            {/* Refund Process */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Refund Request Process
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    4.1 How to Request a Refund
                  </h3>
                  <ol className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>1. Contact us via email at eduinfra.contact@gmail.com</li>
                    <li>2. Include your project details and payment reference</li>
                    <li>3. Clearly state the reason for the refund request</li>
                    <li>4. Provide any supporting documentation if applicable</li>
                    <li>5. Allow 3-5 business days for initial review</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    4.2 Required Information
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Full name and contact information</li>
                    <li>• Project ID or reference number</li>
                    <li>• Original payment method details</li>
                    <li>• Date of payment and project commencement</li>
                    <li>• Detailed explanation of the refund request</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Refund Processing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Refund Processing Timeline
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Request Review</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        <strong>3-5 business days:</strong> Initial review and eligibility assessment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Approval Decision</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        <strong>1-2 business days:</strong> Refund approval or denial notification
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Processing</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        <strong>5-10 business days:</strong> Refund processing and transfer to original payment method
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Refund Amounts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Refund Amount Calculation
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    6.1 Full Refund (100%)
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Cancellation within 24 hours before work commencement</li>
                    <li>• Unable to deliver due to our technical limitations</li>
                    <li>• Significant delays exceeding 2 weeks caused by us</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    6.2 Partial Refund (50-75%)
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Project 0-25% completed: 75% refund</li>
                    <li>• Project 25-50% completed: 50% refund</li>
                    <li>• Mutual termination agreement</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    6.3 No Refund (0%)
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Project more than 50% completed</li>
                    <li>• Project completed and delivered</li>
                    <li>• Client-initiated changes or scope modifications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment Method Refunds */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Payment Method Specific Terms
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    7.1 Bank Transfer / UPI
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Refunds will be processed back to the original bank account or UPI ID within 5-10 business days.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    7.2 Digital Wallets
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Refunds to digital wallets (PayTM, PhonePe, etc.) are typically processed within 3-7 business days.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    7.3 Processing Fees
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Any transaction fees or processing charges incurred during refund processing may be deducted 
                    from the refund amount.
                  </p>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Dispute Resolution
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you disagree with our refund decision, you may:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>• Request a detailed explanation of the decision</li>
                <li>• Provide additional supporting documentation</li>
                <li>• Request escalation to senior management</li>
                <li>• Seek mediation through mutually agreed third parties</li>
              </ul>
            </section>

            {/* Special Circumstances */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                9. Special Circumstances
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    9.1 Academic Calendar Changes
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    If your institution changes project submission deadlines, we will work with you to accommodate 
                    the new timeline. Refunds may be considered if adaptation is not feasible.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    9.2 Technical Difficulties
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    In case of unforeseen technical challenges that prevent project completion, we will offer 
                    alternative solutions or process appropriate refunds based on work completed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    9.3 Force Majeure
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Refunds for delays caused by circumstances beyond our control (natural disasters, pandemic restrictions, etc.) 
                    will be evaluated on a case-by-case basis.
                  </p>
                </div>
              </div>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                10. Policy Updates
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We reserve the right to update this Refund Policy at any time. Changes will be effective immediately 
                upon posting on our website. Existing projects will be governed by the policy in effect at the time 
                of project commencement. We recommend reviewing this policy periodically.
              </p>
            </section>

            {/* Contact for Refunds */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                11. Contact for Refund Requests
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                For all refund-related inquiries and requests, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Email:</strong> eduinfra.contact@gmail.com</p>
                  <p><strong>Subject Line:</strong> "Refund Request - [Your Project ID]"</p>
                  <p><strong>WhatsApp:</strong> +91 8408088454</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                  <p><strong>Processing Hours:</strong> Monday to Saturday, 9:00 AM - 8:00 PM IST</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-1">Important Note</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      All refund requests must be submitted in writing via email for proper documentation and processing. 
                      Verbal requests over phone or WhatsApp will require email confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-3 group mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-all duration-300">
              EI
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-black bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Edu Infra
              </span>
              <span className="text-xs text-gray-400 font-medium tracking-wide">
                Projects & Solutions
              </span>
            </div>
          </Link>
          
          <div className="flex items-center justify-center gap-6 mb-4">
            <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-blue-400 hover:text-blue-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="text-blue-400 hover:text-blue-300 transition-colors">
              Refund Policy
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Edu Infra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 