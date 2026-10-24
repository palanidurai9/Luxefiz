import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ProjectEnquiryForm } from '../components/ProjectEnquiryForm';

interface ServiceOverviewItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  link: string;
  icon: string;
}

const allServices: ServiceOverviewItem[] = [
  {
    id: 'web-dev',
    title: 'Custom Website Design & Development',
    badge: 'Core Technology',
    description: 'High-performance, bespoke business websites hand-coded with React, modern CSS, and semantic HTML. Engineered for sub-second speeds, flawless mobile responsiveness, and high conversion.',
    deliverables: [
      'Hand-crafted semantic HTML5 & React architecture',
      'Core Web Vitals sub-second mobile loading',
      'Integrated Schema markup & SEO foundation',
      'High-converting enquiry forms & WhatsApp triggers'
    ],
    link: '/services/website-development',
    icon: '⚡'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    badge: 'Organic Search Authority',
    description: 'Data-driven technical SEO and high-intent commercial content architecture that positions your brand at the top of organic search results across Coimbatore, Tamil Nadu, and India.',
    deliverables: [
      'Comprehensive technical crawl & speed audit',
      'Commercial keyword intent mapping',
      'JSON-LD rich snippet schema implementation',
      'Google Search Console setup & reporting'
    ],
    link: '/services/seo',
    icon: '🔍'
  },
  {
    id: 'gbp',
    title: 'Google Business Profile & Local Search',
    badge: 'Local Customer Footfall',
    description: 'Dominate Google Maps 3-pack searches and capture local phone calls and foot traffic for regional services, manufacturing units, retail stores, and healthcare practices.',
    deliverables: [
      'Category & sub-category ranking optimization',
      'Regional NAP directory citation consistency',
      'Automated ethical review acquisition workflows',
      'Geo-tagged imagery & localized product menus'
    ],
    link: '/services/google-business-profile-optimization',
    icon: '📍'
  },
  {
    id: 'digital-marketing',
    title: 'Performance Digital Marketing',
    badge: 'Customer Acquisition',
    description: 'Pragmatic paid advertising across Google Search and Meta (Instagram & Facebook). Designed for customer acquisition and measurable return on investment without fluff.',
    deliverables: [
      'High-intent Google Ads search campaigns',
      'Targeted Meta demographic & interest funnels',
      'Retargeting flows for past website visitors',
      'Conversion tracking with Google Analytics 4'
    ],
    link: '/services/digital-marketing',
    icon: '📈'
  },
  {
    id: 'branding',
    title: 'Brand Identity & Creative Design',
    badge: 'Visual Credibility',
    description: 'Timeless visual brand identities that elevate your perceived value. Vector logo design, balanced color palettes, editorial typography, and production-ready digital asset kits.',
    deliverables: [
      'Primary, secondary, and mark vector logos',
      'Harmonious digital & print color palettes',
      'Comprehensive brand typography manual',
      'Social media kits & brand asset packages'
    ],
    link: '/services/branding',
    icon: '✨'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Store Development',
    badge: 'Online Transactions',
    description: 'Fast, secure online stores built for Indian consumers. Seamless 1-click UPI checkout, Razorpay/PhonePe integration, automated courier sync, and intuitive product catalog management.',
    deliverables: [
      'High-speed mobile checkout optimization',
      'Razorpay, PhonePe, Cashfree, and UPI integration',
      'Automated logistics & courier API tracking',
      'Inventory, coupon, and cart abandonment flows'
    ],
    link: '/services/ecommerce-development',
    icon: '🛍️'
  },
  {
    id: 'saas',
    title: 'Custom SaaS & Web Applications',
    badge: 'Product Engineering',
    description: 'Full-stack software engineering for founders and growing companies. Scalable cloud architectures, custom internal portals, B2B workflow systems, and customer dashboards.',
    deliverables: [
      'Full-stack React, TypeScript & Node.js architecture',
      'Secure PostgreSQL & Prisma database schema',
      'Role-based access control (RBAC) & OAuth',
      'Automated CI/CD cloud deployment pipelines'
    ],
    link: '/services/saas-development',
    icon: '💻'
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Digital Services & Web Development Solutions | Luxefiz"
        description="Explore the complete digital growth ecosystem by Luxefiz: Custom Web Development, Technical SEO, Google Business Profile, Branding, E-commerce, and SaaS Engineering."
        canonicalUrl="https://www.luxefiz.com/services"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Marketing & Creative Technology Services",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Luxefiz",
              "url": "https://www.luxefiz.com"
            },
            "areaServed": ["Tamil Nadu", "Coimbatore", "Mannargudi", "India"]
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
              }
            ]
          }
        ]}
      />

      {/* Hero */}
      <section className="bg-obsidian text-white pt-32 pb-24 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="badge-pill badge-pill-dark mb-4">Complete Growth System</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            Integrated Digital Services <br className="hidden md:block" />
            <span className="text-signature-pink">Engineered for Sustainable Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            We don’t believe in isolated digital tactics. We build cohesive systems where custom web design, technical SEO, brand identity, and local discovery reinforce one another to drive real business value.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#services-list" className="btn-primary">
              Explore All Services
            </a>
            <Link to="/contact" className="btn-dark">
              Discuss Your Requirements &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section id="services-list" className="py-24 px-6 bg-porcelain">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="badge-pill badge-pill-purple mb-3">Service Matrix</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-obsidian mb-4">
              Everything Your Business Needs to Win Online
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Click into each service to view technical specifications, deliverables, and transparent pricing scopes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((svc) => (
              <div
                key={svc.id}
                className="editorial-card p-8 flex flex-col justify-between h-full bg-white group hover:border-luxefiz-purple/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {svc.icon}
                    </span>
                    <span className="badge-pill badge-pill-purple text-[11px] py-1 px-3">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-obsidian mb-3 group-hover:text-luxefiz-purple transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <div className="space-y-2 mb-8 border-t border-gray-100 pt-5">
                    <span className="text-xs uppercase font-bold text-gray-400 block mb-2">Key Deliverables</span>
                    {svc.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="text-signature-pink font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to={svc.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-luxefiz-purple hover:text-signature-pink transition-colors"
                  >
                    Explore Service Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Luxefiz Difference */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-pill badge-pill-purple mb-4">Why Luxefiz?</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-6">
                Premium Agency Standards, Practical Business Pricing
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Most business owners have been burned by digital agencies: inflated retainers, unresponsive account managers, and websites built on generic templates that look outdated before launch.
                </p>
                <p>
                  Luxefiz was founded on a simple promise: <strong>"Marketing with Class, Easy on Cash!"</strong> We combine modern engineering, disciplined brand strategy, and transparent project milestones so ambitious businesses get enterprise-class quality without the enterprise markup.
                </p>
                <div className="pt-2">
                  <Link to="/about" className="text-luxefiz-purple font-bold hover:underline">
                    Read Our Founder's Story &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="editorial-dark-card p-8 md:p-10">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Our Core Commitments</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-signature-pink text-obsidian font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span><strong>No Bloated Builders:</strong> We write hand-crafted, clean code tailored for fast loading.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-signature-pink text-obsidian font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span><strong>100% Code Ownership:</strong> You own your domain, code, and accounts completely.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-signature-pink text-obsidian font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span><strong>Direct Access:</strong> Speak directly with senior engineers and strategists, not salespeople.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Enquiry */}
      <section className="py-20 px-6 bg-porcelain border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <ProjectEnquiryForm />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;