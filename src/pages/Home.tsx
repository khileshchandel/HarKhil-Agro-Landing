import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Leaf, BarChart3, Database, Cpu, Compass, Layers, Sparkles } from 'lucide-react';
import { Button, Card, Badge, SectionHeader } from '../components/UI';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Sustainable Agritech & Enterprise Rural Infrastructure"
        description="HarKhil Agro bridges scientific agronomy, field-proven technology, and sustainable stewardship to advance India's agricultural prosperity."
        canonical="https://agro.harkhil.com"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Subtle decorative background gradients */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-nature-100/40 rounded-full blur-3xl opacity-60" />
          <div className="absolute top-1/3 right-10 w-80 h-80 bg-gold-300/20 rounded-full blur-2xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-900 text-xs font-semibold uppercase tracking-wider mb-8">
              <Leaf className="w-3.5 h-3.5 text-nature-600" />
              <span>A HarKhil Agricultural Technology Division</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-forest-900 leading-[1.12] text-balance">
              Transforming Agriculture Through <span className="gold-gradient-text">Technology</span>, Science &amp; Integrity
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-warm-800/90 leading-relaxed max-w-2xl mx-auto text-balance">
              Building resilient agricultural systems. We integrate soil diagnostic intelligence, climate-adaptive
              crop guidance, and equitable rural market access for growers and enterprises.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button to="/solutions" variant="primary" size="lg">
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button to="/about" variant="outline" size="lg">
                <span>Our Philosophy</span>
              </Button>
            </div>

            {/* Trust Markers Bar */}
            <div className="mt-16 pt-8 border-t border-warm-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-nature-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-forest-900">Truth in Data</h4>
                  <p className="text-xs text-warm-500 mt-0.5">Zero fabricated claims; honest agronomic outcomes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-nature-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-forest-900">Soil Intelligence</h4>
                  <p className="text-xs text-warm-500 mt-0.5">Diagnostics tailored to micro-regional soil profiles.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-nature-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-forest-900">Field-Ready Tech</h4>
                  <p className="text-xs text-warm-500 mt-0.5">High-availability systems built for rural real-world operations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-nature-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-forest-900">Ecological Focus</h4>
                  <p className="text-xs text-warm-500 mt-0.5">Long-term soil vitality and input balance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Core Pillars Section */}
      <section className="py-20 bg-warm-100/70 border-y border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Architectural Framework"
            title="Engineered for Sustainable Agricultural Resilience"
            subtitle="HarKhil Agro operates across four fundamental vectors to address structural challenges in crop yield, input inefficiency, and value distribution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-forest-900 text-nature-300 flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">Soil Health &amp; Diagnostics</h3>
                <p className="text-sm text-warm-800 leading-relaxed">
                  Laboratory-aligned field diagnostics mapping N-P-K ratios, micronutrients, pH balance, and organic
                  matter to eliminate guesswork from fertilizer application.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-warm-200/60">
                <span className="text-xs font-semibold text-nature-600 uppercase tracking-wider">Foundation Pillar</span>
              </div>
            </Card>

            <Card className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-forest-900 text-nature-300 flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">Climate-Smart Agronomy</h3>
                <p className="text-sm text-warm-800 leading-relaxed">
                  Integrating localized agro-climatic intelligence, pest pressure forecasts, and weather resilience
                  models into actionable, day-to-day advisory schedules.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-warm-200/60">
                <span className="text-xs font-semibold text-nature-600 uppercase tracking-wider">Predictive Science</span>
              </div>
            </Card>

            <Card className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-forest-900 text-nature-300 flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">Transparent Supply Networks</h3>
                <p className="text-sm text-warm-800 leading-relaxed">
                  Direct agricultural supply chain integration, verifiable origin tracing, authentic bio-input delivery,
                  and elimination of substandard counterfeit inputs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-warm-200/60">
                <span className="text-xs font-semibold text-nature-600 uppercase tracking-wider">Ecosystem Trust</span>
              </div>
            </Card>

            <Card className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-forest-900 text-nature-300 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">Rural Agritech Infrastructure</h3>
                <p className="text-sm text-warm-800 leading-relaxed">
                  Resilient digital applications engineered for field agronomists, regional extension teams,
                  and rural agricultural cooperatives operating in low-bandwidth regions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-warm-200/60">
                <span className="text-xs font-semibold text-nature-600 uppercase tracking-wider">Digital Enablement</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Solutions Matrix */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-nature-600 mb-2 block">
                Technology Capabilities
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900">
                Operational &amp; R&amp;D Initiatives
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Button to="/solutions" variant="outline" size="sm">
                <span>View All Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-warm-200 rounded-2xl p-8 relative flex flex-col justify-between shadow-sm hover:border-nature-300 card-hover-lift">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="active">Active Deployment</Badge>
                  <span className="text-xs font-mono text-warm-400">AG-SOL-01</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-900 mb-3">
                  Soil Diagnostic Intelligence
                </h3>
                <p className="text-sm text-warm-800 leading-relaxed mb-6">
                  Comprehensive soil profiling combining physical soil sample chemistry with micro-climate satellite
                  data to produce precision fertilization prescription plans.
                </p>
                <ul className="space-y-2.5 text-xs text-warm-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0" />
                    <span>NPK, Zinc, Boron, &amp; Iron balance mapping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0" />
                    <span>Reduces chemical input cost by up to 20%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0" />
                    <span>Direct farmer report in regional languages</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-warm-200">
                <Button to="/solutions#soil-diagnostics" variant="ghost" size="sm" className="w-full justify-between px-0">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 text-nature-600" />
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-warm-200 rounded-2xl p-8 relative flex flex-col justify-between shadow-sm hover:border-nature-300 card-hover-lift">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="pilot">Active Pilot</Badge>
                  <span className="text-xs font-mono text-warm-400">AG-SOL-02</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-900 mb-3">
                  Dynamic Phenology &amp; Advisory
                </h3>
                <p className="text-sm text-warm-800 leading-relaxed mb-6">
                  Stage-gated crop protection advisories, weather resilience modeling, and preventative pest threshold
                  alerts tailored to regional cropping cycles.
                </p>
                <ul className="space-y-2.5 text-xs text-warm-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0" />
                    <span>Phenological growth stage timeline tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0" />
                    <span>Integrated Pest Management (IPM) guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0" />
                    <span>Extreme weather and optimal spray timing alerts</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-warm-200">
                <Button to="/solutions#climate-advisory" variant="ghost" size="sm" className="w-full justify-between px-0">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 text-nature-600" />
                </Button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-warm-200 rounded-2xl p-8 relative flex flex-col justify-between shadow-sm hover:border-nature-300 card-hover-lift">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="planned">In Development</Badge>
                  <span className="text-xs font-mono text-warm-400">AG-SOL-03</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-900 mb-3">
                  Field Traceability Pipeline
                </h3>
                <p className="text-sm text-warm-800 leading-relaxed mb-6">
                  Verifiable digital pedigree for high-value crops, logging organic practices and crop treatment from
                  seed sowing to harvest consignment.
                </p>
                <ul className="space-y-2.5 text-xs text-warm-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0" />
                    <span>Batch-level QR provenance verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0" />
                    <span>Export-compliant residue documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-nature-600 shrink-0" />
                    <span>Fair-value premium distribution to growers</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-warm-200">
                <Button to="/solutions#supply-traceability" variant="ghost" size="sm" className="w-full justify-between px-0">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 text-nature-600" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Identity & Parentage Section */}
      <section className="py-20 bg-forest-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold-400 block">
                The HarKhil Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
                Anchored in Scientific Rigor, Driven by Agricultural Equity
              </h2>
              <p className="text-base text-warm-300 leading-relaxed">
                As a specialized division of HarKhil, HarKhil Agro inherits a firm institutional dedication to
                computational excellence, institutional integrity, and grassroots empowerment. We do not chase
                ephemeral speculative trends; our technology is built directly in collaboration with agronomists,
                soil chemists, and rural farming communities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-forest-900/60 border border-forest-800">
                  <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    Agronomic Truth
                  </h4>
                  <p className="text-xs text-warm-300/80 mt-1">
                    Every diagnostic model is backed by documented soil chemistry standards.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-forest-900/60 border border-forest-800">
                  <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                    <Compass className="w-4 h-4 text-gold-400" />
                    Farmer-First Stewardship
                  </h4>
                  <p className="text-xs text-warm-300/80 mt-1">
                    Prioritizing grower profitability, soil microbial recovery, and economic independence.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-forest-900/80 border border-forest-800 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Ecosystem Highlights</h3>
              <div className="space-y-6">
                <div className="border-b border-forest-800 pb-4">
                  <div className="text-2xl font-serif font-bold text-gold-400">100%</div>
                  <div className="text-xs uppercase tracking-wider text-warm-300 font-medium mt-1">Verified Real-World Implementations</div>
                  <p className="text-xs text-warm-400 mt-1">All active solutions deployed across monitored partner centers.</p>
                </div>
                <div className="border-b border-forest-800 pb-4">
                  <div className="text-2xl font-serif font-bold text-nature-400">Micro-Zone</div>
                  <div className="text-xs uppercase tracking-wider text-warm-300 font-medium mt-1">Adaptive Prescription Framework</div>
                  <p className="text-xs text-warm-400 mt-1">Customized to specific regional soil compositions and weather conditions.</p>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-white">Full-Stack</div>
                  <div className="text-xs uppercase tracking-wider text-warm-300 font-medium mt-1">Cloud to Field Integration</div>
                  <p className="text-xs text-warm-400 mt-1">Connecting IoT soil diagnostics, retail inventory, and grower mobile interfaces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Conversion Band */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-warm-50 to-warm-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-nature-600 block mb-3">
            Collaborate With HarKhil Agro
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight text-balance">
            Partner in Building Sustainable Rural Technology
          </h2>
          <p className="mt-4 text-base sm:text-lg text-warm-800 max-w-2xl mx-auto leading-relaxed text-balance">
            Whether you are an agricultural cooperative, research institution, retail distributor, or enterprise buyer,
            we invite you to explore synergy with our engineering and agronomy teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              <span>Initiate Partnership Inquiry</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button to="/products-ventures" variant="outline" size="lg">
              <span>Explore Ventures</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

