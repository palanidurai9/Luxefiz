import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { ProjectEnquiryForm } from '../../components/ProjectEnquiryForm';

const EcommerceServicePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="E-commerce Website Development in Tamil Nadu & India | Luxefiz"
        description="High-converting online store development by Luxefiz. Seamless UPI and Razorpay payment integration, fast mobile checkout, and inventory workflows for D2C brands."
        canonicalUrl="https://www.luxefiz.com/services/ecommerce-development"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "E-Commerce Website Development",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Luxefiz",
              "url": "https://www.luxefiz.com"
            },
            "serviceType": "E-Commerce Development",
            "areaServed": ["Tamil Nadu", "Coimbatore", "India"],
            "description": "Full-stack e-commerce store design and development with integrated Indian payment gateways and mobile-first checkout funnels."
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
                "name": "E-commerce Development",
                "item": "https://www.luxefiz.com/services/ecommerce-development"
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
            <span className="text-signature-pink font-semibold">E-Commerce Development</span>
          </div>

          <span className="badge-pill badge-pill-dark mb-4">D2C & Retail Acceleration</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            E-Commerce Stores Engineered for <br className="hidden md:block" />
            <span className="text-signature-pink">Frictionless Mobile Checkout</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Turn your social media followers into direct e-commerce revenue. We build beautiful, fast-loading online stores integrated with instant UPI payments, automated shipping calculators, and catalog management.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#enquiry" className="btn-primary">
              Build Your Online Store
            </a>
            <Link to="/work" className="btn-dark">
              See Retail Case Studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Proof & Capabilities */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">Engineered for Transactions</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-4">
              Everything Needed to Sell Seamlessly in India
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From local Coimbatore manufacturers launching direct-to-consumer portals to fashion brands handling thousands of orders, we ensure rock-solid payment stability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">💳</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Instant UPI & Gateways</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Native integration with Razorpay, PhonePe, Cashfree, and Stripe supporting GPay, PhonePe UPI, Cards, NetBanking, and COD verification.
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">1-Click Mobile Checkout</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Over 85% of Indian e-commerce orders happen on mobile. We remove redundant checkout form fields to slash cart abandonment rates.
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Logistics & Courier Sync</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Seamless API connections with Shiprocket, Delhivery, or regional courier partners for automated AWB generation and tracking updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Enquiry */}
      <section id="enquiry" className="py-20 px-6 bg-porcelain border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <ProjectEnquiryForm defaultService="E-commerce Store Development" />
        </div>
      </section>
    </div>
  );
};

export default EcommerceServicePage;
