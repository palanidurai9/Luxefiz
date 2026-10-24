import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { YouTubeIcon } from '../components/icons/YouTubeIcon';
import { ProjectEnquiryForm } from '../components/ProjectEnquiryForm';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="About Luxefiz — Premium Digital Growth & Creative Technology Studio"
        description="Learn about Luxefiz, founded by Palani Durai in Tamil Nadu. We bridge the gap between high-end digital agency quality and accessible pricing for growing businesses."
        canonicalUrl="https://www.luxefiz.com/about"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Luxefiz",
            "url": "https://www.luxefiz.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Luxefiz",
              "founder": {
                "@type": "Person",
                "name": "Palani Durai",
                "jobTitle": "Founder & Principal Developer"
              },
              "location": {
                "@type": "PostalAddress",
                "addressLocality": "Mannargudi",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              }
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
                "name": "About",
                "item": "https://www.luxefiz.com/about"
              }
            ]
          }
        ]}
      />

      {/* Hero */}
      <section className="bg-obsidian text-white pt-32 pb-24 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="badge-pill badge-pill-dark mb-4">Our Story & Purpose</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            Classy Digital Experiences, <br className="hidden md:block" />
            <span className="text-signature-pink">Without Big Agency Stress</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Luxefiz was founded to solve a glaring problem: too many high-potential businesses look mediocre online simply because enterprise agencies charge unrealistic prices. We exist to fix that.
          </p>
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-signature-pink font-display">
            "Marketing with Class, Easy on Cash!"
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="badge-pill badge-pill-purple">Why We Started</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian">
                We Turn Your Business Into a Trusted Digital Brand
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  In every town and commercial district across Tamil Nadu—from industrial centers in Coimbatore to local enterprises in Mannargudi—we saw skilled founders with phenomenal offline products getting overlooked online because their websites were slow, template-driven, and poorly structured.
                </p>
                <p>
                  Most agencies hand clients a pre-made WordPress theme that breaks within a year. We approach web development as craft: hand-coded components, tailored typography, lightning-fast rendering, and search discovery built into the very architecture of the website.
                </p>
                <p>
                  We don't inflate team counts or fabricate overseas offices. We are proud of our Tamil Nadu roots and deliver world-class digital work through direct, honest communication.
                </p>
              </div>
            </div>

            <div className="editorial-dark-card p-8 md:p-10 space-y-6">
              <h3 className="text-2xl font-display font-bold text-white">Our 4 Guiding Principles</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-signature-pink text-obsidian font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Clarity Over Jargon</h4>
                    <p className="text-xs text-gray-400">We explain technology in practical business terms. No confusing buzzwords.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-signature-pink text-obsidian font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Speed as a Feature</h4>
                    <p className="text-xs text-gray-400">Every extra millisecond costs business. We build for sub-second Core Web Vitals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-signature-pink text-obsidian font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Truthful Search Visibility</h4>
                    <p className="text-xs text-gray-400">No black-hat ranking tricks. Only clean Schema markup and legitimate commercial relevance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-signature-pink text-obsidian font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Transparent Scope</h4>
                    <p className="text-xs text-gray-400">Milestone pricing with zero hidden maintenance traps or builder lock-ins.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6 bg-porcelain border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-card border border-gray-200 aspect-[3/4] bg-gray-100">
                <img
                  src="/image/meeee.png"
                  alt="Palani Durai (RPD) - Founder of Luxefiz"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <span className="badge-pill badge-pill-purple">Leadership</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-obsidian">
                Meet the Founder: <br />
                <span className="text-luxefiz-purple">Palani Durai (RPD)</span>
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Palani Durai is an entrepreneur and principal engineer with an academic background in Information Technology. Driven by a deep passion for clean web systems and commercial brand strategy, he founded Luxefiz from Tamil Nadu to democratize enterprise-grade web development for growing businesses.
                </p>
                <p>
                  Rather than functioning as a detached agency executive, Palani is directly involved in architecture design, client scoping, and code quality across every Luxefiz project.
                </p>
                <p className="font-semibold text-obsidian">
                  "A website isn't an artistic ornament. It is your business's 24/7 digital representative. When it loads instantly, looks authoritative, and communicates clearly, it opens doors you didn't even know were closed."
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center space-x-3 text-luxefiz-purple">
                <a
                  href="https://www.linkedin.com/in/palani-durai-5aa942284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-luxefiz-purple hover:text-white transition"
                  aria-label="Founder LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://instagram.com/rp_duraii__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-signature-pink hover:text-white transition"
                  aria-label="Founder Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.youtube.com/@rp_durai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-luxefiz-purple hover:text-white transition"
                  aria-label="Founder YouTube"
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Enquiry */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <ProjectEnquiryForm />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
