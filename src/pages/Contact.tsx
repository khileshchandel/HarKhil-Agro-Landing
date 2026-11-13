import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, ShieldCheck, ArrowRight, AlertCircle, Copy, Check, ExternalLink } from 'lucide-react';
import { Button, Badge } from '../components/UI';
import { SEO } from '../components/SEO';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'enterprise',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const constructMailto = () => {
    const subject = encodeURIComponent(
      `[HarKhil Agro Inquiry - ${formData.inquiryType.toUpperCase()}] from ${formData.fullName}`
    );
    const body = encodeURIComponent(
      `Dear HarKhil Agro Team,\n\n` +
        `Name: ${formData.fullName}\n` +
        `Organization: ${formData.organization || 'Individual'}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Inquiry Type: ${formData.inquiryType}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `--\nSent via HarKhil Agro Landing Portal (agro.harkhil.com)`
    );
    return `mailto:contact@harkhil.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Do NOT claim the message was transmitted to a server because the backend API is not yet connected.
    // Trigger the real mailto link so the user can send via their email client.
    const mailto = constructMailto();
    window.location.href = mailto;
    setSubmitted(true);
  };

  const handleCopy = () => {
    const textToCopy =
      `Name: ${formData.fullName}\n` +
      `Organization: ${formData.organization || 'Individual'}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Inquiry Type: ${formData.inquiryType}\n\n` +
      `Message: ${formData.message}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Contact & Partnership Inquiries | Enterprise Agritech"
        description="Connect with HarKhil Agro. Initiate enterprise partnerships, retail hub deployments, research collaborations, or farmer advisory inquiries."
        canonical="https://agro.harkhil.com/contact"
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-warm-100/50 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-nature-600 block mb-3">
              Direct Inquiries
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 tracking-tight leading-tight">
              Connect With HarKhil Agro
            </h1>
            <p className="mt-6 text-lg text-warm-800 leading-relaxed">
              We collaborate with agricultural enterprises, cooperatives, retail input owners, and scientific
              institutions. Reach out to our engineering and agronomy teams.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Form & Contact Info */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-warm-200 rounded-2xl p-8 sm:p-10 shadow-sm">
                {/* Integration Status Notice */}
                <div className="mb-6 p-4 rounded-xl bg-amber-50/80 border border-amber-300 text-xs text-amber-900 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase tracking-wide block mb-0.5">
                      Backend Integration Notice: Web API Not Connected
                    </span>
                    <span>
                      An automated backend submission API is not yet provisioned. Submitting this form opens your email client with a pre-formatted draft to{' '}
                      <strong className="underline">contact@harkhil.com</strong>. No inquiry is stored on a server.
                    </span>
                  </div>
                </div>

                {submitted ? (
                  <div className="py-6 space-y-6">
                    <div className="p-4 rounded-xl bg-nature-50 border border-nature-200 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-nature-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-forest-900">
                          Draft Prepared in Your Email Client
                        </h3>
                        <p className="text-xs text-warm-700 mt-1">
                          Your email application was triggered with your inquiry details addressed to{' '}
                          <a href="mailto:contact@harkhil.com" className="font-bold text-nature-700 underline">
                            contact@harkhil.com
                          </a>.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-warm-50 border border-warm-200 space-y-2 text-xs">
                      <span className="font-bold text-forest-900 uppercase tracking-wider block">
                        Prepared Inquiry Summary:
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-warm-700">
                        <div><strong>Name:</strong> {formData.fullName}</div>
                        <div><strong>Organization:</strong> {formData.organization || 'Individual'}</div>
                        <div><strong>Email:</strong> {formData.email}</div>
                        <div><strong>Phone:</strong> {formData.phone}</div>
                        <div className="col-span-2"><strong>Type:</strong> {formData.inquiryType}</div>
                      </div>
                      <div className="pt-2 border-t border-warm-200">
                        <strong>Message:</strong>
                        <p className="text-warm-800 mt-1 italic whitespace-pre-wrap">{formData.message}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={constructMailto()}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-forest-900 text-white text-xs font-semibold hover:bg-forest-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Re-open in Email Client</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-warm-300 bg-white text-xs font-semibold hover:bg-warm-100 transition-colors text-forest-900"
                      >
                        {copied ? <Check className="w-4 h-4 text-nature-600" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Text'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: '',
                            organization: '',
                            email: '',
                            phone: '',
                            inquiryType: 'enterprise',
                            message: '',
                          });
                        }}
                        className="px-4 py-2.5 text-xs text-warm-600 hover:text-forest-900 underline"
                      >
                        Reset Form
                      </button>
                    </div>

                    <div className="text-[11px] text-warm-500 pt-2 border-t border-warm-200">
                      <strong>Audit Notice:</strong> Per strict data accuracy rules, we explicitly record that this
                      inquiry has <em>not</em> been transmitted via background API. Please confirm sending via your email.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-forest-900">
                          Initiate Communication
                        </h3>
                        <p className="text-xs text-warm-600 mt-1">
                          Fill out the details below to generate an inquiry for our technical team.
                        </p>
                      </div>
                      <Badge variant="pilot">Form in Staging</Badge>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Patel"
                          className="w-full px-4 py-2.5 rounded-lg border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-nature-500 bg-warm-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-2">
                          Organization / Farm / Hub
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="e.g. Agro Co-op / Retail Center"
                          className="w-full px-4 py-2.5 rounded-lg border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-nature-500 bg-warm-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@organization.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-nature-500 bg-warm-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-lg border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-nature-500 bg-warm-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-2">
                        Inquiry Nature *
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-nature-500 bg-warm-50/50"
                      >
                        <option value="enterprise">Enterprise Solutions &amp; Platform Licensing</option>
                        <option value="farmer-partnership">Retail Hub Deployment (Krishi Kendra Model)</option>
                        <option value="technology-synergy">Academic &amp; Field Agronomy Research</option>
                        <option value="press-media">Institutional &amp; Media Inquiries</option>
                        <option value="general">General Agronomic Query</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-2">
                        Message &amp; Project Context *
                      </label>
                      <textarea
                        required
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your operational requirements, crop focus, or research objective..."
                        className="w-full px-4 py-2.5 rounded-lg border border-warm-300 text-sm focus:outline-none focus:ring-2 focus:ring-nature-500 bg-warm-50/50"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-warm-500">
                        <ShieldCheck className="w-4 h-4 text-nature-600 shrink-0" />
                        <span>Direct to contact@harkhil.com. No spam, no data resale.</span>
                      </div>
                      <Button type="submit" variant="primary" size="md">
                        <span>Send via Email Client</span>
                        <Send className="w-4 h-4 ml-1.5" />
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Information Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-forest-950 text-white rounded-2xl p-8 border border-forest-800">
                <h3 className="font-serif text-2xl font-bold mb-6">Corporate Office &amp; Hubs</h3>

                <div className="space-y-6 text-sm text-warm-300">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-base">Regional Operating Center</h4>
                      <p className="mt-1 leading-relaxed">
                        HarKhil Agro Regional Center &amp; Model Hub<br />
                        Central India Agricultural Zone, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-base">Direct Email</h4>
                      <a href="mailto:contact@harkhil.com" className="mt-1 text-nature-300 hover:underline block font-mono">
                        contact@harkhil.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-base">Business &amp; Hub Hours</h4>
                      <p className="mt-1 leading-relaxed">
                        Shop &amp; Retail Operations: <strong>7:00 AM – 8:30 PM IST</strong><br />
                        Input Delivery Hours: <strong>10:00 AM – 4:00 PM IST</strong><br />
                        Corporate Administrative Desk: Mon – Sat, 9:00 AM – 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-forest-800">
                  <div className="flex items-center justify-between text-xs text-warm-400">
                    <span>Parent Organization:</span>
                    <a
                      href="https://harkhil.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-400 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>HarKhil Group</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Notice Card */}
              <div className="p-6 rounded-2xl bg-white border border-warm-200 text-xs text-warm-700 leading-relaxed space-y-2">
                <span className="font-bold uppercase tracking-wider text-forest-900 block">
                  Notice to Input Manufacturers &amp; Suppliers
                </span>
                <p>
                  HarKhil Agro enforces zero tolerance for counterfeit or unregistered chemical and bio-inputs. All
                  product suppliers seeking to distribute through partner retail centers must submit valid CIB&amp;RC
                  certifications and manufacturing batch records for audit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
