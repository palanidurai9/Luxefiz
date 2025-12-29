import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Icon Components for Cleanliness
const CheckIcon = () => (
  <svg className="w-5 h-5 text-brand-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
  </svg>
);

// Data for Projects
const projects = [
  {
    title: 'SVET Education Consultancy',
    description: 'Professional educational website designed to build trust with students and parents while streamlining the enquiry process.',
    imageUrl: 'image/SVET.png', // Assuming path from public/ or assets
    focus: ['Website Development', 'Trust Building', 'Enquiry Generation'],
    tags: ['Google Presence Support', 'Mobile-first design']
  },
  {
    title: 'PK Das Hospital / University',
    description: 'Structured institutional platform designed for clarity, ensuring easy access to information for students and faculty.',
    imageUrl: 'image/pkdas.png',
    focus: ['Large Scale Structure', 'Information Clarity', 'Accessibility'],
    tags: ['Performance Optimization']
  },
  {
    title: 'Skrsta Fashion',
    description: 'Brand-focused commerce experience designed to highlight product quality and simplify the purchasing journey.',
    imageUrl: 'image/skrsta.png',
    focus: ['Brand Identity', 'Conversion Focus', 'Visual Clarity'],
    tags: ['Mobile-first design']
  },
  {
    title: 'SPL Healthcare SaaS',
    description: 'Comprehensive management platform engineered for operational efficiency and clear user workflows.',
    imageUrl: 'image/SPLSaas.png',
    focus: ['SaaS Design', 'Operational Efficiency', 'User Workflow'],
    tags: ['Complex Logic Simplified']
  }
];

const PortfolioPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Work | Luxefiz - Websites for Business Growth</title>
        <meta name="description" content="Explore the Luxefiz portfolio. We build professional, high-trust websites focused on clarity, outcomes, and business growth." />
      </Helmet>

      <div className="bg-white text-brand-charcoal font-poppins selection:bg-brand-purple selection:text-white">

        {/* SECTION 1: STRONG INTRO */}
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-6">
              Websites Built for <span className="text-[#4C1D95]">Real Business Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl">
              Our portfolio represents businesses that value clarity, credibility, and long-term online presence.
              Every project is designed to support trust, visibility, and enquiries — not just design.
            </p>

          </div>
        </section>

        {/* SECTION 2: EXPECTATION SETTING */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-playfair font-bold mb-6">How to View Our Portfolio</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Each project below reflects our approach to professional website development and online presence.
                We focus on structure, performance, clarity, and business usability — not trends or temporary visuals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <ul className="space-y-4">
                {[
                  'Business-focused website structure',
                  'Clean and professional design',
                  'Mobile-friendly and fast loading',
                  'Built to support Google visibility',
                  'Designed to convert visitors into enquiries'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mt-1 mr-3 flex-shrink-0 text-[#4C1D95]">
                      <CheckIcon />
                    </span>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROJECT CARDS */}
        <section id="portfolio-grid" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <div key={index} className="group flex flex-col h-full bg-white">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100 rounded-lg mb-8 shadow-sm border border-gray-100 aspect-[16/10]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#4C1D95]/0 group-hover:bg-[#4C1D95]/5 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-2xl font-playfair font-bold mb-3 group-hover:text-[#4C1D95] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-4 border-t border-gray-100 pt-6">
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-800">
                      {project.focus.map((f, i) => (
                        <div key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4C1D95] mr-2"></span>
                          {f}
                        </div>
                      ))}
                    </div>
                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs uppercase tracking-wider rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: QUALITY OVER QUANTITY */}
        <section className="py-20 bg-brand-charcoal text-white">
          <div className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Focused Work. Not Mass Production.</h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              "We intentionally work on a limited number of projects at a time.
              This allows us to give each business the attention required to build a strong and reliable online presence."
            </p>
          </div>
        </section>

        {/* SECTION 5: PROCESS SNAPSHOT */}
        <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold">Our Process</h2>
            <div className="w-12 h-1 bg-[#4C1D95] mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Understanding', text: 'Understanding the business and goals.' },
              { step: '02', title: 'Structuring', text: 'Structuring the website for clarity and usability.' },
              { step: '03', title: 'Designing', text: 'Designing a professional, responsive interface.' },
              { step: '04', title: 'Launching', text: 'Launching with a focus on long-term growth.' },
            ].map((item, index) => (
              <div key={index} className="relative p-6 pt-10 border-l border-gray-200 hover:border-[#4C1D95] transition-colors duration-300">
                <span className="absolute -top-3 -left-3 text-4xl font-playfair font-bold text-gray-100 select-none">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: WHO THIS IS FOR */}
        <section className="py-20 bg-gray-50">
          <div className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-10 md:p-14 shadow-sm border border-gray-100 text-center">
              <h2 className="text-3xl font-playfair font-bold mb-10">Who Our Work Is Best Suited For</h2>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-3xl mx-auto mb-12">
                {[
                  'Businesses that want a professional online presence',
                  'Owners who value clarity and credibility',
                  'Companies focused on long-term growth',
                  'Decision-makers looking for quality, not shortcuts'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#4C1D95] mr-4"></div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-400 italic text-sm">
                We may not be the right fit for businesses looking for quick or low-cost solutions.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: CLOSING CTA */}
        <section className="py-24 px-6 md:px-12 lg:px-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Let’s Build an Online Presence That Supports Your Business
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Tell us about your business and what you’re looking to build.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=916382839617"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-10 py-5 bg-[#4C1D95] text-white text-base tracking-widest uppercase font-bold rounded shadow-lg shadow-purple-900/20 hover:bg-[#3b1575] hover:shadow-xl transition-all duration-300"
          >
            Start a Conversation
            <ArrowRightIcon />
          </a>
        </section>

      </div>
    </>
  );
};

export default PortfolioPage;