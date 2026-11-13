import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles, Filter } from 'lucide-react';
import { Button, Badge } from '../components/UI';
import { SEO } from '../components/SEO';

export const Solutions: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'pilot' | 'planned'>('all');

  const solutions = [
    {
      id: 'soil-diagnostics',
      category: 'Diagnostic Chemistry',
      status: 'active' as const,
      title: 'Precision Soil Health & Micro-Nutrient Intelligence',
      description:
        'A comprehensive diagnostic system connecting soil laboratory chemical assays with localized agronomic recommendations. Eliminates indiscriminate chemical application by prescribing exact nutrient inputs based on existing soil balances.',
      targetAudience: 'Farmers, Farmer Producer Organizations (FPOs), Soil Testing Labs, Rural Retail Hubs',
      features: [
        'Detailed profiling of 14 key soil parameters: N, P, K, Organic Carbon, pH, EC, S, Zn, Fe, Mn, Cu, B, Ca, Mg',
        'Crop-specific nutrient uptake calculation based on targeted yield and planting season',
        'Automated prescription generation with precise dosage recommendations in standard commercial bag sizes',
        'Hindi and English bilingual diagnostic advisory reports printable or shareable over WhatsApp/SMS',
        'Microbial health enhancement guidance using certified bio-fertilizers and organic soil conditioners',
      ],
      impact: 'Up to 20% reduction in unnecessary chemical expenditure while preserving soil microbial biology.',
    },
    {
      id: 'climate-advisory',
      category: 'Agronomic Intelligence',
      status: 'active' as const,
      title: 'Dynamic Phenology & Climate-Adaptive Crop Advisory',
      description:
        'A real-time guidance system that tracks crop growth stages, weather fluctuations, and localized pest infestation thresholds to send timely preventative agronomic advisories to growers.',
      targetAudience: 'Smallholder Growers, Progressive Farmers, Agri-Extension Officers',
      features: [
        'Phenological timeline tracking for major regional crops (Paddy, Wheat, Pulses, Oilseeds, Vegetables)',
        'Pre-monsoon, sowing, tillering, flowering, and grain filling stage-gated protective advisories',
        'Integrated Pest Management (IPM) protocols prioritizing biological and cultural control mechanisms',
        'Extreme weather early-warning alerts (heatwaves, unseasonal precipitation, hailstorm preparedness)',
        'Optimum spray window advisories based on wind speed, ambient humidity, and rain forecasts',
      ],
      impact: 'Minimizes crop loss from untimely disease outbreaks and prevents ineffective pesticide spraying.',
    },
    {
      id: 'extension-architecture',
      category: 'Enterprise Digital Agronomy',
      status: 'pilot' as const,
      title: 'Enterprise Agronomic Data & Extension Architecture',
      description:
        'A modular digital platform connecting agronomists, field extension agents, and agricultural cooperatives with structured crop nutrition guidelines, regional pest advisories, and centralized soil diagnostic datasets.',
      targetAudience: 'Agricultural Cooperatives, Extension Officers, Agronomists, Farming Collectives',
      features: [
        'Centralized digital repository for micro-regional soil testing records and crop history',
        'Field extension interface for logging verified agronomic observations and disease outbreaks',
        'Standardized data integration schemas for cooperative management systems',
        'Offline-capable local data capture ensuring operational continuity in remote field areas',
        'Automated bilingual agronomic summary generation for participating farm groups',
      ],
      impact: 'Eliminates data silos between field extension workers, laboratories, and grower organizations.',
    },
    {
      id: 'supply-traceability',
      category: 'Supply Chain & Verification',
      status: 'planned' as const,
      title: 'Farm-to-Market Harvest Traceability & Provenance',
      description:
        'An upcoming provenance platform logging field agronomic practices, input applications, and harvest conditions to create verifiable digital certificates for agricultural produce batches.',
      targetAudience: 'Institutional Buyers, Food Processors, Exporters, Certified Organic Collectives',
      features: [
        'Unique QR code generation per harvest crate or grain lot linking directly to cultivation history',
        'Digital verification of zero residue or standard-compliant chemical withdrawal periods',
        'Geo-referenced parcel tagging validating geographical origin and farm boundaries',
        'Direct procurement integration between institutional food brands and verified grower clusters',
        'Fair-value premium reconciliation ensuring bonuses reach the farmer directly',
      ],
      impact: 'Commands higher commodity valuations for verified sustainable practices and expands market access.',
    },
  ];

  const filteredSolutions =
    activeFilter === 'all' ? solutions : solutions.filter((s) => s.status === activeFilter);

  return (
    <>
      <SEO
        title="Solutions & Capabilities | Soil Diagnostics, Advisory & Rural Systems"
        description="Explore HarKhil Agro's modular solutions: precision soil diagnostics, crop phenology advisory, enterprise agronomic data architectures, and supply chain provenance."
        canonical="https://agro.harkhil.com/solutions"
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-warm-100/50 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-nature-600 block mb-3">
              Capabilities &amp; Deployments
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 tracking-tight leading-tight">
              Enterprise Agricultural Systems Built for Ground Reality
            </h1>
            <p className="mt-6 text-lg text-warm-800 leading-relaxed">
              Our solutions operate at the intersection of soil chemistry, digital infrastructure, and rural commerce.
              Each capability is clearly designated by its active operational status.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Listing Section */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Status Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-warm-200">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-warm-500">
              <Filter className="w-4 h-4" />
              <span>Filter by deployment phase:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-forest-900 text-white'
                    : 'bg-warm-100 text-warm-800 hover:bg-warm-200'
                }`}
              >
                All Capabilities ({solutions.length})
              </button>
              <button
                onClick={() => setActiveFilter('active')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeFilter === 'active'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-warm-100 text-warm-800 hover:bg-warm-200'
                }`}
              >
                Active Deployments (2)
              </button>
              <button
                onClick={() => setActiveFilter('pilot')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeFilter === 'pilot'
                    ? 'bg-amber-700 text-white'
                    : 'bg-warm-100 text-warm-800 hover:bg-warm-200'
                }`}
              >
                Active Pilots (1)
              </button>
              <button
                onClick={() => setActiveFilter('planned')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeFilter === 'planned'
                    ? 'bg-sky-700 text-white'
                    : 'bg-warm-100 text-warm-800 hover:bg-warm-200'
                }`}
              >
                In Development (1)
              </button>
            </div>
          </div>

          {/* Solutions Detailed List */}
          <div className="space-y-12">
            {filteredSolutions.map((sol) => (
              <div
                key={sol.id}
                id={sol.id}
                className="bg-white border border-warm-200 rounded-2xl p-8 sm:p-10 shadow-sm hover:border-nature-300 transition-all scroll-mt-32"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Overview */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant={sol.status}>
                        {sol.status === 'active'
                          ? 'Active Deployment'
                          : sol.status === 'pilot'
                          ? 'Operational Pilot'
                          : 'In Engineering Roadmap'}
                      </Badge>
                      <span className="text-xs uppercase tracking-wider text-warm-500 font-medium">
                        {sol.category}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 leading-snug">
                      {sol.title}
                    </h2>

                    <p className="text-sm sm:text-base text-warm-800 leading-relaxed">
                      {sol.description}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-500 mb-2">
                        Target Stakeholders
                      </h4>
                      <p className="text-xs font-medium text-forest-900 bg-warm-100/70 inline-block px-3 py-1 rounded-md">
                        {sol.targetAudience}
                      </p>
                    </div>

                    <div className="pt-4">
                      <div className="p-4 rounded-xl bg-nature-50 border border-nature-200 flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-nature-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-nature-800 block">
                            Measurable Impact
                          </span>
                          <p className="text-xs text-nature-900 mt-0.5">{sol.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Technical Features */}
                  <div className="lg:col-span-5 bg-warm-50/70 rounded-xl p-6 border border-warm-200 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-forest-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-nature-600" />
                        Core System Features
                      </h4>
                      <ul className="space-y-3 text-xs text-warm-800">
                        {sol.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-warm-200">
                      <Button to="/contact" variant="outline" size="sm" className="w-full">
                        <span>Inquire About Implementation</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment & Integration Safeguards */}
      <section className="py-16 bg-warm-100/80 border-t border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold-400">
                Integration Standard
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                Deploying Solutions With Institutional Rigor
              </h2>
              <p className="text-sm sm:text-base text-warm-300 leading-relaxed">
                We work directly alongside cooperatives, rural enterprises, and regional agriculture departments to
                conduct preliminary field baseline audits before deploying any system. This guarantees that technological
                tools correspond with the actual agronomic soil profiles and operational capacity of the target territory.
              </p>
              <div className="pt-4">
                <Button to="/contact" variant="gold" size="md">
                  <span>Schedule Technical Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
