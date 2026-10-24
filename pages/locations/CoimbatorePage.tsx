import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { ProjectEnquiryForm } from '../../components/ProjectEnquiryForm';

const CoimbatorePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Website Development & SEO Company in Coimbatore | Luxefiz"
        description="Premium website development and technical SEO services for Coimbatore businesses. Engineered for manufacturers, healthcare, textiles, retail, and ambitious startups."
        canonicalUrl="https://www.luxefiz.com/locations/coimbatore"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Website Development & SEO Services in Coimbatore",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Luxefiz",
              "url": "https://www.luxefiz.com",
              "telephone": "+916382839617",
              "email": "info@luxefiz.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "Coimbatore",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Tamil Nadu"
              }
            },
            "description": "High-performance business website design, custom web applications, and local SEO services tailored for Coimbatore enterprises."
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
                "name": "Locations",
                "item": "https://www.luxefiz.com/"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Coimbatore",
                "item": "https://www.luxefiz.com/locations/coimbatore"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Does Luxefiz have an office in Coimbatore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Luxefiz is headquartered in Mannargudi, Tamil Nadu, and actively serves companies in Coimbatore through dedicated digital consulting, remote collaboration, and in-person milestone meetings. We do not make false claims of multiple physical offices."
                }
              },
              {
                "@type": "Question",
                "name": "What industries does Luxefiz serve in Coimbatore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We build digital solutions for Coimbatore's industrial manufacturers, textile and apparel brands, educational institutions, private healthcare providers, and emerging technology startups."
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
            <span>Locations</span>
            <span>/</span>
            <span className="text-signature-pink font-semibold">Coimbatore Commercial Hub</span>
          </div>

          <span className="badge-pill badge-pill-dark mb-4">Coimbatore Business Growth</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            High-Performance Web Development & <br className="hidden md:block" />
            <span className="text-signature-pink">Technical SEO in Coimbatore</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Coimbatore is Tamil Nadu’s premier engineering, industrial, and entrepreneurial powerhouse. We help Coimbatore businesses replace slow, outdated websites with world-class digital platforms that command trust and drive qualified enquiries.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#enquiry" className="btn-primary">
              Discuss Your Coimbatore Project
            </a>
            <Link to="/work" className="btn-dark">
              View Case Studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Coimbatore Market Realities */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">Tailored For Kongu Region</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-4">
              Built for Coimbatore's Thriving Business Sectors
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From SIDCO industrial estates in Kurichi to tech startups around Saravanampatti and retail corridors on DB Road, Coimbatore businesses require digital credibility that matches their high-quality manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Pumps, Motors & Industrial Engineering</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Clean, technical product catalogs with filterable specifications, PDF spec downloads, and direct export B2B RFQ inquiry funnels.
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Healthcare & Institutional Education</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Fast-loading institutional portals with doctor profiles, department details, admission inquiry workflows, and Google Maps local SEO.
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">🧵</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Textiles, Apparel & D2C Brands</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                High-converting modern e-commerce stores with instant UPI payment gateways, mobile optimization, and brand storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Local Collaboration Notice */}
      <section className="py-16 px-6 bg-porcelain border-y border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-display font-bold text-obsidian mb-3">
              Transparent Geographic Positioning
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Unlike agencies that falsely claim dozens of physical branches, Luxefiz is honestly headquartered in Mannargudi, Tamil Nadu. We actively serve the Coimbatore market through seamless digital communication, clear project scopes, and direct access to senior developers. You get Coimbatore-level digital standard with personal founder dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Enquiry */}
      <section id="enquiry" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <ProjectEnquiryForm defaultService="Website Design & Development" />
        </div>
      </section>
    </div>
  );
};

export default CoimbatorePage;
