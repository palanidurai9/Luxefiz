import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ProjectEnquiryForm } from '../components/ProjectEnquiryForm';
import { StarIcon } from '../components/icons/StarIcon';

interface ServiceCardProps {
  title: string;
  badge: string;
  description: string;
  path: string;
  icon: string;
}

const servicesOverview: ServiceCardProps[] = [
  {
    title: 'Website Design & Development',
    badge: 'Core Architecture',
    description: 'Custom React & semantic HTML5 business websites. Sub-second mobile speeds, clean code, and zero slow template bloat.',
    path: '/services/website-development',
    icon: '⚡'
  },
  {
    title: 'Search Engine Optimization (SEO)',
    badge: 'Organic Discovery',
    description: 'Technical SEO, rich Schema markup, and commercial keyword intent mapping to capture active regional buyers.',
    path: '/services/seo',
    icon: '🔍'
  },
  {
    title: 'Google Business Profile Optimization',
    badge: 'Local Foot Traffic',
    description: 'Capture local calls, driving directions, and Google Maps 3-pack searches for local businesses across Tamil Nadu.',
    path: '/services/google-business-profile-optimization',
    icon: '📍'
  },
  {
    title: 'Digital Marketing & Paid Ads',
    badge: 'Targeted Traffic',
    description: 'Pragmatic Google Search and Meta advertising campaigns designed to generate qualified customer inquiries without wasted ad spend.',
    path: '/services/digital-marketing',
    icon: '📈'
  },
  {
    title: 'Branding & Creative Design',
    badge: 'Visual Identity',
    description: 'Distinguished vector logos, curated color palettes, and typographic systems that convey established authority and trust.',
    path: '/services/branding',
    icon: '✨'
  },
  {
    title: 'E-commerce Store Development',
    badge: 'Mobile Checkout',
    description: 'High-converting online storefronts with instant UPI payment gateways, automated logistics sync, and mobile-first checkouts.',
    path: '/services/ecommerce-development',
    icon: '🛍️'
  },
  {
    title: 'Custom SaaS & Web Applications',
    badge: 'Product Engineering',
    description: 'Scalable cloud applications, founder MVPs, and internal workflow dashboards built on modern TypeScript & Node.js.',
    path: '/services/saas-development',
    icon: '💻'
  }
];

const selectedProjects = [
  {
    title: 'SVET Education Consultancy',
    industry: 'Education & Overseas Career',
    challenge: 'Generic online presence obscured trust for parents and made complex admissions difficult to navigate.',
    solution: 'Built a structured, responsive multi-page educational portal with dedicated student/parent paths and direct WhatsApp inquiry funnels.',
    outcome: 'Increased qualified student admissions enquiries by 40% in the first quarter post-launch.',
    imageUrl: '/image/SVET.png',
    link: '/work'
  },
  {
    title: 'PK Das Hospital & University',
    industry: 'Healthcare & Higher Education',
    challenge: 'Sluggish performance on mobile networks and disorganized departmental layouts frustrated prospective students and patients.',
    solution: 'Engineered an accessibility-focused portal with intuitive doctor schedules and clean course syllabi optimized for 3G/4G networks.',
    outcome: 'Reduced bounce rate by 65% and significantly improved mobile delivery across regional visitors.',
    imageUrl: '/image/pkdas.png',
    link: '/work'
  },
  {
    title: 'Skrsta Fashion',
    industry: 'E-commerce & Retail Apparel',
    challenge: 'Relied exclusively on Instagram DMs, creating customer service bottlenecks and manual payment tracking errors.',
    solution: 'Launched a clean, visual-first e-commerce experience with seamless 1-click UPI checkout and direct catalog management.',
    outcome: 'Successfully handled 500+ orders during launch week and built an owned digital asset independent of social algorithms.',
    imageUrl: '/image/skrsta.png',
    link: '/work'
  }
];

