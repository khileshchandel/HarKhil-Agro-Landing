import React from 'react';
import { ArrowRight, Database, CheckCircle, ShieldCheck, Cpu, Layers } from 'lucide-react';
import { Button, Badge, SectionHeader } from '../components/UI';
import { SEO } from '../components/SEO';

export const ProductsVentures: React.FC = () => {
  const ventures = [
    {
      id: 'harkhil-krishi',
      name: 'HarKhil Krishi Platform',
      category: 'Core Digital Agronomy Platform',
      stage: 'pilot' as const,
      badgeText: 'Active Pilot Platform',
      badgeVariant: 'active' as const,
      tagline: 'Centralized agronomy, diagnostics, and crop intelligence engine.',
      description:
        'The foundational digital platform connecting farmer profiles, land parcel records, multi-parameter soil test results, and personalized crop care regimens into an intuitive bilingual interface.',
      capabilities: [
        'Multi-lingual web and mobile dashboard architecture (Hindi & English)',
        'Automated fertilizer dose calculators adhering to scientific ICAR nutrient standards',
        'Direct connection to agronomic specialists for real-time problem escalation',
        'Structured field observation history and customized crop stage advisories',
      ],
      synergy:
        'Acts as the unifying data backbone across HarKhil Agro extension initiatives and agricultural research pilots.',
    },
    {
      id: 'soil-diagnostics-suite',
      name: 'Precision Soil Diagnostics Suite',
      category: 'Diagnostic Chemistry & Analytics',
      stage: 'operational' as const,
      badgeText: 'Field Tested Framework',
      badgeVariant: 'gold' as const,
      tagline: 'Empirical multi-parameter soil profiling and customized nutrition plans.',
      description:
        'A comprehensive soil analysis system evaluating 14 physical and chemical indicators to formulate micro-nutrient prescriptions that restore soil health and eliminate chemical over-application.',
      capabilities: [
        'Detailed profiling of macro (NPK), secondary (Ca, Mg, S), and micronutrients (Zn, Fe, Mn, Cu, B)',
        'Organic carbon and pH/electrical conductivity balancing protocols',
        'Yield-targeted fertilizer dose calculations calibrated to regional soil textures',
        'Bilingual diagnostic report generation with clear, actionable recommendations',
      ],
      synergy:
        'Provides empirical soil chemistry data feeding directly into the HarKhil Krishi advisory algorithms.',
    },
    {
      id: 'bio-nutrient-protocols',
      name: 'Bio-Nutrient Diagnostic Protocols',
      category: 'Soil Microbiology Research',
      stage: 'pilot' as const,
      badgeText: 'Research Pilot',
      badgeVariant: 'pilot' as const,
      tagline: 'Systematic bio-stimulant & mycorrhizal fungi performance mapping.',
      description:
        'An applied agronomy research initiative evaluating the actual field efficacy of liquid bio-fertilizers (Azotobacter, PSB, KMB) and mycorrhiza across degraded agricultural soil profiles.',
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
      id: 'future-agri-commerce',
      name: 'Agricultural Commerce & Value Chain Architecture',
      category: 'Enterprise Infrastructure',
      stage: 'planned' as const,
      badgeText: 'Conceptual Roadmap',
      badgeVariant: 'planned' as const,
      tagline: 'Transparent procurement and fair-value commodity linkage framework.',
      description:
        'A planned enterprise framework exploring digital contract verification, batch-level harvest traceability, and streamlined procurement connections between farmer producer groups and institutional buyers.',
      capabilities: [
        'Batch-level digital verification linking harvest lots to cultivation practices',
        'Standardized procurement metadata for agricultural cooperatives',
        'Fair-value settlement transparency for participating grower clusters',
        'Residue-compliance and harvest timing documentation standards',
      ],
      synergy:
        'Represents our forward-looking vision for integrating agronomic science with transparent rural value chains.',
    },
  ];

  return (
    <>
      <SEO
        title="Products & Ventures | HarKhil Agro Technology"
        description="Explore HarKhil Agro's owned initiatives: the HarKhil Krishi platform, precision soil diagnostic suites, bio-nutrient research, and value chain architecture."
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
              Integrated Platforms &amp; Applied Agronomy Initiatives
            </h1>
            <p className="mt-6 text-lg text-warm-800 leading-relaxed">
              We translate agronomic science into functioning digital platforms, empirical soil diagnostic frameworks,
              and research studies that address fundamental challenges in agricultural productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Technology Spotlight: HarKhil Krishi Digital Agronomy Engine */}
      <section className="py-20 bg-warm-50 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-forest-800 relative overflow-hidden shadow-xl">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-nature-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="gold">Proprietary Platform Engine</Badge>
                  <span className="text-xs font-mono text-warm-300">CORE-AG-01</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  HarKhil Krishi Platform
                </h2>

                <p className="text-base text-warm-300 leading-relaxed">
                  The centralized digital agronomy and crop intelligence platform engineered by HarKhil Agro.
                  It integrates empirical soil chemistry datasets, phenological growth stage modeling, and localized
                  weather intelligence into a cohesive advisory engine built to guide growers toward sustainable yield
                  optimization and input cost reduction.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-forest-900/90 border border-forest-800">
                    <span className="text-xs uppercase tracking-wider text-warm-400 block font-medium">
                      Diagnostic Depth
                    </span>
                    <span className="text-sm font-bold text-white mt-1 block">14 Parameters</span>
                    <span className="text-[11px] text-nature-300">Macro &amp; Micro Profiles</span>
                  </div>
                  <div className="p-4 rounded-xl bg-forest-900/90 border border-forest-800">
                    <span className="text-xs uppercase tracking-wider text-warm-400 block font-medium">
                      Advisory Scope
                    </span>
                    <span className="text-sm font-bold text-white mt-1 block">Phenology-Guided</span>
                    <span className="text-[11px] text-nature-300">Stage-Gated Crop Care</span>
                  </div>
                  <div className="p-4 rounded-xl bg-forest-900/90 border border-forest-800">
                    <span className="text-xs uppercase tracking-wider text-warm-400 block font-medium">
                      Architecture
                    </span>
                    <span className="text-sm font-bold text-white mt-1 block">Modular &amp; Bilingual</span>
                    <span className="text-[11px] text-nature-300">Hindi &amp; English Ready</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-forest-900/80 border border-forest-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                <h3 className="font-serif text-xl font-bold text-gold-400 mb-4">
                  Core Architectural Capabilities
                </h3>
                <ul className="space-y-3.5 text-xs text-warm-300">
                  <li className="flex items-start gap-2.5">
                    <Database className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Scientific fertilizer dose calculations adhering to ICAR guidelines</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Cpu className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Dynamic phenological stage tracking and pest threshold monitoring</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Layers className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Modular API schemas engineered for farm cooperative and extension integration</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Strict data governance ensuring zero commercialization of grower records</span>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-forest-800">
                  <Button to="/contact" variant="gold" size="sm" className="w-full">
                    <span>Inquire About Platform Collaboration</span>
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
            title="HarKhil Agro Initiatives &amp; Research"
            subtitle="Explore each proprietary platform, applied agronomy study, and forward-looking research architecture in our portfolio."
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
                        Core Capabilities &amp; Focus
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
                        Ecosystem Role
                      </span>
                      <p className="text-xs text-warm-700 italic">{venture.synergy}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-warm-200">
                  <Button to="/contact" variant="ghost" size="sm" className="w-full justify-between px-0">
                    <span>Discuss Initiative</span>
                    <ArrowRight className="w-4 h-4 text-nature-600" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Notice */}
      <section className="py-16 bg-warm-100/70 border-t border-warm-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 mb-3">
            Interested in Research or Agricultural Technology Collaboration?
          </h3>
          <p className="text-sm sm:text-base text-warm-800 max-w-xl mx-auto mb-6">
            We partner with agricultural research organizations, progressive cooperatives, and academic departments
            seeking to conduct joint soil health trials or explore digital extension technologies.
          </p>
          <Button to="/contact" variant="primary" size="md">
            <span>Initiate Collaboration Inquiry</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </section>
    </>
  );
};
