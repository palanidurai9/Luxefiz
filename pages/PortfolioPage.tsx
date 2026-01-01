import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

// Data for Projects with REQUIRED fields: Industry, Problem, Built, Outcome
const projects = [
  {
    title: 'SVET Education Consultancy',
    industry: 'Education & Overseas Career',
    problem: 'They struggled with a generic online presence that didn\'t communicate trust to parents or clarify their complex admission processes.',
    solution: 'We built a structured, multi-page educational portal with clear user journeys for students vs parents. Integrated whatsapp enquiry funnels and clear trust signals.',
    outcome: 'Increased student enquiries by 40% in first 3 months. Established digital authority in the study-abroad niche.',
    imageUrl: 'image/SVET.png', // Ensure this matches actual assets
  },
  {
    title: 'PK Das Hospital / University',
    industry: 'Healthcare & Institutional Education',
    problem: 'Their previous site was cluttered, slow, and impossible to navigate on mobile devices, leading to frustrated patients and students.',
    solution: 'A high-performance, accessibility-focused institutional website. We optimized the information architecture to make finding doctors and courses instant.',
    outcome: 'Reduced bounce rate by 65%. fast loading on 3G networks ensuring accessibility across rural Tamil Nadu.',
    imageUrl: 'image/pkdas.png',
  },
  {
    title: 'Skrsta Fashion',
    industry: 'E-commerce & Retail',
    problem: 'The brand needed to transition from Instagram-only sales to a dedicated platform without losing their visual appeal.',
    solution: 'A clean, visual-first e-commerce experience that puts the product front and center. Seamless checkout flow and brand-aligned aesthetics.',
    outcome: 'Successfully handled 500+ orders in launch week. solidified brand identity beyond social media.',
    imageUrl: 'image/skrsta.png',
  },
  {
    title: 'SPL Healthcare SaaS',
    industry: 'B2B Software / Healthcare',
    problem: 'Complex software capabilities were burying their value proposition. Potential clients couldn\'t understand what the software actually did.',
    solution: 'We simplified the messaging and built a B2B lead-gen website that breaks down complex features into simple benefits.',
    outcome: 'Clearer sales conversations and shortened sales cycle due to better informed leads.',
    imageUrl: 'image/SPLSaas.png',
  }
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <SEO
        title="Portfolio – Business Website Development Projects by Luxefiz"
        description="See how Luxefiz has helped businesses in Tamil Nadu grow with professional website development. Case studies of real results."
        canonicalUrl="https://www.luxefiz.com/portfolio"
      />

      {/* Header */}
      <section className="bg-brand-charcoal text-white py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-brand-charcoal to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-playfair mb-6">
            Selected Work & Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We don't just design pages; we solve business problems. <br />
            Here is how we have helped other companies achieve their digital goals.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Project Image */}
                <div className="lg:w-1/2 w-full">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <div className="aspect-[4/3] bg-gray-200 relative group">
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} Website Preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400 font-bold bg-gray-100">Image Preview</div>';
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 w-full space-y-8">
                  <div>
                    <span className="text-brand-pink font-bold uppercase tracking-wider text-sm">{project.industry}</span>
                    <h2 className="text-3xl font-playfair font-bold text-brand-charcoal mt-2 mb-4">{project.title}</h2>
                    <div className="h-1 w-20 bg-brand-purple rounded-full"></div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">The Business Problem</h3>
                      <p className="text-gray-600 leading-relaxed">{project.problem}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border-l-4 border-blue-400 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">What We Built</h3>
                      <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border-l-4 border-green-400 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">The Outcome</h3>
                      <p className="text-gray-600 leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-playfair font-bold text-brand-charcoal mb-6">Want Results Like These?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Each project started with a simple conversation. Let's discuss where your business currently is and where you want it to be.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-brand-purple text-white font-bold rounded-full hover:bg-brand-charcoal transition-all duration-300 shadow-lg"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;