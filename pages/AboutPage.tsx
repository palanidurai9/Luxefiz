import React from 'react';
import { SEO } from '../components/SEO';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { YouTubeIcon } from '../components/icons/YouTubeIcon';

const ValuePill: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
    <div className="flex items-center p-4 rounded-full bg-white shadow-md border border-gray-100 transform hover:scale-105 transition-transform duration-300">
        <span className="text-2xl md:text-3xl mr-3">{icon}</span>
        <h4 className="text-base md:text-lg text-gray-800 font-bold">{text}</h4>
    </div>
);

const AboutPage: React.FC = () => {
    return (
        <div className="animate-fadeIn">
            <SEO
                title="About Luxefiz – Professional Web Development Agency Tamil Nadu"
                description="We are Luxefiz. A creative tech studio blending strategy with digital excellence to build trusted online presence systems for businesses."
                canonicalUrl="https://www.luxefiz.com/about"
            />
            {/* Page Header */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-brand-charcoal mb-6">
                        Blending Strategy with Digital Excellence
                    </h1>
                    <p className="text-xl text-gray-600">
                        Luxefiz is a creative tech studio dedicated to building professional business websites and trusted online presence systems. We help businesses be found, be trusted, and be successful in the digital world.
                    </p>
                </div>
            </section>

            {/* Our Story & Approach Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-5xl">

                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-16 [&_h4]:text-center [&_h3]:text-center [&_h3]:text-brand-pink [&_h2]:text-center">
                        <h2 className="text-3xl font-playfair font-bold text-brand-charcoal mb-2">Our Story</h2>
                        <h4 className="text-xl text-brand-pink mb-8">
                            A mission to make businesses visible and valuable online.
                        </h4>
                        <div className="text-lg text-gray-700 leading-relaxed space-y-6 max-w-3xl mx-auto text-justify">
                            <p>
                                <strong>Luxefiz</strong> began with a clear realization: too many amazing businesses remain hidden because their digital presence doesn't reflect their real-world quality. We saw founders and owners struggling with websites that looked okay but didn't actually help customers find them or trust them.
                            </p>
                            <p>
                                Driven by a passion for technology and a heart for entrepreneurship, we set out to change that. <strong>Our mission is to empower business owners with professional web development that drives real growth.</strong> We don't just build pages; we build digital assets that work for you 24/7. From small startups in Tamil Nadu to growing brands across India, we help you become the discoverable, trusted choice in your market.
                            </p>
                            <h4>
                                <strong>Your growth is our benchmark for success.</strong>
                            </h4>
                            <h3>
                                <strong>Smart. Structured. Successful.</strong>
                            </h3>
                        </div>
                    </div>

                    <div className="text-center my-16">
                        <p className="text-3xl md:text-4xl text-brand-charcoal font-semibold font-playfair italic p-6 bg-white rounded-lg border-l-8 border-r-8 border-brand-purple shadow-lg inline-block">
                            Marketing with Class, Easy on Cash!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-12 items-center mb-20">
                        <div className="md:col-span-3 text-lg text-gray-700 leading-relaxed space-y-6">
                            <h3 className="text-3xl font-playfair font-bold text-brand-purple mb-4 ">Our Approach</h3>
                            <p>
                                At Luxefiz, we believe in a "user's first" philosophy. We don't chase fleeting trends; we chase clarity, performance, and structure.
                            </p>
                            <p>
                                We approach every project by first understanding the search intent of your customers. What are they looking for? What questions do they have? We then build a search-ready structure that answers these needs directly. By focusing on clean, professional business website standards, we ensure your site is not just a digital brochure, but a tool for discovery.
                            </p>
                            <p>
                                We prioritize mobile-readiness and speed because we know these are the foundations of trust.
                            </p>
                            <p>
                                <strong>We focus on business outcomes over bells and whistles, delivering systems that help you grow.</strong>
                            </p>
                        </div>
                        <div className="md:col-span-2 p-8 bg-purple-50 rounded-2xl shadow-lg border border-purple-100 h-full flex flex-col justify-center">
                            <h3 className="text-3xl font-playfair font-bold text-brand-charcoal mb-6 text-center">Our Values</h3>
                            <p className="text-lg text-justify text-gray-700">
                                We stand for <strong>trust, precision, and long-term value</strong>. We believe that a professional and trusted partner is what every business owner deserves. Our work is defined by transparency and a relentless focus on quality. We are committed to building modern and structured websites that stand the test of time and technology changes.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-playfair font-bold text-brand-charcoal mb-8 text-center">Core Principles</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ValuePill icon="🔍" text="Visibility First" />
                            <ValuePill icon="🤝" text="Trusted Partnership" />
                            <ValuePill icon="⚡" text="Performance Focused" />
                            <ValuePill icon="📈" text="Sustainable Growth" />
                        </div>
                    </div>

                </div>
            </section>

            {/* Founder Section */}
            <div className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="/image/meeee.png"
                                alt="Palani Durai (RPD), Founder of Luxefiz"
                                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-playfair font-bold mb-4">Meet Our Founder</h2>
                            <h3 className="text-4xl text-brand-purple font-semibold mb-6">Palani Durai (RPD)</h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                A student entrepreneur with a passion for technology, design, and brand strategy — Palani Durai founded Luxefiz from Tamil Nadu with <b>one vision in mind: to make premium digital services accessible for every business.</b>
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                With a background in Information Technology, he identified a gap between high-end agencies and ambitious startups who needed the same quality — but couldn’t afford the traditional agency pricing.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                His mission is simple:
                                <br></br>
                                <b>Democratize world-class design and digital growth.</b>
                            </p>
                            {/* Social Media Links for Founder */}
                            <div className="mt-6 flex space-x-4">
                                <a href="https://www.linkedin.com/in/palani-durai-5aa942284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors duration-300">
                                    <LinkedInIcon />
                                </a>
                                <a href="https://instagram.com/rp_duraii__" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition-colors duration-300">
                                    <InstagramIcon />
                                </a>
                                <a href="https://www.youtube.com/@rp_durai" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors duration-300">
                                    <YouTubeIcon />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
