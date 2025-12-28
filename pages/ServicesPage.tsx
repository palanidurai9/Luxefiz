import React from 'react';
import { NavLink } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-brand-charcoal mb-6 leading-tight">
            Professional Business Websites <br className="hidden md:block" />Built for Growth & Visibility
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We craft high-performance, search-ready websites designed to build trust, engage customers, and establish a commanding online presence for your business.
          </p>
        </div>

        {/* Why Your Business Website Matters */}
        <div className="max-w-4xl mx-auto mb-20 animate-slideUp">
          <h2 className="text-3xl font-playfair font-bold text-brand-purple mb-8 text-center">Why Your Business Website Matters</h2>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-lg text-gray-700 space-y-6 leading-relaxed text-center md:text-left">
            <p>
              In today's digital-first economy, the majority of your potential customers search online before they ever decide to make a call or visit a store. A business that appears clear, professional, and authoritative in search results is the one that wins their trust. Your website is often the very first interaction a client has with your brand, and first impressions effectively dictate their decision-making process.
            </p>
            <p>
              To convert these visitors into loyal clients, a website must be more than just visually appealing — it must be fast, structured, and strategic. Professional web development ensures that your digital foundation is solid, secure, and discoverable. At Luxefiz, we build business websites that are not only mobile-friendly and responsive but are engineered to deliver real results, helping you stand out in a crowded market.
            </p>
          </div>
        </div>

        {/* Core Service — Web Development */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 mb-20 animate-slideUp delay-100">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-charcoal mb-8">
            Web Development Built for Business Growth
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At Luxefiz, we specialize in professional web development that serves as the engine for your company's stable business growth. We understand that for business owners in Tamil Nadu and across India, a website is a critical asset. Our approach moves beyond simple design; we build robust, scalable digital systems that work tirelessly to represent your brand 24/7. We focus on creating clear, logical structures that help your customers find exactly what they need, quickly and effortlessly.
              </p>
              <p>
                Every website we build is grounded in business logic and performance. We ensure your site is mobile-ready, loading instantly on any device, which is essential for retaining modern users. By prioritizing clean code and structured layouts, we make it easier for search engines to understand and index your content, naturally improving your visibility.
              </p>
              <p>
                Whether you need a website for a small business or a comprehensive platform for a growing enterprise, our development process is designed to support your long-term goals. We combine aesthetic excellence with functional precision, ensuring your online presence is a powerful tool for generating enquiries and driving reliable business success.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-brand-purple mb-6">Built for Performance & Scale</h3>
              <ul className="space-y-4">
                {[
                  "Search-Ready Architecture: Websites structured to help customers find you on Google.",
                  "Mobile-First Design: Flawless experience on smartphones and tablets.",
                  "Speed & Performance: Lightning-fast loading to keep visitors engaged.",
                  "Conversion-Focused: Strategic paths that guide visitors to enquire.",
                  "Professional Brand Consistency: Build digital credibility instantly.",
                  "Structured Business Content: Clear info for users and search engines.",
                  "Scalable Systems: Codebases designed to expand with your business.",
                  "Secure & Reliable: Modern standards for safety and stability."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-brand-pink mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Web Systems */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 animate-slideUp delay-200">
          {/* Online Presence Foundation */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-playfair font-bold text-brand-charcoal mb-4">Online Presence Foundation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Building a beautiful website is only half the battle; ensuring it is seen is the other. We design your online presence foundation to ensure your business appears clearly in search and discovery channels.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By implementing structured data and clear website signals, we make your business discoverable by customers who are actively looking for your services. We focus on creating a digital footprint that aligns with how users search, ensuring your relevant content reaches the right audience without relying on buzzwords.
            </p>
          </div>

          {/* Brand Credibility & Visual Identity */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-playfair font-bold text-brand-charcoal mb-4">Brand Credibility & Visual Identity</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your digital identity is your reputation. We help you build lasting digital credibility through a consistent and polished brand experience. A cohesive visual identity — from your logo to your layout — serves as a powerful trust signal that customers value highly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When users see a professional, well-branded platform, their confidence in your services increases instantly. We ensure that every element of your web design reinforces your authority.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-brand-purple to-brand-pink text-white py-16 px-6 rounded-3xl animate-slideUp delay-300">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Start Your Business Website Journey</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-95">
            Let's build a digital platform that works as hard as you do. Contact Luxefiz today to discuss a strategy that helps customers find you and inspires the trust needed to close deals.
          </p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-brand-purple font-bold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
          >
            Request a Proposal
          </NavLink>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;