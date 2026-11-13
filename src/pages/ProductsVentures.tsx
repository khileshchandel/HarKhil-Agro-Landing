import React from 'react';
import { ArrowRight, Database, Sprout, CheckCircle, ShieldCheck, Cpu } from 'lucide-react';
import { Button, Badge, SectionHeader } from '../components/UI';
import { SEO } from '../components/SEO';

export const ProductsVentures: React.FC = () => {
  const ventures = [
    {
      id: 'harkhil-krishi',
      name: 'HarKhil Krishi Platform',
      category: 'Digital Core System',
      stage: 'operational' as const,
      badgeText: 'Live Operational Platform',
      badgeVariant: 'active' as const,
      tagline: 'Centralized agronomy, diagnostics, and rural commerce engine.',
      description:
        'The foundational digital platform connecting farmer profiles, land parcel records, multi-parameter soil test results, and personalized crop care regimens into an intuitive bilingual interface.',
      capabilities: [
        'Multi-lingual mobile and web dashboard (Hindi & English)',
        'Automated fertilizer dose calculators adhering to ICAR guidelines',
        'Direct connection to agronomic specialists for real-time problem escalation',
        'Digital khata and billing history repository for enrolled farmers',
      ],
      synergy:
        'Acts as the unifying data backbone across all HarKhil Agro partner retail outlets and extension activities.',
    },
    {
      id: 'harkhil-model-hub',
      name: 'HarKhil Regional Model Hub',
      category: 'Flagship Operational Hub',
      stage: 'operational' as const,
      badgeText: 'Flagship Regional Deployment',
      badgeVariant: 'gold' as const,
      tagline: 'Standard-setting reference facility for digitalized input retail.',
      description:
        'Our premier demonstration and input distribution center in Central India, serving farming families with certified hybrid seeds, balanced crop nutrition, crop protection, and agricultural hardware, fully powered by HarKhil Agro digital systems.',
      capabilities: [
        'First complete field deployment of HarKhil Agro Retail Hub & Multi-UPI Payment System',
        'Operating official shop hours (7:00 AM – 8:30 PM) and scheduled input deliveries (10:00 AM – 4:00 PM)',
        'Local soil testing sample aggregation and diagnostic advisory distribution',
        'Zero-paperwork credit reconciliation via automated digital khata ledger',
      ],
      synergy:
        'Serves as the primary living laboratory and ground-truth validation center for all new software and agronomic protocols.',
    },
    {
      id: 'bio-phyto-protocols',
      name: 'Bio-Nutrient Diagnostic Protocols',
      category: 'Soil Microbiology Initiative',
      stage: 'pilot' as const,
      badgeText: 'Field Testing Pilot',
      badgeVariant: 'pilot' as const,
      tagline: 'Systematic bio-stimulant & mycorrhizal fungi performance mapping.',
      description:
        'An applied agronomy research initiative evaluating the actual field efficacy of liquid bio-fertilizers (Azotobacter, PSB, KMB) and mycorrhiza across degraded red and laterite soil profiles.',
      capabilities: [
        'Controlled test-strip trials documenting root elongation and phosphorus uptake',
        'Protocol development for seed-coating and furrow inoculation before sowing',
        'Verification guidelines to protect farmers against low-potency counterfeit bio-inputs',
        'Direct grower education on organic soil carbon augmentation techniques',
      ],
      synergy:
        'Feeds proprietary microbial compatibility algorithms into our soil advisory engine.',
    },
    {
      id: 'rural-logistics',
      name: 'Rural Last-Mile Agro-Logistics',
      category: 'Supply & Fulfillment Framework',
      stage: 'planned' as const,
      badgeText: 'Roadmap Milestone',
      badgeVariant: 'planned' as const,
      tagline: 'Scheduled, localized dispatch of bulk fertilizers and heavy farm supplies.',
      description:
        'A planned logistics and route-optimization service designed to eliminate the transportation bottleneck faced by smallholders when transporting heavy bags of compost, gypsum, and bulk fertilizers.',
      capabilities: [
        'Clustered village delivery scheduling between 10:00 AM and 4:00 PM',
        'SMS/WhatsApp real-time dispatch alerts to receiving farmers',
        'Consolidated bulk hauling lowering per-quintal transportation freight costs',
        'Verifiable physical handoff documentation with electronic confirmation',
      ],
      synergy:
        'Integrates directly with our retail POS to convert in-store purchases into dispatched orders.',
    },
  ];

  return (
    <>
      <SEO
        title="Products & Ventures | HarKhil Agro Ecosystem"
        description="Discover HarKhil Agro's operational ventures and initiatives, including the HarKhil Krishi platform, the regional model hub, and bio-nutrient protocols."
        canonical="https://agro.harkhil.com/products-ventures"
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-warm-100/50 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-nature-600 block mb-3">
              Ventures &amp; Ecosystem
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 tracking-tight leading-tight">
              Integrated Platforms &amp; Grassroots Ventures
            </h1>
            <p className="mt-6 text-lg text-warm-800 leading-relaxed">
              We translate agronomic theory into functioning platforms, regional model stores, and specialized
              initiatives that create tangible value in rural communities.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Venture Spotlight: HarKhil Regional Model Hub */}
      <section className="py-20 bg-warm-50 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-forest-800 relative overflow-hidden shadow-xl">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-nature-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="gold">Flagship Deployment Center</Badge>
                  <span className="text-xs font-mono text-warm-300">HUB-CI-01</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  HarKhil Regional Model Hub
                </h2>

                <p className="text-base text-warm-300 leading-relaxed">
                  Located in the fertile agrarian heartland of Central India, the HarKhil Regional Model Hub is the
                  flagship operational deployment of HarKhil Agro&apos;s digital input retail ecosystem. It represents a
                  full-scale realization of our modern agronomy vision: combining trusted, high-grade agricultural
                  inputs with transparent digital accounting, structured business hours, and precision farmer advisory.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-forest-900/90 border border-forest-800">
                    <span className="text-xs uppercase tracking-wider text-warm-400 block font-medium">
                      Operational Timings
                    </span>
                    <span className="text-sm font-bold text-white mt-1 block">7:00 AM – 8:30 PM</span>
                    <span className="text-[11px] text-nature-300">Open 7 Days a Week</span>
                  </div>
                  <div className="p-4 rounded-xl bg-forest-900/90 border border-forest-800">
                    <span className="text-xs uppercase tracking-wider text-warm-400 block font-medium">
                      Delivery Window
                    </span>
                    <span className="text-sm font-bold text-white mt-1 block">10:00 AM – 4:00 PM</span>
                    <span className="text-[11px] text-nature-300">Scheduled Dispatch</span>
                  </div>
                  <div className="p-4 rounded-xl bg-forest-900/90 border border-forest-800">
                    <span className="text-xs uppercase tracking-wider text-warm-400 block font-medium">
                      Payment System
                    </span>
                    <span className="text-sm font-bold text-white mt-1 block">Unified Multi-UPI</span>
                    <span className="text-[11px] text-nature-300">Khata &amp; Cash Synced</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-forest-900/80 border border-forest-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                <h3 className="font-serif text-xl font-bold text-gold-400 mb-4">
                  Tech Stack Deployed On-Site
                </h3>
                <ul className="space-y-3.5 text-xs text-warm-300">
                  <li className="flex items-start gap-2.5">
                    <Cpu className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>HarKhil Retail POS with real-time inventory ledger</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Database className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Digital Khata with automated SMS customer receipts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Certified seed authentication and batch tracking</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sprout className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>On-the-spot agronomic guidance and soil sample collection</span>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-forest-800">
                  <Button to="/contact" variant="gold" size="sm" className="w-full">
                    <span>Inquire About Regional Hub Model</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Ventures Grid */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Portfolio &amp; Roadmap"
            title="The HarKhil Agro Venture Portfolio"
            subtitle="Explore each operational platform, pilot study, and planned infrastructure system in our expanding ecosystem."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ventures.map((venture) => (
              <div
                key={venture.id}
                id={venture.id}
                className="bg-white border border-warm-200 rounded-2xl p-8 flex flex-col justify-between hover:border-nature-300 transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <Badge variant={venture.badgeVariant}>{venture.badgeText}</Badge>
                    <span className="text-xs uppercase tracking-wider text-warm-400 font-semibold">
                      {venture.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-forest-900 mb-2">
                    {venture.name}
                  </h3>

                  <p className="text-xs font-semibold text-nature-600 mb-4">
                    {venture.tagline}
                  </p>

                  <p className="text-sm text-warm-800 leading-relaxed mb-6">
                    {venture.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-forest-900 mb-2">
                        Key Operational Capabilities
                      </h4>
                      <ul className="space-y-2 text-xs text-warm-800">
                        {venture.capabilities.map((cap, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-nature-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-warm-200/60">
                      <span className="text-xs font-semibold text-warm-500 uppercase tracking-wider block mb-1">
                        Ecosystem Synergy
                      </span>
                      <p className="text-xs text-warm-700 italic">{venture.synergy}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-warm-200">
                  <Button to="/contact" variant="ghost" size="sm" className="w-full justify-between px-0">
                    <span>Discuss Partnership</span>
                    <ArrowRight className="w-4 h-4 text-nature-600" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Notice */}
      <section className="py-16 bg-warm-100/70 border-t border-warm-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 mb-3">
            Interested in Becoming a Regional Partner Hub?
          </h3>
          <p className="text-sm sm:text-base text-warm-800 max-w-xl mx-auto mb-6">
            We partner with established input distributors, cooperative societies, and progressive retailers seeking to
            upgrade their operations with modern digital billing, soil diagnostics, and transparent supply pipelines.
          </p>
          <Button to="/contact" variant="primary" size="md">
            <span>Apply for Hub Partnership</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </section>
    </>
  );
};
