import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Corporate Privacy Policy | Data Stewardship & Farmer Rights"
        description="HarKhil Agro's corporate privacy policy detailing our strict standards on agricultural data governance, farmer privacy, and secure processing."
        canonical="https://agro.harkhil.com/privacy-policy"
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-warm-100/50 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-nature-600 block mb-3">
              Governance &amp; Trust
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
              Corporate Privacy &amp; Data Governance Policy
            </h1>
            <p className="mt-4 text-sm text-warm-600">
              Last Updated: November 2026 | Effective Date: November 13, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Privacy Text */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-warm-200 rounded-2xl p-8 sm:p-12 shadow-sm space-y-10 text-sm text-warm-800 leading-relaxed">
            {/* Executive Statement */}
            <div className="p-6 rounded-xl bg-forest-900 text-white space-y-3">
              <div className="flex items-center gap-2 text-gold-400 font-semibold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Our Fundamental Pledge to Agricultural Producers</span>
              </div>
              <p className="text-xs sm:text-sm text-warm-300 leading-relaxed">
                Agricultural data represents the livelihood, sweat, and economic equity of the farmer. HarKhil Agro
                operates under a strict charter: <strong>we never sell, monetize, or license individual grower or land
                data to commodity speculators, aggressive financial advertisers, or predatory third parties.</strong>
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                1. Scope &amp; Data Controller
              </h2>
              <p>
                This Privacy Policy governs the processing of information collected through our official digital
                properties (including <code>agro.harkhil.com</code>), the HarKhil Krishi platform, and diagnostic
                advisory services.
              </p>
              <p>
                <strong>HarKhil Agro</strong> operates as an agricultural technology and rural systems division of
                <strong> HarKhil</strong>. References to &quot;we&quot;, &quot;our&quot;, or &quot;us&quot; refer to HarKhil and its authorized
                operational subsidiaries.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                2. Categories of Information We Process
              </h2>
              <p>We process only information strictly necessary to fulfill our agronomic and operational mandates:</p>
              <ul className="list-disc pl-5 space-y-2 text-warm-700">
                <li>
                  <strong>Agronomic &amp; Soil Diagnostic Data:</strong> Soil chemical parameters (NPK, pH, electrical
                  conductivity, organic carbon, micronutrients), crop history, targeted yield goals, sowing dates, and
                  associated geographic test coordinates.
                </li>
                <li>
                  <strong>Farmer &amp; Partner Profile Records:</strong> Full name, organizational affiliation,
                  telephone number, email address, and language preference provided voluntarily during inquiries or
                  field research consultations.
                </li>
                <li>
                  <strong>Inquiry &amp; Collaboration Records:</strong> Communication correspondence, research proposals,
                  and feedback submitted through official contact forms or email channels.
                </li>
                <li>
                  <strong>System Telemetry &amp; Access Logs:</strong> IP address, device operating system version,
                  browser user-agent, and error crash logs used to maintain web reliability and defense against denial-of-service.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                3. Lawful Basis and Purpose of Processing
              </h2>
              <p>All data processed by HarKhil Agro is tethered to explicit operational objectives:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-warm-100/70 border border-warm-200">
                  <h4 className="font-bold text-forest-900 text-xs uppercase tracking-wide">Agronomic Advisory</h4>
                  <p className="text-xs text-warm-700 mt-1">
                    Generating accurate soil nutrient prescriptions and weather-resilient disease alerts.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-warm-100/70 border border-warm-200">
                  <h4 className="font-bold text-forest-900 text-xs uppercase tracking-wide">Technical Collaboration</h4>
                  <p className="text-xs text-warm-700 mt-1">
                    Evaluating joint research trials, cooperative integrations, and extension partnerships.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-warm-100/70 border border-warm-200">
                  <h4 className="font-bold text-forest-900 text-xs uppercase tracking-wide">Applied Research</h4>
                  <p className="text-xs text-warm-700 mt-1">
                    Calibrating multi-parameter soil models and bio-nutrient compatibility algorithms.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-warm-100/70 border border-warm-200">
                  <h4 className="font-bold text-forest-900 text-xs uppercase tracking-wide">System Security</h4>
                  <p className="text-xs text-warm-700 mt-1">
                    Defending digital properties against malicious traffic and maintaining web availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                4. Data Protection &amp; Technical Safeguards
              </h2>
              <p>
                HarKhil Agro applies rigorous technical standards to safeguard information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-warm-700">
                <li>Web interactions on our hosted domain are encrypted in transit via modern TLS 1.3 / HTTPS.</li>
                <li>Backend data stores in development are architected to enforce AES-256 cryptographic standards at rest.</li>
                <li>Internal access to partner inquiries and diagnostic datasets is restricted via role-based access control (RBAC).</li>
                <li>Routine dependency auditing and code reviews ensure zero unpatched security vulnerabilities.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                5. Rights of Registered Users and Farmers
              </h2>
              <p>Under our governance standards, every enrolled farmer or institutional partner possesses the right to:</p>
              <ul className="space-y-2 text-xs text-warm-800 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0" />
                  <span>Request a complete physical or digital copy of their soil test and purchase history.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0" />
                  <span>Rectify inaccurate land records, phone numbers, or profile information without delay.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0" />
                  <span>Request de-registration and account deactivation subject to settlement of outstanding dues.</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                6. Contact the Data Governance Officer
              </h2>
              <p>
                For questions regarding this policy, data rights execution, or security inquiries, please contact:
              </p>
              <div className="p-4 rounded-xl bg-warm-100/80 border border-warm-200 text-xs text-forest-950 font-mono">
                <div>Data Governance &amp; Ethics Officer</div>
                <div>HarKhil Agro (Division of HarKhil)</div>
                <div>Email: <a href="mailto:contact@harkhil.com" className="text-nature-600 underline">contact@harkhil.com</a></div>
                <div>Official Domain: agro.harkhil.com | Corporate: harkhil.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
