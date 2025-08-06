'use client';

import Link from 'next/link';

export default function TermsOfService() {
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
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-purple-100 text-lg">
              Terms and conditions for using our educational technology services
            </p>
            <p className="text-purple-200 text-sm mt-2">
              Last updated: December 2024
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Acceptance */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By accessing and using Edu Infra's services, you agree to be bound by these Terms of Service and all 
                applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
                using our services. These terms apply to all users, including students, educational institutions, and visitors.
              </p>
            </section>

            {/* Services Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Services Description
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Edu Infra provides educational technology services including:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>• Final year project development and consultation</li>
                <li>• Web development services (MERN, MEAN, Django, Laravel)</li>
                <li>• Mobile application development (React Native, Flutter)</li>
                <li>• Data science and machine learning projects</li>
                <li>• Game development services</li>
                <li>• Technical documentation and support</li>
                <li>• Code review and mentoring services</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. User Responsibilities
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    3.1 Account Information
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Provide accurate and complete information</li>
                    <li>• Maintain the confidentiality of your account details</li>
                    <li>• Notify us immediately of any unauthorized use</li>
                    <li>• Update your information when necessary</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    3.2 Academic Integrity
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Use our services as learning tools and references</li>
                    <li>• Ensure compliance with your institution's academic policies</li>
                    <li>• Properly attribute and cite any assistance received</li>
                    <li>• Take responsibility for your academic submissions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Project Development */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Project Development Terms
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    4.1 Project Scope and Requirements
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Detailed project requirements must be provided upfront</li>
                    <li>• Changes to project scope may incur additional charges</li>
                    <li>• Timeline estimates are based on provided requirements</li>
                    <li>• Complex requirements may extend delivery timelines</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    4.2 Delivery and Quality Assurance
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• All deliverables include source code and documentation</li>
                    <li>• Projects undergo thorough testing before delivery</li>
                    <li>• We provide installation and setup instructions</li>
                    <li>• Minor bug fixes are included for 30 days post-delivery</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Payment Terms
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    5.1 Pricing and Payments
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• All prices are quoted in Indian Rupees (INR)</li>
                    <li>• 50% advance payment required to start the project</li>
                    <li>• Remaining payment due upon project completion</li>
                    <li>• Payment methods: Bank transfer, UPI, or digital wallets</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    5.2 Late Payments and Cancellations
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Late payments may result in project suspension</li>
                    <li>• Cancellation fees may apply after work has commenced</li>
                    <li>• Refunds are subject to our Refund Policy</li>
                    <li>• Unpaid invoices may be subject to collection efforts</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Intellectual Property Rights
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    6.1 Client Ownership
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Upon full payment, clients receive complete ownership of the custom-developed project code, 
                    excluding any third-party libraries or frameworks used.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    6.2 Our Rights
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• We retain rights to our development methodologies and tools</li>
                    <li>• We may use project concepts for portfolio and marketing purposes</li>
                    <li>• We reserve the right to refuse projects that infringe on others' rights</li>
                    <li>• We maintain ownership of our proprietary frameworks and templates</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Prohibited Uses */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Prohibited Uses
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You may not use our services for:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>• Any unlawful purpose or to solicit unlawful activities</li>
                <li>• Projects that violate intellectual property rights</li>
                <li>• Harassment, abuse, or discrimination of any kind</li>
                <li>• Creating malware, viruses, or harmful software</li>
                <li>• Circumventing security measures or accessing unauthorized systems</li>
                <li>• Transmitting spam, chain letters, or unsolicited communications</li>
                <li>• Impersonating any person or entity</li>
              </ul>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Disclaimers and Limitations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    8.1 Service Availability
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    While we strive to provide uninterrupted service, we do not guarantee 100% uptime. 
                    Services may be temporarily unavailable due to maintenance, updates, or technical issues.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    8.2 Academic Compliance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We are not responsible for ensuring compliance with your institution's specific academic policies. 
                    It is your responsibility to use our services in accordance with your educational institution's guidelines.
                  </p>
                </div>
              </div>
            </section>

            {/* Support and Warranty */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                9. Support and Warranty
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    9.1 Technical Support
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Free support for 30 days after project delivery</li>
                    <li>• Support includes bug fixes and minor clarifications</li>
                    <li>• Response time: Within 24 hours on business days</li>
                    <li>• Extended support available for additional fees</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    9.2 Warranty Limitations
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our warranty covers functional bugs in the delivered code but does not extend to issues arising from 
                    modifications, third-party integrations, or changes in external dependencies after delivery.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy and Data */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                10. Privacy and Data Protection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information is governed by our 
                Privacy Policy, which is incorporated into these Terms of Service by reference. We implement 
                appropriate security measures to protect your data and project information.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                11. Termination
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, for:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>• Breach of these Terms of Service</li>
                <li>• Fraudulent or illegal activities</li>
                <li>• Non-payment of fees</li>
                <li>• Misuse of our services or platform</li>
                <li>• At our sole discretion for business reasons</li>
              </ul>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                12. Changes to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our services after changes are 
                posted constitutes acceptance of the modified terms. We recommend reviewing these terms periodically.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                13. Governing Law and Jurisdiction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms or our services shall be subject to the exclusive 
                jurisdiction of the courts in India.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                14. Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Email:</strong> eduinfra.contact@gmail.com</p>
                  <p><strong>WhatsApp:</strong> +91 8408088454</p>
                  <p><strong>Business Hours:</strong> 9:00 AM - 8:00 PM IST</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
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