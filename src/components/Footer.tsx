import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShieldCheck, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 text-warm-300 border-t border-forest-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-forest-900">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 border border-gold-500/40 flex items-center justify-center text-nature-300">
                <Sprout className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  HarKhil <span className="text-nature-400 font-sans font-semibold text-xl">Agro</span>
                </span>
                <span className="text-xs text-warm-400 uppercase tracking-widest block">
                  A Division of HarKhil
                </span>
              </div>
            </Link>

            <p className="text-sm text-warm-300/80 leading-relaxed max-w-sm">
              Empowering farmers, agribusinesses, and rural supply chains through rigorous soil intelligence,
              climate-smart agronomy, and transparent digital infrastructure.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forest-900/80 border border-forest-800 text-xs text-nature-300">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Verified Agricultural Tech & Research Initiative</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/solutions#precision-agronomy" className="hover:text-nature-300 transition-colors">
                  Precision Agronomy
                </Link>
              </li>
              <li>
                <Link to="/solutions#soil-diagnostics" className="hover:text-nature-300 transition-colors">
                  Soil Diagnostic Suite
                </Link>
              </li>
              <li>
                <Link to="/solutions#supply-traceability" className="hover:text-nature-300 transition-colors">
                  Supply Traceability
                </Link>
              </li>
              <li>
                <Link to="/solutions#farmer-advisory" className="hover:text-nature-300 transition-colors">
                  Crop Advisory Network
                </Link>
              </li>
              <li>
                <Link to="/products-ventures" className="hover:text-nature-300 transition-colors">
                  Ecosystem Ventures
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-nature-300 transition-colors">
                  About HarKhil Agro
                </Link>
              </li>
              <li>
                <Link to="/about#mission" className="hover:text-nature-300 transition-colors">
                  Mission & Stewardship
                </Link>
              </li>
              <li>
                <Link to="/innovation-research" className="hover:text-nature-300 transition-colors">
                  Innovation & Research
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-nature-300 transition-colors">
                  Partnership Inquiries
                </Link>
              </li>
              <li>
                <a
                  href="https://harkhil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-gold-400 transition-colors"
                >
                  <span>HarKhil Parent Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Governance & Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Offices & Governance</h4>
            <ul className="space-y-3 text-sm text-warm-300/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-nature-400 shrink-0 mt-0.5" />
                <span>HarKhil Corporate Operations, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-nature-400 shrink-0" />
                <a href="mailto:contact@harkhil.com" className="hover:text-nature-300">
                  contact@harkhil.com
                </a>
              </li>
              <li className="pt-2">
                <Link to="/privacy-policy" className="text-xs text-warm-400 hover:text-white underline">
                  Corporate Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Transparency Statement */}
        <div className="py-6 border-b border-forest-900/60 text-xs text-warm-400/80 leading-relaxed">
          <p>
            <strong className="text-warm-300">Operational Notice:</strong> HarKhil Agro is an independent agricultural
            technology and advisory division under the HarKhil umbrella. Technical platforms, diagnostic tools, and pilot
            initiatives are rolled out strategically across designated agricultural belts. Features labeled as &apos;Planned&apos;
            or &apos;In Development&apos; represent active R&D milestones.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-warm-400 gap-4">
          <p>© {new Date().getFullYear()} HarKhil Agro. All rights reserved. A HarKhil Enterprise.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-warm-200 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-warm-200 transition-colors">
              Contact & Inquiries
            </Link>
            <span className="text-warm-500">Target: agro.harkhil.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

