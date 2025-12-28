import React from 'react';
import { NavLink } from 'react-router-dom';
import { PremiumDesignIcon } from '../components/icons/PremiumDesignIcon';
import { SmartMarketingIcon } from '../components/icons/SmartMarketingIcon';
import { ScalableSassIcon } from '../components/icons/ScalableSassIcon';

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100">
    <h3 className="text-xl font-bold font-playfair text-brand-charcoal mb-4 min-h-[56px] flex items-center">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start">
    <svg className="w-6 h-6 text-brand-pink mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
    <span className="text-lg text-gray-700">{text}</span>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative text-white py-32 px-6 bg-gradient-to-r from-brand-purple to-brand-pink bg-200% animate-gradient-flow">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-black leading-tight mb-6">
            Websites That Work <br className="hidden md:block" /> For Your Business
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-100 opacity-95">
            Premium design. Search-ready structure. Real growth. <br className="hidden md:block" /> We help you get found and trusted online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <NavLink
              to="/contact"
              className="px-8 py-3 bg-white text-brand-purple font-semibold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Get a Free Quote
            </NavLink>
            <NavLink
              to="/portfolio"
              className="px-8 py-3 bg-transparent border-2 border-white font-semibold rounded-full hover:bg-white hover:text-brand-purple transform hover:scale-105 transition-all duration-300"
            >
              See Our Work
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Web Development Matters */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-charcoal mb-8">
            Why Your Business Needs a Professional Website
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              In today's digital world, your customers search online before they ever pick up the phone or visit a store. If your business isn't there, or if your website doesn't look professional, you're missing out on your most valuable opportunities. A professional business website acts as your 24/7 salesperson, building trust and answering questions before you even speak to a client.
            </p>
            <p>
              It's not enough to just "have" a website. To truly grow, your site must be modern, mobile-ready, fast, and structured in a way that helps customers make decisions. We specialize in modern web development that ensures your business is discoverable online, providing a trusted digital experience that converts curious visitors into confident buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-brand-charcoal mb-4">
              Built for Business Growth
            </h2>
            <p className="text-xl text-brand-purple font-medium">
              Comprehensive solutions for your digital success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Web Development for Growth"
              description="We build professional business websites designed to perform. From fast loading times to mobile-ready layouts, our development ensures your foundation is solid and ready for scale."
            />
            <ServiceCard
              title="Online Visibility & Business Presence"
              description="Get found by the customers who are looking for you. We structure your online presence to be visible on search engines, making your business discoverable and authoritative."
            />
            <ServiceCard
              title="Brand Identity & Digital Trust"
              description="Stand out with a clear company identity. We craft consistent visual branding that builds trust instantly, portraying your business as the leader in its field."
            />
            <ServiceCard
              title="Scalable Business Website Systems"
              description="Future-proof your growth with a scalable platform. Our systems allow you to expand your content and features as your business grows, ensuring long-term value."
            />
          </div>
        </div>
      </section>

      {/* Business Benefits Block */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-brand-purple to-brand-pink p-1 rounded-3xl transform rotate-2 hover:rotate-0 transition-all duration-500">
              <img
                src="/image/hero-mockup.png"
                alt="Business Website Preview"
                className="rounded-3xl shadow-2xl bg-white"
                onError={(e) => {
                  // Fallback if image doesn't exist to a solid color block with text
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="h-64 md:h-96 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400 font-bold text-xl">High Performance Websites</div>';
                }}
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-charcoal mb-6">
              Real Results for Your Business
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Partnering with Luxefiz means getting more than just code. You get a strategic asset designed to deliver tangible business outcomes.
            </p>
            <div className="space-y-4">
              <BenefitItem text="Websites customers find easily when searching online" />
              <BenefitItem text="Clear company identity that builds trust & authority" />
              <BenefitItem text="Mobile-ready sites that look perfect on all devices" />
              <BenefitItem text="Fast loading experience that keeps visitors engaged" />
              <BenefitItem text="Structured content that helps business visibility" />
              <BenefitItem text="Easy contact and enquiry paths for better leads" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-playfair font-bold mb-6 text-brand-charcoal">Start Your Growth Journey Today</h2>
          <p className="text-lg text-gray-600 mb-8">
            Don't let your business remain hidden. Let's build a professional website that ensures you are visible, trusted, and ready to welcome new customers. Request a proposal today to see how we can help customers find you.
          </p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 text-white font-semibold rounded-full bg-gradient-to-r from-brand-purple to-brand-pink hover:shadow-lg hover:shadow-pink-500/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            Request a Proposal
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;