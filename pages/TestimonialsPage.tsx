import React from 'react';
import { Helmet } from 'react-helmet';
import { StarIcon } from '../components/icons/StarIcon';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initial: string;
  color: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "Working with Luxefiz was smooth and stress-free. They handled everything from design to SEO perfectly. Our website now looks professional and ranks well on Google. Excellent service and great support!",
    name: "Vigneshwaran N",
    role: "Business Owner",
    initial: "V",
    color: "bg-blue-600"
  },
  {
    quote: "Luxefiz did an amazing job designing our website! The team understood our brand perfectly and delivered a clean, modern, and responsive design. Their approach to digital marketing and SEO also helped us get more visibility online. Highly recommend them for anyone looking for quality web development and branding services.",
    name: "Skrrsta",
    role: "Fashion Brand",
    initial: "S",
    color: "bg-purple-600"
  },
  {
    quote: "had a great experience working with Luxefiz! Their team delivered exactly what I was looking for — a clean, modern, and fast-loading website that perfectly fits my brand. They handled everything from design to SEO with a professional and friendly approach. What I liked most was their attention to detail and their ability to turn ideas into a polished final product... Luxefiz is definitely worth recommending. They truly live up to their motto — 'Marketing with Class, Easy on Cash.'",
    name: "Ragul Kumaran K",
    role: "Startup Founder",
    initial: "R",
    color: "bg-green-600"
  },
  {
    quote: "That I have a best UI/UX in my website, coz of Luxefiz and I really like their web development projects..",
    name: "Rasmiii",
    role: "Client",
    initial: "R",
    color: "bg-pink-600"
  }
];

const GoogleBadge = () => (
  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 inline-flex mb-8">
    <span className="text-sm font-semibold text-gray-700">Google Rating</span>
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
    </div>
    <span className="text-sm font-bold text-gray-900">5.0</span>
  </div>
);

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, role, initial, color }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
    <div className="flex items-center gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>

    <p className="text-gray-700 leading-relaxed mb-8 flex-grow">"{quote}"</p>

    <div className="flex items-center mt-auto border-t border-gray-100 pt-6">
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md`}>
        {initial}
      </div>
      <div>
        <p className="font-bold text-brand-charcoal">{name}</p>
        <p className="text-xs text-brand-purple font-semibold uppercase tracking-wider">{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Client Reviews | Luxefiz - Trusted by Businesses</title>
        <meta name="description" content="See what business owners in Tamil Nadu are saying about working with Luxefiz for their website and online presence." />
      </Helmet>

      <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-brand-charcoal mb-6">
              Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">Businesses</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8 font-light">
              We don't just build websites; we build long-term relationships. Here is what our partners have to say about our work.
            </p>
            <GoogleBadge />
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 masonry-grid">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 text-center bg-brand-charcoal rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-purple opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-pink opacity-20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
                Ready to be our next success story?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                Join the businesses who have upgraded their online presence with clarity and professionalism.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=916382839617"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-brand-charcoal font-bold rounded-full hover:bg-brand-gray transition-colors duration-300 shadow-lg transform hover:scale-105"
              >
                Start Your Project
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
