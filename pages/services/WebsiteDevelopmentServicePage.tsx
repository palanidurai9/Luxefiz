import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { ProjectEnquiryForm } from '../../components/ProjectEnquiryForm';

const WebsiteDevelopmentServicePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Custom Website Development Company in Tamil Nadu & Coimbatore | Luxefiz"
        description="High-performance business website development by Luxefiz. Built with custom React and modern web architecture for speed, search discovery, and genuine business enquiries."
        canonicalUrl="https://www.luxefiz.com/services/website-development"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Business Website Development",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Luxefiz",
              "url": "https://www.luxefiz.com"
            },
            "serviceType": "Web Development",
            "areaServed": ["Tamil Nadu", "Coimbatore", "Mannargudi", "Chennai", "India"],
            "description": "Custom coded business website development engineered for sub-second speeds, mobile excellence, and search engine discovery.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "25000",
              "description": "Transparent project tiers starting from ₹25,000 for verified businesses."
            }
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
                "name": "Website Development",
                "item": "https://www.luxefiz.com/services/website-development"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a custom business website cost in Tamil Nadu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At Luxefiz, professional business websites typically range between ₹25,000 to ₹75,000 depending on page count, technical features, and custom styling requirements. We provide fixed-scope proposals with no hidden monthly software fees."
                }
              },
              {
                "@type": "Question",
                "name": "Do you use pre-made WordPress templates or write custom code?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We prioritize hand-coded, modern architectures using React, Vite, and clean HTML5/CSS. This eliminates theme bloat, enhances security, and achieves superior Core Web Vitals scores."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the web development process take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most standard business websites launch in 2 to 4 weeks. Complex dynamic portals or customized multi-page integrations take between 4 to 6 weeks."
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
            <span className="text-signature-pink font-semibold">Website Development</span>
          </div>

          <span className="badge-pill badge-pill-dark mb-4">Core Technology Craft</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            High-Performance Websites <br className="hidden md:block" />
            <span className="text-signature-pink">Engineered for Business Enquiries</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Stop losing qualified clients to slow, bloated templates. We build bespoke, mobile-first websites with clean code, sub-second load times, and structured technical SEO that turns casual traffic into real customer conversations.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#enquiry" className="btn-primary">
              Request Project Proposal
            </a>
            <Link to="/work" className="btn-dark">
              View Verified Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Value Proposition */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">The Problem We Solve</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-4">
              Why Most Agency Websites Fail to Generate Growth
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In competitive commercial markets across Tamil Nadu, businesses often get stuck between cheap ₹5,000 WordPress templates that break within months, or bloated agency packages that charge lakhs without technical accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="editorial-card p-8">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-luxefiz-purple flex items-center justify-center font-bold text-2xl mb-6">
                ⚡
              </div>
              <h3 className="text-xl font-display font-bold text-obsidian mb-3">Sub-Second Speed</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Over 53% of mobile visitors abandon a website that takes longer than 3 seconds to load. We write lean, clean code that loads instantly even on regional 4G networks.
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-luxefiz-purple flex items-center justify-center font-bold text-2xl mb-6">
                🎯
              </div>
              <h3 className="text-xl font-display font-bold text-obsidian mb-3">Structured for Trust</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A visitor decides whether your business is credible in 50 milliseconds. We use confident editorial typography and clear value propositions that immediately command respect.
              </p>
            </div>

            <div className="editorial-card p-8">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-luxefiz-purple flex items-center justify-center font-bold text-2xl mb-6">
                🔍
              </div>
              <h3 className="text-xl font-display font-bold text-obsidian mb-3">Search Ready Day One</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                SEO isn't an expensive add-on. Proper Schema markup, meta tags, sitemaps, and heading structures are baked into the core source code before your site ever launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Breakdown */}
      <section className="py-20 px-6 bg-porcelain border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-pill badge-pill-purple mb-4">Complete Technical Scope</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-6">
                What’s Included in Every Luxefiz Website Build
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe in total transparency. You receive full ownership of your source code, domain configurations, and assets with zero ongoing vendor lock-in.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Bespoke UI/UX Design System',
                    desc: 'Custom-designed layouts adhering to your brand colors, typography, and industry positioning.'
                  },
                  {
                    title: 'Mobile-First Responsive Engineering',
                    desc: 'Pixel-perfect rendering across iPhones, Android devices, tablets, and large 4K desktop screens.'
                  },
                  {
                    title: 'Core Web Vitals Optimization',
                    desc: 'Targeting Google PageSpeed green scores with optimized images and lazy loading.'
                  },
                  {
                    title: 'Technical Schema & Search Architecture',
                    desc: 'JSON-LD structured data for Organization, LocalBusiness, and BreadcrumbList.'
                  },
                  {
                    title: 'High-Converting Enquiry Funnel',
                    desc: 'Accessible contact forms with instant WhatsApp handoff and click-to-call integrations.'
                  },
                  {
                    title: 'Analytics & Verification Setup',
                    desc: 'Google Search Console, Google Analytics 4, and XML sitemap submission included.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
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

            {/* Pricing Expectations Card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-card border border-gray-100">
              <span className="badge-pill badge-pill-purple mb-4">Market-Realistic Pricing</span>
              <h3 className="text-2xl font-display font-bold text-obsidian mb-3">
                Transparent Investment Tiers
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Based on verified Tamil Nadu & Coimbatore market standards. Fixed scope, milestone payments.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-obsidian">Starter Business Website</span>
                    <span className="font-display font-bold text-luxefiz-purple text-lg">₹25,000 – ₹40,000</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Up to 5 pages (Home, About, Services, Contact, Portfolio). Ideal for local trades, clinics, and emerging founders.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/50 border border-luxefiz-purple/20">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-obsidian">Growth Multi-Page System</span>
                    <span className="font-display font-bold text-luxefiz-purple text-lg">₹40,000 – ₹80,000</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    6 to 12 pages with dedicated service sub-routes, SEO keyword mapping, blog integration, and structured lead captures.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-obsidian">Custom Portal / E-commerce</span>
                    <span className="font-display font-bold text-luxefiz-purple text-lg">₹80,000 – ₹1,50,000+</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Advanced web applications, payment gateways, product catalogs, and customized client dashboards.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>⏱️ Delivery: 2 to 4 Weeks</span>
                <span>📋 100% Code Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">Predictable Execution</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-4">
              Our 4-Step Development Process
            </h2>
            <p className="text-gray-600">
              Clear milestones and open communication from initial discovery to final Google indexing.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="font-mono text-xs font-bold text-luxefiz-purple mb-2">01 / DISCOVERY</div>
              <h3 className="font-bold text-obsidian mb-2">Search & Goal Analysis</h3>
              <p className="text-xs text-gray-600">We analyze your buyer personas, target geography, and customer questions.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="font-mono text-xs font-bold text-luxefiz-purple mb-2">02 / STRUCTURE</div>
              <h3 className="font-bold text-obsidian mb-2">Architecture Blueprint</h3>
              <p className="text-xs text-gray-600">We organize your content layout, heading hierarchy, and conversion funnels.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="font-mono text-xs font-bold text-luxefiz-purple mb-2">03 / CODE</div>
              <h3 className="font-bold text-obsidian mb-2">Engineering & Styling</h3>
              <p className="text-xs text-gray-600">We write clean, semantic code with responsive styling and fluid typography.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="font-mono text-xs font-bold text-luxefiz-purple mb-2">04 / LAUNCH</div>
              <h3 className="font-bold text-obsidian mb-2">Validation & Indexing</h3>
              <p className="text-xs text-gray-600">We test Core Web Vitals, submit sitemaps to Google, and train your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Enquiry Section */}
      <section id="enquiry" className="py-20 px-6 bg-porcelain border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <ProjectEnquiryForm defaultService="Website Design & Development" />
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopmentServicePage;
