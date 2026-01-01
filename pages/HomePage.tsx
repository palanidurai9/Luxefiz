import React from 'react';
import { NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';
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
      <SEO
        title="Luxefiz – Business Website Development Company in Tamil Nadu"
        description="Luxefiz builds professional business websites that help companies get discovered, trusted, and contacted across Tamil Nadu."
        canonicalUrl="https://www.luxefiz.com/"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Luxefiz",
          "url": "https://www.luxefiz.com",
          "telephone": "+916382839617",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mannargudi",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative text-white py-32 px-6 bg-gradient-to-r from-brand-purple to-brand-pink bg-200% animate-gradient-flow">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-black leading-tight mb-6">
            Professional Business Website <br className="hidden md:block" /> Development for Growth
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-100 opacity-95">
            We build high-performance websites that turn visitors into customers. <br className="hidden md:block" />
            Get discovered, build trust, and grow your business online.
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
              View Our Work
            </NavLink>
          </div>
        </div>
      </section>

      {/* H2: Websites Built for Real Business Results */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-charcoal mb-4">
              Websites Built for Real Business Results
            </h2>
            <p className="text-xl text-brand-purple font-medium">more than just a digital brochure.</p>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              In the current digital landscape, your website is often the first interaction a potential client has with your business. It is your 24/7 salesperson, your brand ambassador, and your primary conversion tool. At Luxefiz, we understand that a pretty design is not enough. You need a website that works as hard as you do.
            </p>
            <p>
              We focus on creating digital experiences that are fundamentally designed to drive business growth. This means every pixel, every line of code, and every piece of content is placed with a strategic purpose: to guide your visitors toward becoming paying customers. We move beyond simple aesthetics to deliver robust, high-performance platforms that establish immediate credibility.
            </p>
            <p>
              Whether you are a local service provider in Mannargudi, a growing enterprise in Chennai, or a startup in Coimbatore, the principles of online success remain the same: Visibility, Trust, and Conversion. Our development process prioritizes these pillars to ensure your investment returns tangible value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ServiceCard title="Strategic Design" description="Layouts that guide user attention to your most important offers and calls to action." />
            <ServiceCard title="Search Optimized" description="Technical foundations that help you rank higher on Google for relevant local searches." />
            <ServiceCard title="Mobile First" description="Flawless experience on smartphones, where over 70% of your customers likely start their journey." />
            <ServiceCard title="Speed Focused" description="Lightning-fast loading times that prevent potential customers from bouncing to competitors." />
          </div>
        </div>
      </section>

      {/* Intro/Why Section - H2: Why Businesses Choose Luxefiz */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              {/* Visual Element */}
              <div className="bg-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-brand-pink opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-brand-purple opacity-10 rounded-full blur-2xl"></div>
                <h3 className="text-2xl font-bold mb-4 font-playfair">The Luxefiz Difference</h3>
                <ul className="space-y-4">
                  <BenefitItem text="Custom-coded for performance, not slow templates." />
                  <BenefitItem text="Deep understanding of the Tamil Nadu market context." />
                  <BenefitItem text="Focus on long-term authority and domain health." />
                  <BenefitItem text="Direct access to senior developers, no middlemen." />
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-charcoal mb-6">
                Why Businesses Choose Luxefiz
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Business owners across Tamil Nadu choose Luxefiz because we speak the language of business, not just code. We don't just ask "what colors do you like?"; we ask "who are your customers?" and "what are your growth goals?".
                </p>
                <p>
                  Most agencies rely on heavy, bloated website builders that slow down over time and are difficult to secure. We build lean, modern, and efficient websites using state-of-the-art technology stacks. This approach ensures your site remains secure, fast, and adaptable to future changes in the digital market, such as the rise of AI search engines.
                </p>
                <p>
                  Trust is the currency of the internet. A broken layout, a slow page, or a generic template erodes that trust instantly. We craft bespoke digital identities that position you as the market leader, giving your customers the confidence to choose you over the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Our Website Development Approach */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-charcoal mb-6">
              Our Website Development Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven, systematic process to deliver excellence. Our methodology integrates technical SEO, user experience design, and conversion psychology from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Discovery & Strategy</h3>
              <p className="text-gray-600">We analyze your market, competitors, and audience to build a roadmap for success. We identify the keywords your customers use and the problems they need you to solve.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-pink/10 text-brand-pink rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Design & Development</h3>
              <p className="text-gray-600">We design a unique interface that reflects your brand's premium value. Then, we code it using clean, semantic HTML and optimized JavaScript to ensure AI readability and speed.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Launch & Growth</h3>
              <p className="text-gray-600">We deploy your site with full technical SEO configurations, sitemaps, and analytics. We then hand over a system that is ready to generate leads and grow with your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Serving Businesses Across Tamil Nadu */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-charcoal mb-6">
                Serving Businesses Across Tamil Nadu
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Luxefiz is proud to empower local businesses with global-standard digital solutions. Whether you are searching for web development in Chennai or digital branding in Madurai, we are your local partners with a world-class skillset. We understand the specific needs of the Tamil Nadu market.
              </p>
              <div className="grid grid-cols-2 gap-4 font-medium text-gray-600">
                <div className="flex items-center"><span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span> Chennai</div>
                <div className="flex items-center"><span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span> Coimbatore</div>
                <div className="flex items-center"><span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span> Madurai</div>
                <div className="flex items-center"><span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span> Trichy</div>
                <div className="flex items-center"><span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span> Salem</div>
                <div className="flex items-center"><span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span> Tirunelveli</div>
                <div className="flex items-center"><span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span> Mannargudi</div>
                <div className="flex items-center"><span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span> Thanjavur</div>
              </div>
            </div>
            <div className="md:w-1/2">
              {/* Map representation or local imagery placeholder */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-charcoal">
                <h3 className="text-xl font-bold mb-2">Local Business Focus</h3>
                <p className="text-gray-600 mb-4">We help you dominate your local search results. When customers near you search for your services, your website should be the first answer they trust.</p>
                <NavLink to="/contact" className="text-brand-purple font-semibold hover:underline">Start Your Local Growth Strategy &rarr;</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Readability & FAQ Section */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-brand-charcoal mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">What does Luxefiz do?</h3>
              <p className="text-gray-700">Luxefiz builds professional business websites designed to help companies get discovered, trusted, and contacted online. We specialize in creating high-performance digital assets that function as effective tools for business growth, rather than just static information pages.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">Why invest in a professional website?</h3>
              <p className="text-gray-700">A professional website increases your business credibility, allows you to be found by customers searching on Google, and provides a controlled environment to convert visitors into leads. Unlike social media, a website is an asset you fully own and control.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">How does Luxefiz help with online discovery?</h3>
              <p className="text-gray-700">We implement advanced technical SEO (Search Engine Optimization) and schema markup during development. This helps search engines like Google and AI assistants like ChatGPT understand exactly what your business offers, improving your chances of ranking for relevant queries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-brand-charcoal text-center text-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Transform Your Online Presence?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's build a website that reflects the quality of your business. Contact us today to discuss your project.
          </p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 text-brand-charcoal font-bold rounded-full bg-white hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            Start Your Project
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;