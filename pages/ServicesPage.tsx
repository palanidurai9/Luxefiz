import React from 'react';
import { NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 animate-fadeIn">
      <SEO
        title="Business Website Services – Web Development Company Tamil Nadu"
        description="Comprehensive website development services by Luxefiz. We build professional, search-optimized websites that help businesses in Tamil Nadu grow."
        canonicalUrl="https://www.luxefiz.com/services"
      />

      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-5xl">
          <span className="text-brand-pink font-bold uppercase tracking-wider text-sm mb-4 block">Our Expertise</span>
          <h1 className="text-4xl md:text-6xl font-playfair font-black text-brand-charcoal mb-8 leading-tight">
            Comprehensive Digital Solutions <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">Built for Business Growth</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just write code; we build digital assets. Our services are designed to solve the three biggest problems businesses face online: being found, building trust, and converting visitors into customers.
          </p>
        </div>
      </section>

      {/* Service 1: Custom Web Development */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-brand-purple rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-500/30">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-charcoal mb-6">Custom Business Website Development</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Your website is the foundation of your entire digital existence. In a market like Tamil Nadu, where competition is rapidly digitizing, a generic template is no longer enough. We build custom, hand-coded websites that are tailored specifically to your business goals and operational needs.
                </p>
                <p>
                  Unlike drag-and-drop builders that produce slow, bloated code, our development process prioritizes performance and security. We use modern technologies (like React and crisp HTML5) to ensure your site loads instantly, even on slower 4G mobile networks commonly used across the region.
                </p>
                <p>
                  A custom website gives you complete ownership and flexibility. As your business grows—perhaps you add new services, open a new branch in Madurai, or expand to Chennai—your website can scale with you without breaking. We build assets that are meant to last for years, not months.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-6 border-b pb-4">Technical Deliverables</h3>
              <ul className="space-y-4">
                {[
                  "Hand-coded Semantic HTML5 structure",
                  "React.js / Next.js Framework Implementation",
                  "Mobile-First Responsive Layouts",
                  "Speed Optimization (Core Web Vitals)",
                  "Cross-Browser Compatibility",
                  "Secure SSL Configuration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-brand-pink rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Discovery & Search Architecture */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-6 border-b pb-4">Visibility Deliverables</h3>
              <ul className="space-y-4">
                {[
                  "Advanced Schema Markup (JSON-LD)",
                  "Keyword-Optimized Heading Structures",
                  "XML Sitemap & Robots.txt Configuration",
                  "Google Search Console Setup",
                  "Local Business Map Integration",
                  "AI-Readable Content Formatting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-brand-pink rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="w-16 h-16 bg-brand-pink rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-pink-500/30">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-charcoal mb-6">Search & Discovery Architecture</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  The most beautiful website in the world is useless if your customers cannot find it. Discovery is not an afterthought at Luxefiz; it is baked into the very architecture of the code we write. We ensure that search engines like Google and new AI platforms like ChatGPT can perfectly understand who you are and what you do.
                </p>
                <p>
                  We implement advanced "Schema Markup" — a code language that helps search engines read your site. This means when someone searches for "best manufacturer in Coimbatore" or "service provider in Mannargudi", Google has the exact data it needs to recommend you. This Technical SEO foundation is critical for long-term organic growth.
                </p>
                <p>
                  We focus on "high-intent" discovery. We structure your content to answer the specific questions your potential clients are asking. By providing clear, authoritative answers in a format machines can read, we help position your business as the trusted industry leader before the client even contacts you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Trust & Identity */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-charcoal mb-6">Brand Identity & Digital Trust</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Trust is the currency of the internet. We design experiences that make your business look established, professional, and reliable from the first second.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold font-playfair mb-4">Visual Credibility</h3>
              <p className="text-gray-600">
                We use color psychology, professional typography, and whitespace to create a premium feel. Avoid the "cheap" look of generic templates that scares high-value clients away.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold font-playfair mb-4">Content Authority</h3>
              <p className="text-gray-600">
                We help structure your text to sound confident and expert. By clearly defining your services and value proposition, we eliminate confusion and build buyer confidence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold font-playfair mb-4">Proof Signals</h3>
              <p className="text-gray-600">
                We strategically place testimonials, certifications, and case studies where they matter most. We turn your past successes into future sales tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for AI Readability */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-brand-charcoal mb-10">Common Questions About Our Services</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brand-charcoal mb-2">Do you use templates or build from scratch?</h3>
              <p className="text-gray-700">We prioritize custom development. while we may use internal libraries to speed up the process, the core architecture is built specifically for your business needs to ensure maximum speed and uniqueness.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brand-charcoal mb-2">Will my website work on mobile phones?</h3>
              <p className="text-gray-700">Yes. We adopt a "Mobile-First" approach. Since most users in India browse via smartphones, we ensure the mobile experience is perfect before even looking at the desktop version.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brand-charcoal mb-2">How long does it take to build a business website?</h3>
              <p className="text-gray-700">A typical professional business website project takes between 2 to 4 weeks, depending on the complexity and content requirements. We prioritize quality and testing over rushing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-charcoal text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-playfair font-bold mb-8">Invest in Your Business's Future</h2>
          <p className="text-xl text-gray-300 mb-10">
            A website is not an expense; it is an asset that works for you every single day. Let's build something you are proud of.
          </p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-brand-charcoal font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Start Your Project
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;