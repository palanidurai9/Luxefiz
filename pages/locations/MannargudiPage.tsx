import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { ProjectEnquiryForm } from '../../components/ProjectEnquiryForm';

const MannargudiPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Website Development & Digital Agency in Mannargudi | Luxefiz Headquarters"
        description="Luxefiz is the premier web development and digital marketing company headquartered in Mannargudi, Tamil Nadu. Empowering local businesses with world-class digital websites."
        canonicalUrl="https://www.luxefiz.com/locations/mannargudi"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Luxefiz Headquarters",
            "url": "https://www.luxefiz.com",
            "telephone": "+916382839617",
            "email": "info@luxefiz.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mannargudi",
              "addressRegion": "Tamil Nadu",
              "postalCode": "614001",
              "addressCountry": "IN"
            },
            "areaServed": ["Mannargudi", "Thanjavur", "Tiruvarur", "Kumbakonam", "Tamil Nadu"]
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
                "name": "Mannargudi",
                "item": "https://www.luxefiz.com/locations/mannargudi"
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
            <span className="text-signature-pink font-semibold">Mannargudi Headquarters</span>
          </div>

          <span className="badge-pill badge-pill-dark mb-4">Verified Local Headquarters</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            World-Class Web Development & <br className="hidden md:block" />
            <span className="text-signature-pink">Digital Growth in Mannargudi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Luxefiz was born in Mannargudi with a mission: to give local businesses in the Delta region the exact same design quality, speed, and search visibility that metro corporations enjoy.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#enquiry" className="btn-primary">
              Connect With Our Mannargudi Team
            </a>
            <a href="tel:+916382839617" className="btn-dark">
              Call Direct: +91 63828 39617
            </a>
          </div>
        </div>
      </section>

      {/* Local Community Context */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-pill badge-pill-purple mb-4">Empowering Regional Enterprise</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-6">
                Bridging the Gap for Mannargudi Businesses
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  For years, retail shops, clinics, educational institutions, agro-businesses, and service providers in Mannargudi had to either settle for amateur static blogs or travel to Chennai to find capable web agencies.
                </p>
                <p>
                  Luxefiz provides high-end web development right here in Mannargudi. As a registered MSME (UDYAM-TN-25-0049904), we combine local trust and accessibility with modern engineering standards.
                </p>
              </div>
            </div>

            <div className="bg-porcelain p-8 rounded-3xl border border-gray-200 space-y-4">
              <h3 className="font-display font-bold text-xl text-obsidian">Mannargudi Business Verification</h3>
              <div className="space-y-2 text-xs text-gray-600">
                <p><strong>Entity Name:</strong> Luxefiz</p>
                <p><strong>Registration:</strong> Udyam MSME Registered (UDYAM-TN-25-0049904)</p>
                <p><strong>Primary City:</strong> Mannargudi, Tamil Nadu, PIN 614001</p>
                <p><strong>Direct Phone:</strong> +91 63828 39617</p>
                <p><strong>Official Email:</strong> info@luxefiz.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Enquiry */}
      <section id="enquiry" className="py-20 px-6 bg-porcelain border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <ProjectEnquiryForm defaultService="Website Design & Development" />
        </div>
      </section>
    </div>
  );
};

export default MannargudiPage;
