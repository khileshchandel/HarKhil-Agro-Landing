import React from 'react';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake, Eye, Award, CheckCircle } from 'lucide-react';
import { Button, Card, SectionHeader } from '../components/UI';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us | Vision, Parentage & Philosophy"
        description="Learn about HarKhil Agro, our division of HarKhil, our commitment to scientific agronomy, honest soil intelligence, and empowering rural agricultural communities."
        canonical="https://agro.harkhil.com/about"
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-warm-100/50 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-nature-600 block mb-3">
              Corporate Overview &amp; Philosophy
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 tracking-tight leading-tight">
              Pioneering Rigorous Science &amp; Authentic Value for Rural Agriculture
            </h1>
            <p className="mt-6 text-lg text-warm-800 leading-relaxed">
              HarKhil Agro was founded on an unapologetic premise: the future of food security, farmer prosperity,
              and soil sustainability cannot rely on unverified digital promises or speculative hype. It requires
              rigorous field chemistry, resilient digital architectures, and an abiding respect for the grower.
            </p>
          </div>
        </div>
      </section>

      {/* The HarKhil Lineage & Genesis */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-nature-600">
                Lineage &amp; Corporate Structure
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
                A Dedicated Agritech Division of HarKhil
              </h2>
              <p className="text-base text-warm-800 leading-relaxed">
                As an enterprise technology parent company, <strong>HarKhil</strong> incubates high-impact platforms
                designed to address complex societal and industrial workflows. <strong>HarKhil Agro</strong> operates
                as the dedicated agricultural science, diagnostics, and rural systems division.
              </p>
              <p className="text-base text-warm-800 leading-relaxed">
                By uniting computational engineering with ground-level agricultural chemistry, we bridge the stark
                divide between academic research laboratories and the everyday realities faced by smallholder farmers
                and rural retail hubs.
              </p>
              <div className="pt-2">
                <a
                  href="https://harkhil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-nature-600 hover:text-forest-900 transition-colors"
                >
                  <span>Learn more about HarKhil parent corporate group</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-warm-200 rounded-2xl p-8 sm:p-10 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-forest-900 mb-6">Our Fundamental Operating Code</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-forest-900 text-base">Uncompromising Scientific Honesty</h4>
                    <p className="text-sm text-warm-700 mt-1">
                      We reject artificial inflation of crop yields or speculative algorithmic claims. Every advisory
                      recommendation is bound to empirical soil chemistry benchmarks and established botanical science.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 mt-1">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-forest-900 text-base">Farmer Autonomy &amp; Wealth Preservation</h4>
                    <p className="text-sm text-warm-700 mt-1">
                      Technology must enrich the producer, not lock them into predatory subscription loops. Our solutions
                      aim to lower input costs, prevent misdiagnosed crop disease, and optimize net margins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 mt-1">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-forest-900 text-base">Ecological Regeneration</h4>
                    <p className="text-sm text-warm-700 mt-1">
                      Promoting balanced soil micro-biome restoration, bio-fertilizer adoption, and precision application
                      to reverse soil compaction and salinization caused by chronic over-fertilization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-20 bg-warm-100/60 border-y border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Core Tenets"
            title="What Sets HarKhil Agro Apart"
            subtitle="Our dual commitment to deep technology architecture and grassroots agronomic realism defines every system we engineer."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-900 mb-3">Field-First Engineering</h3>
              <p className="text-sm text-warm-800 leading-relaxed">
                Rural India does not operate like an urban software lab. Our systems are engineered to function under
                intermittent connectivity, extreme temperature ranges, diverse vernacular scripts, and variable device
                specifications without operational degradation.
              </p>
            </Card>

            <Card>
              <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-900 mb-3">Empirical Soil Diagnostics</h3>
              <p className="text-sm text-warm-800 leading-relaxed">
                Rather than treating soil as a homogenous black box, we build micro-regional nutrient profiles that
                account for soil texture, cation-exchange capacity, electrical conductivity, and specific crop phenology
                stages.
              </p>
            </Card>

            <Card>
              <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-900 mb-3">Institutional Stewardship</h3>
              <p className="text-sm text-warm-800 leading-relaxed">
                We protect user and partner privacy with strict enterprise standards. Agricultural data generated by
                growers is safeguarded, never sold to third-party aggregators, and used exclusively to advance grower
                yield efficiency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic 3-Year Horizons */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Transparent Roadmap"
            title="Strategic Development Horizons"
            subtitle="An honest overview of where we are currently deploying, what is undergoing active pilot testing, and our forward-looking research agenda."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-emerald-500/40 rounded-2xl p-8 relative">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 uppercase tracking-wider mb-4">
                Horizon 1: Current Focus
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-900 mb-3">Core Diagnostic &amp; Soil Foundation</h3>
              <p className="text-sm text-warm-800 leading-relaxed mb-6">
                Standardizing empirical soil chemistry diagnostics, validating micro-zone nutrient algorithms, and
                establishing baseline crop care advisory regimens across pilot agricultural zones.
              </p>
              <ul className="space-y-2 text-xs text-warm-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Controlled regional soil sample testing protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bilingual digital advisory notification engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Calibration of N-P-K and secondary micronutrient dosing models</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-amber-300 rounded-2xl p-8 relative">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 uppercase tracking-wider mb-4">
                Horizon 2: Scale &amp; Integration
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-900 mb-3">Integrated Agronomy Network</h3>
              <p className="text-sm text-warm-800 leading-relaxed mb-6">
                Expanding to multi-district retail networks, automated satellite-derived vegetation indices (NDVI), and
                streamlining logistics between verified bio-manufacturers and retail distributors.
              </p>
              <ul className="space-y-2 text-xs text-warm-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Satellite phenology monitoring integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Direct-from-manufacturer bio-nutrient supply</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Agronomist tele-consultation platform</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-warm-300 rounded-2xl p-8 relative">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 uppercase tracking-wider mb-4">
                Horizon 3: Long-Term R&amp;D
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-900 mb-3">Autonomous Traceability &amp; Carbon</h3>
              <p className="text-sm text-warm-800 leading-relaxed mb-6">
                Investigating decentralized cryptographic crop provenance, verifiable soil organic carbon (SOC)
                sequestration credits, and precision drone-assisted micro-dosing.
              </p>
              <ul className="space-y-2 text-xs text-warm-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Soil organic carbon credit verification models</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Farm-to-fork cryptographic origin tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Autonomous micro-dosing spray protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Connect With Our Leadership &amp; Agronomy Team
          </h2>
          <p className="text-warm-300 text-base max-w-xl mx-auto mb-8">
            We welcome inquiries from agronomists, research institutions, regional distributors, and enterprise
            agribusiness stakeholders.
          </p>
          <Button to="/contact" variant="gold" size="lg">
            <span>Contact HarKhil Agro</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </section>
    </>
  );
};