const faqList = [
  {
    question: 'How much does a business website cost?',
    answer: 'At Luxefiz, custom business websites typically range between ₹25,000 to ₹75,000 depending on page count, technical features, and design requirements. Complex e-commerce stores or dynamic portals range from ₹80,000 to ₹1,50,000+. We provide fixed-scope quotes with zero hidden monthly builder fees.'
  },
  {
    question: 'How long does website development take?',
    answer: 'Standard professional business websites launch within 2 to 4 weeks. Larger dynamic portals, e-commerce stores, or custom SaaS web apps take between 4 to 6 weeks. We prioritize quality and rigorous cross-device testing over rushing.'
  },
  {
    question: 'Can you redesign an existing, outdated website?',
    answer: 'Yes. We frequently help businesses upgrade slow, outdated WordPress or template-based websites to modern, fast-loading React platforms. We carefully audit existing URLs and set up 301 redirects to preserve any existing search engine rankings.'
  },
  {
    question: 'Is SEO included in website development?',
    answer: 'Yes! Technical SEO is built into our core engineering. Every website we build includes semantic HTML5 heading structures, Schema.org JSON-LD structured data, XML sitemaps, robots.txt, fast Core Web Vitals optimization, and Google Search Console indexing.'
  },
  {
    question: 'Do you work with small businesses and startups?',
    answer: 'Absolutely. A substantial portion of our clients are ambitious small business owners, local clinics, manufacturing suppliers, and early-stage founders. Our core brand tagline is "Marketing with Class, Easy on Cash!"'
  },
  {
    question: 'Can you help businesses outside Coimbatore and Mannargudi?',
    answer: 'Yes. While we are proudly headquartered in Mannargudi and prioritize Coimbatore as a major industrial target, we actively serve clients across Chennai, Madurai, Trichy, Salem, and pan-India through seamless digital collaboration and milestone reviews.'
  },
  {
    question: 'Do you build e-commerce websites with Indian payment gateways?',
    answer: 'Yes. We integrate native Indian payment gateways including Razorpay, PhonePe, and Cashfree with support for UPI (Google Pay, PhonePe, Paytm), credit/debit cards, and NetBanking, complete with automated shipping notifications.'
  },
  {
    question: 'How do we get started?',
    answer: 'Simply fill out our project enquiry form below or message us directly on WhatsApp (+91 63828 39617). We review your requirements and schedule a brief 15-minute scoping call to provide a transparent proposal.'
  }
];

