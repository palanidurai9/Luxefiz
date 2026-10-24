import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { YouTubeIcon } from './icons/YouTubeIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian text-white border-t border-white/10 pt-20 pb-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block" aria-label="Luxefiz Home">
              <div className="font-display font-black text-3xl tracking-tight">
                <span className="text-white">Luxe</span>
                <span className="text-signature-pink">fiz</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm max-w-sm leading-relaxed">
              We turn your business into a trusted digital brand. High-performance websites, technical SEO, and modern growth systems tailored for ambitious small and medium businesses.
            </p>
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-signature-pink">
              "Marketing with Class, Easy on Cash!"
            </div>

            {/* Business Verification Badge */}
            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p className="font-bold text-gray-300">Udyam Registered MSME</p>
              <p className="font-mono text-gray-400">UDYAM-TN-25-0049904</p>
              <p className="text-gray-400">Headquartered in Mannargudi, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 font-display">Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/services/website-development" className="hover:text-signature-pink transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="hover:text-signature-pink transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link to="/services/google-business-profile-optimization" className="hover:text-signature-pink transition-colors">
                  Google Business Profile
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="hover:text-signature-pink transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/branding" className="hover:text-signature-pink transition-colors">
                  Branding & Identity
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce-development" className="hover:text-signature-pink transition-colors">
                  E-commerce Development
                </Link>
              </li>
              <li>
                <Link to="/services/saas-development" className="hover:text-signature-pink transition-colors">
                  Custom SaaS & Web Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Hubs & Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 font-display">Target Markets</h3>
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li>
                <Link to="/locations/coimbatore" className="hover:text-signature-pink transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signature-pink"></span>
                  Coimbatore Hub
                </Link>
              </li>
              <li>
                <Link to="/locations/mannargudi" className="hover:text-signature-pink transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxefiz-purple"></span>
                  Mannargudi Local HQ
                </Link>
              </li>
              <li>
                <span className="text-gray-500 text-xs">Serving Chennai, Madurai, Trichy, Salem & Pan-India</span>
              </li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-display">Company</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-signature-pink transition-colors">About Luxefiz</Link></li>
              <li><Link to="/work" className="hover:text-signature-pink transition-colors">Selected Work</Link></li>
              <li><Link to="/insights" className="hover:text-signature-pink transition-colors">Insights & Articles</Link></li>
              <li><Link to="/contact" className="hover:text-signature-pink transition-colors">Project Enquiry</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 font-display">Direct Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <span className="text-xs text-gray-400 block">Phone / WhatsApp:</span>
                <a href="tel:+916382839617" className="font-semibold text-white hover:text-signature-pink transition-colors">
                  +91 63828 39617
                </a>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Official Inquiries:</span>
                <a href="mailto:info@luxefiz.com" className="font-semibold text-white hover:text-signature-pink transition-colors">
                  info@luxefiz.com
                </a>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Headquarters:</span>
                <p className="text-xs text-gray-300">Mannargudi, Tamil Nadu 614001, India</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-6">
              <span className="text-xs text-gray-400 block mb-3">Connect With Us:</span>
              <div className="flex items-center space-x-3 text-gray-300">
                <a
                  href="https://www.linkedin.com/company/luxefiz/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-signature-pink hover:text-white hover:border-signature-pink transition-all"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://instagram.com/luxefiz"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-signature-pink hover:text-white hover:border-signature-pink transition-all"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.youtube.com/@luxefiz"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-signature-pink hover:text-white hover:border-signature-pink transition-all"
                >
                  <YouTubeIcon />
                </a>
                <a
                  href="https://wa.me/916382839617?text=Hello%20Luxefiz,%20I%20would%20like%20to%20discuss%20a%20website%20project."
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Luxefiz Digital Agency. All rights reserved.</p>
          <div className="flex space-x-6 text-gray-400">
            <span>Built with precision for ambitious businesses.</span>
            <span>Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
