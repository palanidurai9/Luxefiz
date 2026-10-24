import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { ProjectEnquiryForm } from '../../components/ProjectEnquiryForm';

const SeoServicePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Technical SEO & Organic Search Services in Coimbatore & Tamil Nadu | Luxefiz"
        description="Data-driven search engine optimization by Luxefiz. We build sustainable organic visibility through technical SEO, schema architecture, and high-intent commercial content."
        canonicalUrl="https://www.luxefiz.com/services/seo"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Technical Search Engine Optimization (SEO)",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Luxefiz",
              "url": "https://www.luxefiz.com"
            },
            "serviceType": "Search Engine Optimization",
            "areaServed": ["Coimbatore", "Tamil Nadu", "Mannargudi", "Chennai", "India"],
            "description": "Comprehensive technical SEO, on-page architecture, schema markup, and commercial keyword optimization."
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.luxefiz.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.luxefiz.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "SEO Services",
                "item": "https://www.luxefiz.com/services/seo"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you guarantee #1 rankings on Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No reputable SEO consultant guarantees exact #1 positions, as Google's algorithms frequently update. We build verifiable technical foundations, schema markups, and high-quality commercial content that position your site to reliably earn top-tier organic visibility."
                }
              },
              {
                "@type": "Question",
                "name": "How long before we see organic search results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Technical indexing improvements and local keyword gains generally reflect within 4 to 8 weeks. Competitive regional terms in Coimbatore typically require 3 to 6 months of sustained content and technical optimization."
                }
              }
            ]
          }
        ]}
      />

      {/* Hero */}
      <section className="bg-obsidian text-white pt-32 pb-24 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-signature-pink font-semibold">SEO Services</span>
          </div>

          <span className="badge-pill badge-pill-dark mb-4">Discovery Architecture</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            Technical SEO That Connects You to <br className="hidden md:block" />
            <span className="text-signature-pink">High-Intent Ready Buyers</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Traffic without commercial intent is a vanity metric. We optimize your website structure, semantic schema, and local search authority to attract clients actively searching for your exact services across Coimbatore, Tamil Nadu, and India.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#enquiry" className="btn-primary">
              Audit Your Search Visibility
            </a>
            <Link to="/work" className="btn-dark">
              See Case Studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars of Search Growth */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">Our Methodology</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-4">
              A Four-Pillar Architecture for Organic Search Authority
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reject cheap automated backlinks and keyword stuffing. We optimize for modern search engines and AI answer engines that prioritize user experience and technical precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="editorial-card p-6">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Technical Health</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Fixing crawl errors, sitemap misconfigurations, canonical tags, and Core Web Vitals to ensure search engines crawl your site effortlessly.
              </p>
            </div>

            <div className="editorial-card p-6">
              <div className="text-3xl mb-4">🏷️</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Schema Architecture</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Implementing JSON-LD schemas for Organizations, LocalBusiness, Breadcrumbs, and FAQs to earn rich snippets on Google.
              </p>
            </div>

            <div className="editorial-card p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Intent-Led Content</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Structuring service pages around the exact commercial problems buyers ask before hiring a provider in Tamil Nadu.
              </p>
            </div>

            <div className="editorial-card p-6">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Regional Authority</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Connecting local signals, geographic relevance, and Google Business Profile data to capture localized commercial intent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 px-6 bg-porcelain border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-pill badge-pill-purple mb-4">Deliverables & Reporting</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-6">
                What’s Delivered in Our SEO Engagements
              </h2>
              <div className="space-y-4">
                {[
                  {
                    name: 'Full Technical SEO Audit',
                    detail: 'Comprehensive inspection of crawlability, duplicate tags, broken internal links, and index status.'
                  },
                  {
                    name: 'Keyword Intent Mapping',
                    detail: 'Targeting high-intent search terms with realistic difficulty for Coimbatore and Tamil Nadu markets.'
                  },
                  {
                    name: 'On-Page Optimization',
                    detail: 'Handcrafted meta titles, descriptions, H1-H3 structures, and internal linking networks.'
                  },
                  {
                    name: 'Google Search Console Configuration',
                    detail: 'Monitoring query impressions, click-through rates, and resolving indexing anomalies.'
                  },
                  {
                    name: 'AI Search & LLM Readiness',
                    detail: 'Structuring content so generative search engines like Perplexity and ChatGPT can cite your services.'
                  }
                ].map((d, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white border border-gray-100 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-obsidian">{d.name}</h4>
                      <p className="text-xs text-gray-600">{d.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="editorial-dark-card p-8 md:p-10">
              <span className="badge-pill badge-pill-dark mb-4">No Fake Promises</span>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Our Ethical Search Promise
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Many agencies sell guaranteed first-page rankings using spam links that eventually cause Google algorithmic penalties. Luxefiz focuses on structural integrity, truthful content, and legitimate commercial relevance.
              </p>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-signature-pink font-bold">✕</span> No automated link-farming or spam directories
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-signature-pink font-bold">✕</span> No keyword stuffing or artificial density tricks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> 100% white-hat Schema.org compliant architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Real transparent reporting via Google Search Console
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Enquiry */}
      <section id="enquiry" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <ProjectEnquiryForm defaultService="Search Engine Optimization (SEO)" />
        </div>
      </section>
    </div>
  );
};

export default SeoServicePage;
