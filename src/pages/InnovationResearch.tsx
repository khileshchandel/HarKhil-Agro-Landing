import React from 'react';
import { ArrowRight, Microscope, Sprout, TestTube2, BrainCircuit, BookOpen, CheckCircle } from 'lucide-react';
import { Button, SectionHeader } from '../components/UI';
import { SEO } from '../components/SEO';

export const InnovationResearch: React.FC = () => {
  const researchPillars = [
    {
      title: 'Soil Microbiome & Bio-Nutrient Synergy',
      category: 'Microbiology & Regenerative Agronomy',
      icon: TestTube2,
      description:
        'Chronic overuse of high-salt chemical fertilizers has depleted soil microbial biodiversity across intensive cropping belts. Our laboratory and field research focuses on restoring active biological life to degraded agricultural soils.',
      methodology:
        'Controlled field-plot trials evaluating synergistic combinations of mycorrhizal fungi, liquid Azotobacter, and organic carbon humates to enhance phosphorus solubilization and root architecture.',
      ongoingWork: [
        'Mapping microbial viability duration under peak summer ambient field temperatures (42°C+)',
        'Quantifying chemical fertilizer reduction thresholds without yield sacrifice across rice-wheat rotations',
        'Standardizing carrier-based vs liquid formulation bio-fertilizer shelf lives for rural distribution',
      ],
    },
    {
      title: 'Micro-Zone Nutrient Diagnostic Modeling',
      category: 'Computational Agronomy',
      icon: BrainCircuit,
      description:
        'Most national fertilizer recommendations are formulated as broad state-wide averages that fail to account for severe hyper-local soil variations. We develop computational models tailored to micro-watershed boundaries.',
      methodology:
        'Coupling geographic information systems (GIS), regional soil geological parent-material data, and verified lab test datasets to formulate dynamic, plot-specific nutrition plans.',
      ongoingWork: [
        'Developing rapid optical soil spectrometry calibration models for secondary micronutrients (Zinc, Boron)',
        'Integrating satellite surface moisture indices with soil absorption rates to optimize fertigation schedules',
        'Creating vernacular prescription engines accessible to semi-literate growers via voice and audio alerts',
      ],
    },
    {
      title: 'Climate Resilience & Drought Mitigation',
      category: 'Applied Botanical Science',
      icon: Sprout,
      description:
        'With monsoon onset dates shifting and unseasonal rainfall during harvest periods becoming frequent, our applied agronomy team studies low-risk agronomic practices that protect crop yields under adverse climate shocks.',
      methodology:
        'Field-testing stress-tolerant crop cultivars alongside foliar anti-transpirant applications, silicates for stem strength, and optimized sowing windows.',
      ongoingWork: [
        'Evaluating lodging resistance in indigenous non-hybrid paddy varieties under high wind conditions',
        'Refining foliar potassium and silicon spray regimens to protect wheat against terminal heat stress',
        'Promoting cover-cropping protocols that increase soil water holding capacity by up to 18%',
      ],
    },
    {
      title: 'Field-Tested Computer Vision Diagnostics',
      category: 'Pragmatic Machine Learning',
      icon: Microscope,
      description:
        'Rather than deploying generic internet-scraped image models that misdiagnose crop disease, we are building a verified dataset of field-captured pathological samples across Indian agro-climatic conditions.',
      methodology:
        'Collecting high-resolution macroscopic imagery of leaf blast, sheath rot, stem borer, and nutrient deficiency symptoms with confirmed lab pathology validation.',
      ongoingWork: [
        'Curating a 50,000+ verified sample dataset across paddy, soybean, tomato, and chilli crops',
        'Optimizing lightweight convolutional neural networks to run locally on mid-range Android devices with zero latency',
        'Cross-referencing visual symptoms with current soil chemistry to differentiate viral blight from severe zinc deficiency',
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Innovation & Research | Scientific Agronomy & Soil Science"
        description="Explore HarKhil Agro's R&D initiatives: soil microbiome regeneration, micro-zone nutrient modeling, climate-resilient crop protocols, and empirical computer vision."
        canonical="https://agro.harkhil.com/innovation-research"
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-warm-100/50 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-nature-600 block mb-3">
              Applied Science &amp; R&amp;D
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 tracking-tight leading-tight">
              Grounded in the Scientific Method, Validated in the Soil
            </h1>
            <p className="mt-6 text-lg text-warm-800 leading-relaxed">
              We reject the rush toward superficial, ungrounded agritech solutions. At HarKhil Agro, technological
              engineering serves empirical agronomic science — measuring, testing, and verifying every intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Integrity Charter */}
      <section className="py-12 bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-warm-50 border border-warm-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 mt-1">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-forest-900">
                  Our Scientific Integrity Commitment
                </h3>
                <p className="text-sm text-warm-700 mt-1 max-w-2xl">
                  We publish clear experimental parameters, distinguish hypothesis from validated outcome, and never
                  exaggerate diagnostic precision. We hold our software and agronomic tools to peer-reviewed benchmarks.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <Button to="/contact" variant="outline" size="sm">
                <span>Request Research Dataset</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="Active Exploration"
            title="Current Research Vectors"
            subtitle="Explore our ongoing laboratory investigations and multi-season field testing frameworks."
          />

          <div className="space-y-12">
            {researchPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-warm-200 rounded-2xl p-8 sm:p-10 shadow-sm hover:border-nature-300 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-forest-900 text-gold-400 flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-nature-600 block">
                            {pillar.category}
                          </span>
                          <h3 className="font-serif text-2xl font-bold text-forest-900">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-warm-800 leading-relaxed pt-2">
                        {pillar.description}
                      </p>

                      <div className="p-4 rounded-xl bg-warm-100/70 border border-warm-200">
                        <span className="text-xs font-bold uppercase tracking-wider text-forest-900 block mb-1">
                          Empirical Methodology
                        </span>
                        <p className="text-xs text-warm-800 leading-relaxed">{pillar.methodology}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-warm-50 rounded-xl p-6 border border-warm-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-forest-900 mb-4">
                        Current Exploration Milestones
                      </h4>
                      <ul className="space-y-3 text-xs text-warm-800">
                        {pillar.ongoingWork.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-nature-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic & Agronomist Collaboration Banner */}
      <section className="py-20 bg-forest-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-400">
              Institutional Partnership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
              Collaborate on Field Research &amp; Soil Studies
            </h2>
            <p className="text-base text-warm-300 leading-relaxed">
              We actively collaborate with agricultural universities, Krishi Vigyan Kendras (KVKs), independent
              agronomists, and soil testing laboratories to conduct joint field trials and validate regenerative
              management protocols.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" variant="gold" size="lg">
                <span>Submit Collaboration Proposal</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
