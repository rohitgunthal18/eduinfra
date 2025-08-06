'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
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
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-blue-100 text-lg">
              How we protect and handle your personal information
            </p>
            <p className="text-blue-200 text-sm mt-2">
              Last updated: December 2024
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At Edu Infra, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                educational technology services, including final year project development and related consultations.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    2.1 Personal Information
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Full name and contact information (email, phone number)</li>
                    <li>• College/University details and academic information</li>
                    <li>• Project requirements and technical specifications</li>
                    <li>• Payment information (processed securely through third-party providers)</li>
                    <li>• Communication history and support interactions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    2.2 Technical Information
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                    <li>• Device information and browser type</li>
                    <li>• IP address and location data</li>
                    <li>• Website usage patterns and analytics</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>• To provide and deliver educational technology services</li>
                <li>• To process project requests and generate quotes</li>
                <li>• To communicate about project progress and support</li>
                <li>• To process payments and maintain transaction records</li>
                <li>• To improve our services and user experience</li>
                <li>• To send important updates and service notifications</li>
                <li>• To comply with legal obligations and prevent fraud</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>• With your explicit consent</li>
                <li>• To trusted service providers who assist in project delivery</li>
                <li>• When required by law or legal process</li>
                <li>• To protect our rights, property, or safety</li>
                <li>• In connection with a business transfer or merger</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We implement industry-standard security measures to protect your personal information, including:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4 mt-4">
                <li>• Encrypted data transmission (SSL/TLS)</li>
                <li>• Secure database storage with access controls</li>
                <li>• Regular security audits and updates</li>
                <li>• Employee training on data protection</li>
                <li>• Limited access to personal information on a need-to-know basis</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Data Retention
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
                resolve disputes, and enforce our agreements. Project-related data is typically retained for 3 years after project 
                completion for support and warranty purposes.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Your Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>• Access: Request a copy of your personal data</li>
                <li>• Correction: Update or correct inaccurate information</li>
                <li>• Deletion: Request deletion of your personal data</li>
                <li>• Portability: Request transfer of your data</li>
                <li>• Objection: Object to certain processing activities</li>
                <li>• Withdrawal: Withdraw consent for data processing</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Cookies and Tracking
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                and personalize content. You can control cookie settings through your browser preferences, though some 
                features may not function properly with cookies disabled.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                9. Third-Party Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our website may contain links to third-party services (such as WhatsApp, payment processors, or social media). 
                These services have their own privacy policies, and we are not responsible for their privacy practices. 
                We encourage you to review their policies before providing any personal information.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                10. Children's Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our services are intended for college students (18+ years) working on final year projects. We do not 
                knowingly collect personal information from children under 18. If you believe we have collected information 
                from a minor, please contact us immediately.
              </p>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                11. Policy Updates
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                We will notify you of significant changes through email or website notifications. Your continued use of our 
                services constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Email:</strong> eduinfra.contact@gmail.com</p>
                  <p><strong>WhatsApp:</strong> +91 8408088454</p>
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