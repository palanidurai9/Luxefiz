import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { ProjectEnquiryForm } from '../../components/ProjectEnquiryForm';

const DigitalMarketingServicePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Performance Digital Marketing for Small & Medium Businesses | Luxefiz"
        description="Pragmatic digital marketing services in Tamil Nadu. We build targeted Meta ads, Google Search campaigns, and conversion funnels that generate measurable customer enquiries."
        canonicalUrl="https://www.luxefiz.com/services/digital-marketing"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Performance Digital Marketing Services",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Luxefiz",
              "url": "https://www.luxefiz.com"
            },
            "serviceType": "Digital Marketing",
            "areaServed": ["Coimbatore", "Tamil Nadu", "India"],
            "description": "Targeted digital marketing focused on commercial conversion, customer acquisition funnels, and data transparency."
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
                "name": "Digital Marketing",
                "item": "https://www.luxefiz.com/services/digital-marketing"
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
            <span className="text-signature-pink font-semibold">Digital Marketing</span>
          </div>

          <span className="badge-pill badge-pill-dark mb-4">Measurable Customer Acquisition</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            Digital Marketing Focused on <br className="hidden md:block" />
            <span className="text-signature-pink">Commercial Value, Not Vanity Metrics</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Likes and impressions don't pay bills. We design practical digital marketing funnels, paid advertising campaigns, and retargeting systems designed to convert curious browsers into paying customers.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#enquiry" className="btn-primary">
              Plan Your Campaign
            </a>
            <Link to="/work" className="btn-dark">
              Explore Our Results &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">Our Core Scope</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-4">
              Transparent, High-Impact Marketing Capabilities
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We specialize in strategies that directly impact small and medium business revenue. We don't sell bloated retainers with useless weekly graphic packs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">High-Intent Paid Search (Google Ads)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Capture buyers at the exact moment they search for urgent services. Zero wasted ad spend on negative keywords and non-commercial queries.
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Targeted Meta (Instagram & FB) Ads</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                High-converting video and carousel creatives targeting demographic, geographic, and behavioral buyer clusters across Tamil Nadu and India.
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Conversion Retargeting Funnels</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Keep your brand top-of-mind with website visitors who didn't enquire on day one, guiding them through testimonials and trust proof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Enquiry */}
      <section id="enquiry" className="py-20 px-6 bg-porcelain border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <ProjectEnquiryForm defaultService="Performance Digital Marketing" />
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingServicePage;
