import React from 'react';
import { NavLink } from 'react-router-dom';
import { PremiumDesignIcon } from '../components/icons/PremiumDesignIcon';
import { SmartMarketingIcon } from '../components/icons/SmartMarketingIcon';
import { ScalableSassIcon } from '../components/icons/ScalableSassIcon';

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <h3 className="text-2xl font-bold font-playfair text-brand-charcoal mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center p-6">
    <div className="flex justify-center items-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative text-white py-32 px-6 bg-gradient-to-r from-brand-purple to-brand-pink bg-200% animate-gradient-flow">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-playfair font-black leading-tight mb-4">
            Marketing with Class, Easy on Cash.
          </h1>
          <p className="text-lg md:text-xl max-w-5xl mx-auto mb-8">
          We blend creativity, strategy, and technology to help your brand grow smarter and not costlier.
          </p>
          <div className="flex justify-center space-x-4">
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

      {/* Who & Why Luxefiz Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* "Who is Luxefiz?" Card */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4 text-brand-charcoal">
                Who is Luxefiz?
              </h2>
              <p className="text-xl text-brand-purple font-semibold mb-6">
                Your Partner in Digital Excellence.
              </p>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-brand-pink pl-6">
                <p>
                Luxefiz is a creative digital studio specializing in Web Development, Branding, and Marketing Strategy.
                </p>
                <p>
                We craft experiences that don’t just look good, they work, With a focus on results, clarity, and class, Luxefiz empowers businesses to turn digital presence into lasting impact.
                </p>
              </div>
            </div>
            <NavLink
              to="/about"
              className="inline-flex items-center font-semibold text-brand-purple hover:text-brand-pink transition-colors duration-300 group text-lg"
            >
              More About Our Story
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NavLink>
          </div>

          {/* "Why Luxefiz?" Card */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4 text-brand-charcoal">
                Why Luxefiz?
              </h2>
              <p className="text-xl text-brand-purple font-semibold mb-6 ">
                  We don’t do ordinary.
              </p>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8 space-y-4 text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-brand-pink pl-6">
                <p>
                Luxefiz isn’t just another digital agency, we’re a creative growth partner!
                </p>
                <p>
                We blend strategy, design, and technology to help your brand not just exist online, but lead in your market. We understand what scales, not just what trends.
                </p>
              </div>
            </div>
            <NavLink
              to="/about"
              className="inline-flex items-center font-semibold text-brand-purple hover:text-brand-pink transition-colors duration-300 group text-lg"
            >
              Discover Our Approach
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NavLink>
          </div>

        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 pt-10 px-6 bg-gray-50 [&_h3]:text-brand-purple">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard title="Web Development" description="Crafting stunning, responsive websites that convert visitors into customers." />
            <ServiceCard title="SaaS Development" description="Building scalable and robust SaaS applications from scratch." />
            <ServiceCard title="Digital Marketing" description="Driving growth with data-driven strategies across all digital channels." />
          </div>
        </div>
      </section>


      {/* Client Logos / Testimonials Placeholder */}
      <section className="py-10 px-6 bg-white bg-white-50">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-500 mb-8">
            Trusted by growing brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 lg:gap-40">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-2xl p-2 flex justify-center items-center w-40 h-28 hover:shadow-xl transition-all duration-300">
              <img
                src="/image/pklogo.png"
                alt="Client Logo 1"
                className="h-12 object-contain"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-2xl p-0.1 flex justify-center items-center w-40 h-28 hover:shadow-xl transition-all duration-300">
              <img
                src="/image/skrstalogo.png"
                alt="Client Logo 2"
                className="h-12 object-contain"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-2xl p-0.5 flex justify-center items-center w-40 h-28 hover:shadow-xl transition-all duration-300">
              <img
                src="/image/svetlogo.png"
                alt="Client Logo 3"
                className="h-12 object-contain"
              />
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-2xl p-0.3 flex justify-center items-center w-40 h-28 hover:shadow-xl transition-all duration-300">
              <img
                src="/image/spllogo.png"
                alt="Client Logo 4"
                className="h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-white-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">Ready to grow your brand with class?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Let's collaborate to create something extraordinary that drives real business results.</p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 text-white font-semibold rounded-full bg-gradient-to-r from-brand-purple to-brand-pink hover:shadow-lg hover:shadow-pink-500/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;