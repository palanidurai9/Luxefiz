import React from 'react';
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
             {/* Page Header */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-playfair font-bold text-brand-charcoal">
                        Blending Luxury Design with Smart Strategy
                    </h1>
                </div>
            </section>
            
            {/* Our Story & Approach Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-5xl">

                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-16 [&_h4]:text-center [&_h3]:text-center [&_h3]:text-brand-pink [&_h2]:text-center">
                        <h2 className="text-3xl font-playfair font-bold text-brand-charcoal mb-2">Who is Luxefiz?</h2>
                        <h4 className="text-xl text-brand-pink mb-8">
                            A creative tech studio built for the digital-first era.
                        </h4>
                        <div className="text-lg text-gray-700 leading-relaxed space-y-6 max-w-3xl mx-auto text-justify">
                            <p>
                            <strong>Luxefiz</strong> is a creative tech studio built for the digital first era. We help brands look good, sell smart, and grow fast by combining design, technology, and marketing strategy.<strong> Our approach is simple: Marketing with Class, Easy on Cash!</strong> From websites that convert to campaigns that perform, we help businesses of every scale build trust, visibility, and measurable growth.
                            </p>
                            <h4>
                              <strong>We’re not just a service provider, we’re your digital growth partner!</strong>
                            </h4>
                            <h3>
                            <strong>Smart. Stylish. Scalable.</strong>
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
                            <h3 className="text-3xl font-playfair font-bold text-brand-purple mb-4 ">Our Unique Approach</h3>
                             <p>
                             At Luxefiz, we go beyond design and ads — we build brands that lead.
                             Our approach blends creative storytelling, smart technology, and data-driven marketing to make your brand stand out in a crowded digital world.
                            </p>
                             <p>
                             We believe luxury isn’t about spending more, it’s about executing smarter!
                            </p>
                            <p>
                            Every project at Luxefiz starts with a deep understanding of your business goals.
                            <br></br>
                            From websites that convert to campaigns that connect, we make sure your brand isn’t just seen, but remembered.
                            </p>
                            <p>
                            <strong>We don’t sell services. We build digital assets that grow in value over time.</strong>
                            </p>
                        </div>
                        <div className="md:col-span-2 p-8 bg-purple-50 rounded-2xl shadow-lg border border-purple-100">
                             <h3 className="text-3xl font-playfair font-bold text-brand-charcoal mb-6 text-center">Our Mission</h3>
                            <p className="text-lg text-justify text-gray-700">
                            empower brands with digital experiences that look luxurious and perform powerfully. We blend creativity, technology, and strategy to deliver results that matter. We believe marketing should be smarter, not costlier. Every project we craft aims to build lasting growth and real connections. Our goal is simple: to make your brand not just seen, but remembered.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-playfair font-bold text-brand-charcoal mb-8 text-center">Our Core Values</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ValuePill icon="🎯" text="Clarity over Complexity" />
                            <ValuePill icon="💎" text="Design that Speaks" />
                            <ValuePill icon="⚙️" text="Technology that Delivers" />
                            <ValuePill icon="🚀" text="Growth that Scales" />
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
