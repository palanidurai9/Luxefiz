import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { ProjectEnquiryForm } from '../../components/ProjectEnquiryForm';

const BrandingServicePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Brand Identity & Creative Design Studio | Luxefiz"
        description="Transform your business into a trusted digital brand. Distinctive logo design, typography systems, color palettes, and brand guidelines by Luxefiz."
        canonicalUrl="https://www.luxefiz.com/services/branding"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Brand Identity & Creative Design",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Luxefiz",
              "url": "https://www.luxefiz.com"
            },
            "serviceType": "Branding Design",
            "areaServed": ["Tamil Nadu", "Coimbatore", "India"],
            "description": "Complete visual brand identity systems including logo design, color palettes, typography guidelines, and digital brand collateral."
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
                "name": "Branding",
                "item": "https://www.luxefiz.com/services/branding"
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
            <span className="text-signature-pink font-semibold">Branding & Creative Design</span>
          </div>

          <span className="badge-pill badge-pill-dark mb-4">Luxe Digital Identity</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            Turn Your Business Into an <br className="hidden md:block" />
            <span className="text-signature-pink">Unforgettable, Trusted Brand</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Your brand is the gut feeling a customer has about your business. We craft timeless visual identities, logo marks, and cohesive design systems that reflect your true real-world quality and command premium pricing.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#enquiry" className="btn-primary">
              Build Your Brand Identity
            </a>
            <Link to="/work" className="btn-dark">
              See Brand Case Studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">Complete Visual System</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-4">
              Everything Your Brand Needs to Stand Out
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We go far beyond standard Canva templates. We deliver cohesive, production-ready vector assets and precise typographic guidelines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Primary & Secondary Logos</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Vector logo files (SVG, EPS, PNG, PDF) designed for universal clarity on websites, social avatars, outdoor signage, and print stationery.
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Tailored Color Palettes</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Psychology-backed color tokens with exact HEX, RGB, and CMYK values engineered for digital contrast, accessibility, and luxury appeal.
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Brand Style Guidelines</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                A comprehensive PDF brand manual specifying typography hierarchy, logo clearance rules, iconography, and photography direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Enquiry */}
      <section id="enquiry" className="py-20 px-6 bg-porcelain border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <ProjectEnquiryForm defaultService="Brand Identity & Logo Design" />
        </div>
      </section>
    </div>
  );
};

export default BrandingServicePage;
