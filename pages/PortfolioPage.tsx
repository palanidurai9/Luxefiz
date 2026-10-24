import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ProjectEnquiryForm } from '../components/ProjectEnquiryForm';

interface Project {
  title: string;
  tagline: string;
  industry: string;
  status: 'Live Client Platform' | 'Client Web Platform' | 'Custom Client Build';
  problem: string;
  solution: string;
  outcome: string;
  imageUrl: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: 'Leakzen Waterproofing',
    tagline: 'Tamil Nadu’s Most Trusted Waterproofing Experts Platform',
    industry: 'Waterproofing & Construction Maintenance',
    status: 'Live Client Platform',
    problem: 'Homeowners and commercial property managers in Coimbatore and Tamil Nadu dealing with roof leaks and wall dampness needed an immediate, high-trust way to book inspections and understand advanced technical treatments like PU grouting.',
    solution: 'Designed and engineered a high-conversion, speed-optimized website with thermal scanner inspection badges, 10-year warranty proof, and direct 1-tap "Book Your Free Inspection" & WhatsApp booking triggers.',
    outcome: 'Significantly streamlined qualified inspection bookings across Coimbatore and regional Tamil Nadu, positioning Leakzen as the undisputed benchmark in permanent leak-free solutions.',
    imageUrl: '/image/leakzen.png',
    tech: ['React', 'High-Speed Mobile UX', 'Local SEO Architecture', 'Instant WhatsApp Funnel']
  },
  {
    title: 'Urban Fix Services Pte. Ltd.',
    tagline: 'Singapore’s Trusted Building Maintenance & Facilities Support Partner',
    industry: 'Commercial Facilities Management & Engineering',
    status: 'Live Client Platform',
    problem: 'Commercial facility managers in Singapore require rigorous compliance, verified safety standards (bizSAFE 3), and comprehensive capability proofs before awarding building maintenance and M&E service contracts.',
    solution: 'Engineered an authoritative, corporate digital portal showcasing bizSAFE 3 certification, structured service categories (M&E, plumbing, carpentry, water tank cleaning), and streamlined "Request Site Assessment" workflows.',
    outcome: 'Elevated Urban Fix’s corporate authority in Singapore’s competitive facility support market, providing international property managers with an instant, credible verification and contact gateway.',
    imageUrl: '/image/urbanfix.png',
    tech: ['Corporate B2B Architecture', 'bizSAFE 3 Layout', 'Enterprise Inquiry Funnel', 'High-Performance Cloud']
  },
  {
    title: "Rathna's Boutique",
    tagline: 'Handcrafted Women’s Fashion & Ethnic Wear Boutique in Mannargudi',
    industry: 'Women’s Fashion & Ethnic Retail',
    status: 'Live Client Platform',
    problem: 'A premier boutique in Mannargudi needed to expand beyond local foot traffic and manual Instagram DMs into an organized digital catalog that lets customers browse new festive arrivals and order with custom sizing guidance.',
    solution: 'Crafted an exquisite soft-luxury visual storefront with festive lookbook showcases, curated collection categories (ethnic wear, kurtis, silk sarees), and frictionless "Order on WhatsApp" conversational commerce triggers.',
    outcome: 'Successfully digitized Mannargudi’s luxury boutique shopping experience, driving direct WhatsApp orders from customers across the Delta region and beyond.',
    imageUrl: '/image/rathnas.png',
    tech: ['Luxury Retail UI/UX', 'Conversational Commerce', 'WhatsApp Ordering System', 'Mobile Lookbook']
  }
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Selected Work & Case Studies | Luxefiz"
        description="Explore real website development and digital strategy case studies by Luxefiz. Verified business results for education, healthcare, e-commerce, and SaaS."
        canonicalUrl="https://www.luxefiz.com/work"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Selected Work & Case Studies by Luxefiz",
            "url": "https://www.luxefiz.com/work",
            "description": "Case studies of verified business website and technology solutions built by Luxefiz."
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
                "name": "Work",
                "item": "https://www.luxefiz.com/work"
              }
            ]
          }
        ]}
      />

      {/* Hero */}
      <section className="bg-obsidian text-white pt-32 pb-24 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="badge-pill badge-pill-dark mb-4">Proof of Craft</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            Selected Work & <br className="hidden md:block" />
            <span className="text-signature-pink">Verifiable Business Results</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            We don't showcase generic placeholder templates. Here are real digital platforms we engineered to solve operational and growth challenges for real businesses.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects-list" className="btn-primary">
              View Case Studies
            </a>
            <Link to="/contact" className="btn-dark">
              Start Your Project &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Feed */}
      <section id="projects-list" className="py-24 px-6 bg-porcelain">
        <div className="container mx-auto max-w-6xl space-y-24">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="editorial-card p-6 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Project Image */}
              <div className="lg:col-span-6 overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 relative group aspect-[4/3]">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} preview screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full text-gray-400 font-bold bg-gray-100 text-sm">${project.title} Preview</div>`;
                    }
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="badge-pill badge-pill-dark text-xs">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Story */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-luxefiz-purple block mb-2 font-display">
                    {project.industry}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-obsidian mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm font-semibold text-gray-500">
                    {project.tagline}
                  </p>
                </div>

                <div className="space-y-4 text-xs md:text-sm">
                  <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
                    <span className="font-bold text-rose-900 block mb-1">The Challenge:</span>
                    <p className="text-gray-700 leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100">
                    <span className="font-bold text-luxefiz-purple block mb-1">What We Engineered:</span>
                    <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                    <span className="font-bold text-emerald-900 block mb-1">Verifiable Outcome:</span>
                    <p className="text-gray-700 leading-relaxed">{project.outcome}</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Embedded Enquiry */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <ProjectEnquiryForm defaultService="Website Design & Development" />
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;