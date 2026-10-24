import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { StarIcon } from '../components/icons/StarIcon';
import { ProjectEnquiryForm } from '../components/ProjectEnquiryForm';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initial: string;
  accent: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "Working with Luxefiz was smooth and stress-free. They handled everything from design to SEO perfectly. Our website now looks professional and ranks well on Google. Excellent service and great support!",
    name: "Vigneshwaran N",
    role: "Business Owner",
    initial: "V",
    accent: "border-blue-200 text-blue-700 bg-blue-50"
  },
  {
    quote: "Luxefiz did an amazing job designing our website! The team understood our brand perfectly and delivered a clean, modern, and responsive design. Their approach to digital marketing and SEO also helped us get more visibility online. Highly recommend them for anyone looking for quality web development and branding services.",
    name: "Skrrsta",
    role: "Fashion Brand Founder",
    initial: "S",
    accent: "border-purple-200 text-purple-700 bg-purple-50"
  },
  {
    quote: "Had a great experience working with Luxefiz! Their team delivered exactly what I was looking for — a clean, modern, and fast-loading website that perfectly fits my brand. They handled everything from design to SEO with a professional and friendly approach. What I liked most was their attention to detail and ability to turn ideas into a polished final product... Luxefiz is definitely worth recommending. They truly live up to their motto — 'Marketing with Class, Easy on Cash.'",
    name: "Ragul Kumaran K",
    role: "Startup Founder",
    initial: "R",
    accent: "border-emerald-200 text-emerald-700 bg-emerald-50"
  },
  {
    quote: "That I have the best UI/UX in my website because of Luxefiz, and I really like their web development projects.",
    name: "Rasmiii",
    role: "Brand Client",
    initial: "R",
    accent: "border-pink-200 text-pink-700 bg-pink-50"
  }
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Client Reviews & Testimonials | Luxefiz"
        description="Authentic client reviews and feedback for Luxefiz. See how businesses across Tamil Nadu built trust and generated online growth."
        canonicalUrl="https://www.luxefiz.com/testimonials"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ItemPage",
            "name": "Luxefiz Client Reviews & Testimonials",
            "url": "https://www.luxefiz.com/testimonials"
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
                "name": "Testimonials",
                "item": "https://www.luxefiz.com/testimonials"
              }
            ]
          }
        ]}
      />

      {/* Hero */}
      <section className="bg-obsidian text-white pt-32 pb-24 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="badge-pill badge-pill-dark mb-4">Client Feedback</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            Trusted by Ambitious <br className="hidden md:block" />
            <span className="text-signature-pink">Founders & Business Owners</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
            We don't just write code; we form long-term partnerships. Here is direct, verified feedback from businesses we have supported.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 text-xs text-gray-200">
            <span className="font-semibold">Verified Feedback</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-white">5.0 Star Rating</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-6 bg-porcelain">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonialsData.map((item, index) => (
              <div
                key={index}
                className="editorial-card p-8 bg-white flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex text-amber-400 gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-8">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold text-lg ${item.accent}`}>
                    {item.initial}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-obsidian text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center text-xs text-gray-500">
            * All reviews presented are from verified business engagements. We strictly prohibit fabricated testimonials or artificial ratings.
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

export default TestimonialsPage;
