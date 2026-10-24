import React from 'react';
import { SEO } from '../components/SEO';
import { ProjectEnquiryForm } from '../components/ProjectEnquiryForm';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { YouTubeIcon } from '../components/icons/YouTubeIcon';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Contact Luxefiz — Start Your Website & Growth Project"
        description="Discuss your website development, SEO, or branding project with Luxefiz. Headquartered in Mannargudi, serving Coimbatore, Tamil Nadu, and pan-India."
        canonicalUrl="https://www.luxefiz.com/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Luxefiz",
          "url": "https://www.luxefiz.com/contact",
          "mainEntity": {
            "@type": "ProfessionalService",
            "name": "Luxefiz",
            "telephone": "+916382839617",
            "email": "info@luxefiz.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mannargudi",
              "addressRegion": "Tamil Nadu",
              "postalCode": "614001",
              "addressCountry": "IN"
            }
          }
        }}
      />

      {/* Hero Header */}
      <section className="bg-obsidian text-white pt-32 pb-20 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="badge-pill badge-pill-dark mb-4">Let's Connect</span>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight">
            Start a Conversation That Moves <br className="hidden md:block" />
            <span className="text-signature-pink">Your Business Forward</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need a modern business website, an SEO growth system, or a complete digital overhaul, we are here to provide clear advice and structured execution.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-20 px-6 bg-porcelain">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Info & Verification */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                <span className="badge-pill badge-pill-purple">Direct Channels</span>
                <h2 className="text-2xl font-display font-bold text-obsidian">
                  Direct Communication, <br />Zero Middlemen
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  When you reach out to Luxefiz, you speak directly with technical decision-makers who understand both software craft and business reality.
                </p>

                <div className="space-y-5 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-luxefiz-purple flex items-center justify-center font-bold text-lg flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-gray-400 block">Phone / WhatsApp</span>
                      <a href="tel:+916382839617" className="font-display font-bold text-obsidian hover:text-luxefiz-purple transition">
                        +91 63828 39617
                      </a>
                      <p className="text-xs text-gray-500">Mon – Sat, 9:00 AM – 7:30 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-luxefiz-purple flex items-center justify-center font-bold text-lg flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-gray-400 block">Official Inquiries</span>
                      <a href="mailto:info@luxefiz.com" className="font-display font-bold text-obsidian hover:text-luxefiz-purple transition">
                        info@luxefiz.com
                      </a>
                      <p className="text-xs text-gray-500">Fast response within 4 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-luxefiz-purple flex items-center justify-center font-bold text-lg flex-shrink-0">
                      🏢
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-gray-400 block">Headquarters</span>
                      <p className="font-display font-bold text-obsidian">
                        Mannargudi, Tamil Nadu, India
                      </p>
                      <p className="text-xs text-gray-500">Pin Code: 614001</p>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                    Follow & Connect
                  </span>
                  <div className="flex space-x-3 text-luxefiz-purple">
                    <a
                      href="https://www.linkedin.com/company/luxefiz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-luxefiz-purple hover:text-white transition"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href="https://instagram.com/luxefiz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-signature-pink hover:text-white transition"
                      aria-label="Instagram"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="https://www.youtube.com/@luxefiz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-luxefiz-purple hover:text-white transition"
                      aria-label="YouTube"
                    >
                      <YouTubeIcon />
                    </a>
                    <a
                      href="https://wa.me/916382839617?text=Hello%20Luxefiz,%20I%20would%20like%20to%20enquire%20about%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon />
                    </a>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4">
                <h3 className="font-display font-bold text-lg text-obsidian">What Happens After You Submit?</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-luxefiz-purple font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span><strong>Prompt Review:</strong> We analyze your industry, existing site (if any), and goals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-luxefiz-purple font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span><strong>Clarity Call:</strong> A brief 15-minute scoping conversation to align on expectations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-luxefiz-purple font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span><strong>Transparent Proposal:</strong> A clear line-by-line deliverable scope and timeline.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <ProjectEnquiryForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