const HomePage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Luxefiz — Premium Website Development & Digital Growth Studio"
        description="Luxefiz builds high-performance business websites, technical SEO architectures, and modern digital brand experiences for ambitious businesses across Tamil Nadu and India."
        canonicalUrl="https://www.luxefiz.com/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Luxefiz",
            "url": "https://www.luxefiz.com",
            "description": "Premium website development and digital growth system for ambitious businesses.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.luxefiz.com/services?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Luxefiz",
            "url": "https://www.luxefiz.com",
            "telephone": "+916382839617",
            "email": "info@luxefiz.com",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mannargudi",
              "addressRegion": "Tamil Nadu",
              "postalCode": "614001",
              "addressCountry": "IN"
            },
            "areaServed": [
              { "@type": "City", "name": "Coimbatore" },
              { "@type": "City", "name": "Mannargudi" },
              { "@type": "City", "name": "Chennai" },
              { "@type": "City", "name": "Madurai" },
              { "@type": "City", "name": "Trichy" },
              { "@type": "City", "name": "Salem" },
              { "@type": "Country", "name": "India" }
            ]
          }
        ]}
      />

      {/* SECTION B: HERO SECTION */}
      <section className="relative bg-obsidian text-white pt-32 pb-24 lg:pt-40 lg:pb-36 px-6 overflow-hidden border-b border-white/10">
        {/* Subtle Editorial Ambient Backdrops */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-luxefiz-purple/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-signature-pink/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-signature-pink backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-signature-pink animate-pulse"></span>
                "Marketing with Class, Easy on Cash!"
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black leading-[1.08] tracking-tight">
                Your Business Deserves a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-signature-pink">
                  Better Digital Presence.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-body font-normal">
                Luxefiz builds high-performance websites and strategic digital experiences that help businesses earn trust, get discovered, and generate meaningful enquiries.
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  Build Your Website
                </Link>
                <Link to="/work" className="btn-dark text-center">
                  Explore Our Work &rarr;
                </Link>
              </div>

              {/* Trust Statement */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Sub-Second Loading Speed
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Technical SEO Baked In
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> 100% Code Ownership
                </span>
              </div>
            </div>

            {/* Right Visual Composition: Genuine Project Preview Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="subtle-gradient-border shadow-dark">
                  <div className="bg-midnight-plum p-6 rounded-2xl border border-white/10">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                      </div>
                      <span className="font-mono text-[11px] text-gray-400">luxefiz-growth-engine.ts</span>
                      <span className="badge-pill badge-pill-dark text-[10px] py-0.5 px-2">Verified</span>
                    </div>

                    <div className="pt-5 space-y-4">
                      <div className="rounded-xl overflow-hidden border border-white/10 aspect-[16/10] bg-black/40 relative group">
                        <img
                          src="/image/hero-mockup.png"
                          alt="Luxefiz Digital Architecture Interface"
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/image/SVET.png';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs text-white">
                          <span className="font-bold">SVET Educational Portal</span>
                          <span className="text-signature-pink font-mono text-[11px]">+40% Inquiries</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <div className="text-[11px] text-gray-400 font-mono">Mobile Performance</div>
                          <div className="text-lg font-bold text-emerald-400 font-display">98 / 100</div>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <div className="text-[11px] text-gray-400 font-mono">Organic Indexing</div>
                          <div className="text-lg font-bold text-signature-pink font-display">100% Coded</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION C: SERVICES OVERVIEW SYSTEM */}
      <section className="py-24 px-6 bg-porcelain">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-obsidian mb-4">
              Integrated Services Designed to Work as One
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              A pretty website without search visibility is invisible. A visible website with poor branding fails to convert. We unite design, code, and search into a unified growth engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesOverview.map((service) => (
              <div
                key={service.path}
                className="editorial-card p-8 bg-white flex flex-col justify-between h-full group hover:border-luxefiz-purple/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {service.icon}
                    </span>
                    <span className="badge-pill badge-pill-purple text-[10px] py-1 px-2.5">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-obsidian mb-3 group-hover:text-luxefiz-purple transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-luxefiz-purple group-hover:text-signature-pink transition-colors gap-1.5"
                  >
                    View Technical Scope &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/services" className="btn-secondary">
              Explore Complete Service Directory
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION D: VALUE PROPOSITION */}
      <section className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-pill badge-pill-purple">The Luxefiz Difference</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-obsidian leading-tight">
                Craftsmanship Meets <br />
                Commercial Reality
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Most agencies either charge exorbitant enterprise fees or assemble cheap drag-and-drop templates that crawl to a halt. Luxefiz was founded on a different standard:
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Bespoke Engineering, Zero Theme Bloat',
                    desc: 'We write clean, semantic code that delivers sub-second load times and stays secure for years.'
                  },
                  {
                    title: 'Search-Ready Foundations from Day One',
                    desc: 'Technical SEO and JSON-LD Schema markup are built into the source code, not charged as an afterthought.'
                  },
                  {
                    title: 'Direct Access to Senior Developers',
                    desc: 'Speak directly with technical craftspeople who make decisions, without intermediate account manager delays.'
                  },
                  {
                    title: 'Transparent Milestone Pricing',
                    desc: 'Clear, fixed-scope proposals with milestone payments. You own 100% of your code and domain assets.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-luxefiz-purple text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-obsidian">{item.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="editorial-dark-card p-8 md:p-12 space-y-6">
                <span className="badge-pill badge-pill-dark">Brand Ethos</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                  "Marketing with Class, Easy on Cash!"
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We believe premium digital quality should not be restricted to venture-backed unicorns. Ambitious small and medium enterprises in Coimbatore, Mannargudi, and across Tamil Nadu deserve digital platforms that look and feel world-class.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 space-y-2">
                  <div className="font-bold text-signature-pink">Our Quality Standard:</div>
                  <p>No unverified ranking claims. No synthetic AI layout gimmicks. Only verified, durable engineering designed to convert prospective customers.</p>
                </div>
                <div className="pt-2">
                  <Link to="/about" className="btn-primary text-xs">
                    Learn More About Our Journey &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: SELECTED WORK */}
      <section className="py-24 px-6 bg-porcelain">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="badge-pill badge-pill-purple mb-3">Case Studies</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-obsidian">
                Real Projects. Real Business Results.
              </h2>
            </div>
            <Link to="/work" className="btn-secondary whitespace-nowrap">
              View All Case Studies &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedProjects.map((project) => (
              <div
                key={project.title}
                className="editorial-card overflow-hidden bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative group">
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} website preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-pill badge-pill-dark text-[10px]">
                        {project.industry}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-display font-bold text-lg text-obsidian">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {project.solution}
                    </p>
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-900 font-semibold">
                      Outcome: {project.outcome}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/work"
                    className="text-xs font-bold text-luxefiz-purple hover:underline"
                  >
                    Read Full Case Study &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION F: HOW WE WORK (4-STEP PROCESS) */}
      <section className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">Proven Process</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-obsidian mb-4">
              A Predictable 4-Step Journey
            </h2>
            <p className="text-gray-600 text-sm">
              We eliminate guesswork with structured milestones and transparent reviews.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'Research your commercial goals, audience questions, and local competition in Coimbatore and Tamil Nadu.'
              },
              {
                step: '02',
                title: 'Strategize',
                desc: 'Blueprint the site architecture, heading hierarchies, conversion funnels, and technical schema.'
              },
              {
                step: '03',
                title: 'Design & Build',
                desc: 'Handcraft the UI with our Luxe design system and code clean, fast React components.'
              },
              {
                step: '04',
                title: 'Launch & Improve',
                desc: 'Pre-flight testing, Google Search Console indexing, handover, and ongoing support.'
              }
            ].map((st) => (
              <div key={st.step} className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-luxefiz-purple/30 transition-all">
                <div className="font-mono text-2xl font-black text-luxefiz-purple mb-3">{st.step}</div>
                <h3 className="font-display font-bold text-base text-obsidian mb-2">{st.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/process" className="text-xs font-bold text-luxefiz-purple hover:underline">
              View Detailed Deliverables & Decision Points &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION G: INDUSTRIES SERVED */}
      <section className="py-20 px-6 bg-porcelain border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">Domain Focus</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-3">
              Industries We Power
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Only industries where we possess verifiable delivery experience and deep workflow understanding.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Industrial & Pumps', icon: '🏭' },
              { label: 'Healthcare & Clinics', icon: '🏥' },
              { label: 'Retail & E-commerce', icon: '🛍️' },
              { label: 'Education & Academics', icon: '🎓' },
              { label: 'Tech & SaaS Startups', icon: '💻' },
              { label: 'Local Trades & Services', icon: '🔧' }
            ].map((ind) => (
              <div
                key={ind.label}
                className="p-5 rounded-2xl bg-white border border-gray-100 text-center shadow-subtle hover:border-luxefiz-purple/40 transition-all"
              >
                <div className="text-2xl mb-2">{ind.icon}</div>
                <div className="text-xs font-bold text-obsidian font-display">{ind.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION H: SEARCH AND VISIBILITY SECTION */}
      <section className="py-24 px-6 bg-obsidian text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-pill badge-pill-dark">Search Architecture</span>
              <h2 className="text-3xl md:text-5xl font-display font-black leading-tight">
                How Modern Web Engineering Drives Search Discovery
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Google and AI search engines no longer evaluate websites solely by keyword frequency. They assess Core Web Vitals, semantic schema structures, mobile usability, and topical depth.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-signature-pink mb-1">JSON-LD Schemas</div>
                  <p className="text-xs text-gray-400">Machine-readable data for rich snippets and AI search citations.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-signature-pink mb-1">Sub-Second Load Times</div>
                  <p className="text-xs text-gray-400">Immediate paint times that prevent visitor bounce and satisfy Google ranking criteria.</p>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/services/seo" className="btn-primary">
                  Explore Technical SEO Architecture &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-midnight-plum border border-white/10 space-y-4">
                <h3 className="font-display font-bold text-lg text-white">Target Regional Hubs</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  We build search presence tailored to genuine business markets:
                </p>
                <div className="space-y-3 pt-2">
                  <Link
                    to="/locations/coimbatore"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs transition"
                  >
                    <span>Coimbatore Commercial Target</span>
                    <span className="text-signature-pink font-bold">&rarr;</span>
                  </Link>
                  <Link
                    to="/locations/mannargudi"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs transition"
                  >
                    <span>Mannargudi Headquarters (MSME Verified)</span>
                    <span className="text-signature-pink font-bold">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION I: TESTIMONIALS & TRUST */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-3">Client Feedback</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-2">
              Feedback from Real Business Engagements
            </h2>
            <div className="inline-flex items-center gap-1.5 text-xs text-gray-500 pt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span>Verified 5.0 Rating</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="editorial-card p-8 bg-gray-50 flex flex-col justify-between">
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "Working with Luxefiz was smooth and stress-free. They handled everything from design to SEO perfectly. Our website now looks professional and ranks well on Google. Excellent service and great support!"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">V</div>
                <div>
                  <h4 className="font-bold text-xs text-obsidian">Vigneshwaran N</h4>
                  <p className="text-[11px] text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>

            <div className="editorial-card p-8 bg-gray-50 flex flex-col justify-between">
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "Luxefiz did an amazing job designing our website! The team understood our brand perfectly and delivered a clean, modern, and responsive design. Their approach to digital marketing and SEO also helped us get more visibility online."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-sm">S</div>
                <div>
                  <h4 className="font-bold text-xs text-obsidian">Skrrsta</h4>
                  <p className="text-[11px] text-gray-500">Fashion Brand Founder</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/testimonials" className="text-xs font-bold text-luxefiz-purple hover:underline">
              Read All Verified Testimonials &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION J: FAQS */}
      <section className="py-24 px-6 bg-porcelain border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="badge-pill badge-pill-purple mb-3">Frequently Asked Questions</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian mb-3">
              Clear Answers Before You Start
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Honest responses to genuine questions business owners ask before partnering with us.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-shadow shadow-subtle"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-display font-bold text-sm md:text-base text-obsidian">
                    {faq.question}
                  </span>
                  <span className="text-luxefiz-purple font-bold text-lg flex-shrink-0">
                    {openFaqIndex === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION K: FINAL CTA & PROJECT ENQUIRY */}
      <section id="contact-section" className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-pill badge-pill-purple mb-4">Start Your Project</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-obsidian mb-4 leading-tight">
              Let's Build a Digital Presence That <br />
              <span className="text-signature-pink">Moves Your Business Forward.</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Share your project goals below. We provide transparent estimates within 4 business hours.
            </p>
          </div>

          <ProjectEnquiryForm />
        </div>
      </section>
    </div>
  );
};

export default HomePage;