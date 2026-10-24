import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { ProjectEnquiryForm } from '../../components/ProjectEnquiryForm';

const SaasDevelopmentServicePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Custom SaaS & Web Application Development India | Luxefiz"
        description="Full-stack SaaS and custom web application engineering by Luxefiz. We build scalable MVPs, client dashboards, and cloud applications using modern React and Node.js."
        canonicalUrl="https://www.luxefiz.com/services/saas-development"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom SaaS & Web Application Development",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Luxefiz",
              "url": "https://www.luxefiz.com"
            },
            "serviceType": "Software Development",
            "areaServed": ["India", "Global"],
            "description": "Full-cycle custom SaaS development, cloud architectures, REST APIs, and responsive web portals for startup founders."
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
                "name": "SaaS Development",
                "item": "https://www.luxefiz.com/services/saas-development"
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
            <span className="text-signature-pink font-semibold">Custom SaaS & Web Apps</span>
          </div>

          <span className="badge-pill badge-pill-dark mb-4">Product Engineering</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            Turn Your Software Vision Into a <br className="hidden md:block" />
            <span className="text-signature-pink">Scalable, High-Performance MVP</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            From B2B workflow portals to custom customer dashboards, we engineer modern cloud applications with clean TypeScript, robust API backends, and elegant user interfaces designed to scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#enquiry" className="btn-primary">
              Discuss Your Application
            </a>
            <Link to="/work" className="btn-dark">
              See SaaS Case Studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Architecture & Engineering Stack */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">Modern Cloud Stack</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-4">
              Built on Modern, Maintainable Technologies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reject brittle legacy architectures. We build with modern TypeScript, modular component design, and secure cloud databases so your engineering team can easily maintain and expand the product.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Frontend Architecture</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                React, Next.js, and TypeScript with fluid component systems, accessible keyboard navigation, and optimistic UI updates for native app smoothness.
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Backend & Database</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Node.js, Express/Hono, PostgreSQL with Prisma ORM, serverless API functions, and secure role-based access control (RBAC).
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="font-display font-bold text-lg text-obsidian mb-2">Security & Scalability</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                JWT/OAuth session security, rate limiting, SSL encryption, environment isolation, and automated CI/CD deployment pipelines on Vercel or AWS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Enquiry */}
      <section id="enquiry" className="py-20 px-6 bg-porcelain border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <ProjectEnquiryForm defaultService="Custom SaaS & Web Application" />
        </div>
      </section>
    </div>
  );
};

export default SaasDevelopmentServicePage;
