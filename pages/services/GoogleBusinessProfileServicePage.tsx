import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { ProjectEnquiryForm } from '../../components/ProjectEnquiryForm';

const GoogleBusinessProfileServicePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Google Business Profile & Local SEO Services in Coimbatore & Tamil Nadu | Luxefiz"
        description="Dominate local Google Maps and local 3-pack searches in Coimbatore and Tamil Nadu. Professional Google Business Profile optimization and review management by Luxefiz."
        canonicalUrl="https://www.luxefiz.com/services/google-business-profile-optimization"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Google Business Profile & Local Search Optimization",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Luxefiz",
              "url": "https://www.luxefiz.com"
            },
            "serviceType": "Local SEO",
            "areaServed": ["Coimbatore", "Mannargudi", "Tamil Nadu", "India"],
            "description": "Professional setup, optimization, and local citation management for Google Business Profile and Google Maps rankings."
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
                "name": "Google Business Profile",
                "item": "https://www.luxefiz.com/services/google-business-profile-optimization"
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
            <span className="text-signature-pink font-semibold">Local SEO & GBP</span>
          </div>

          <span className="badge-pill badge-pill-dark mb-4">Local Foot Traffic & Phone Calls</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            Be the First Answer When Local Buyers <br className="hidden md:block" />
            <span className="text-signature-pink">Search for Services Near Them</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            When potential customers in Coimbatore, Mannargudi, or across Tamil Nadu search for your industry on Google Maps, do you appear in the top 3 spots? We optimize your Google Business Profile to generate real phone calls and visits.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#enquiry" className="btn-primary">
              Optimize Your Google Profile
            </a>
            <Link to="/contact" className="btn-dark">
              Discuss Local Strategy &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Local SEO Matters */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">High-Intent Local Discovery</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-4">
              Why Google Business Profile is Your Best Local Conversion Tool
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nearly 80% of local searches on mobile result in an offline purchase or immediate phone call. An optimized Google Business Profile ensures you don't lose nearby high-ticket leads to inferior competitors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Google 3-Pack Presence</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Appearing in the top 3 map results captures over 60% of clicks for queries like "manufacturer in Coimbatore" or "clinic near me".
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Sustainable Review System</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We implement automated WhatsApp review acquisition workflows that prompt satisfied clients to leave authentic 5-star ratings without fake review risks.
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Direct Calls & Driving Directions</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Streamline direct mobile taps for click-to-call, business hours verification, and WhatsApp message routing right from search results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 px-6 bg-porcelain border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-pill badge-pill-purple mb-4">Scope of Work</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-6">
                Complete Local SEO Optimization Deliverables
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Category & Sub-Category Optimization',
                    desc: 'Selecting primary and secondary business categories that maximize Google ranking eligibility.'
                  },
                  {
                    title: 'Product & Service Menu Architecture',
                    desc: 'Adding keyword-optimized service catalogs with detailed descriptions and direct landing page links.'
                  },
                  {
                    title: 'NAP Consistency Across Regional Directories',
                    desc: 'Ensuring your Name, Address, and Phone number are 100% uniform across Justdial, IndiaMART, and trade listings.'
                  },
                  {
                    title: 'Geo-Tagged High-Resolution Photos',
                    desc: 'Adding verified exterior, interior, and work imagery to enhance user trust and algorithmic relevance.'
                  },
                  {
                    title: 'Authentic Review Funnel Automation',
                    desc: 'Providing simple QR codes and WhatsApp templates for generating genuine customer feedback.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100">
                    <span className="w-5 h-5 rounded-full bg-luxefiz-purple text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-obsidian">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-card border border-gray-100">
              <span className="badge-pill badge-pill-purple mb-3">Our Local Transparency Rules</span>
              <h3 className="text-2xl font-display font-bold text-obsidian mb-4">
                Honest Local SEO Only
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                We never practice black-hat techniques such as creating fake virtual offices or buying spam reviews. Google heavily suspends profiles that violate location guidelines.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
                <p className="font-bold">⚠️ Warning on Cheap Local SEO Agencies:</p>
                <p>Buying fake reviews or stuffing city keywords into your business name can trigger permanent Google Business Profile suspensions. We only use policy-compliant strategies that protect your business reputation long-term.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Enquiry */}
      <section id="enquiry" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <ProjectEnquiryForm defaultService="Google Business Profile & Local Search" />
        </div>
      </section>
    </div>
  );
};

export default GoogleBusinessProfileServicePage;
