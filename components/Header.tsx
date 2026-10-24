import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from '../assets/logo';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';

interface ServiceItem {
  title: string;
  desc: string;
  path: string;
  icon: string;
}

const servicesList: ServiceItem[] = [
  {
    title: 'Website Development',
    desc: 'High-performance, custom business websites built for speed and conversion.',
    path: '/services/website-development',
    icon: '⚡'
  },
  {
    title: 'Search Engine Optimization',
    desc: 'Technical SEO and organic growth strategies for long-term discovery.',
    path: '/services/seo',
    icon: '🔍'
  },
  {
    title: 'Google Business Profile',
    desc: 'Local search domination and Google Maps visibility for local businesses.',
    path: '/services/google-business-profile-optimization',
    icon: '📍'
  },
  {
    title: 'Digital Marketing',
    desc: 'Targeted performance marketing and multichannel audience engagement.',
    path: '/services/digital-marketing',
    icon: '📈'
  },
  {
    title: 'Branding & Creative Design',
    desc: 'Distinguished brand identities, visual assets, and style systems.',
    path: '/services/branding',
    icon: '✨'
  },
  {
    title: 'E-commerce Development',
    desc: 'Conversion-ready online stores with seamless payment gateways.',
    path: '/services/ecommerce-development',
    icon: '🛍️'
  },
  {
    title: 'Custom SaaS & Web Apps',
    desc: 'Scalable web applications and modern cloud workflows for founders.',
    path: '/services/saas-development',
    icon: '💻'
  }
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Handle outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="Luxefiz Home">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                isActive ? 'text-luxefiz-purple bg-purple-50' : 'text-gray-700 hover:text-luxefiz-purple hover:bg-gray-50'
              }`
            }
          >
            Home
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              aria-expanded={servicesDropdownOpen}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                location.pathname.startsWith('/services')
                  ? 'text-luxefiz-purple bg-purple-50'
                  : 'text-gray-700 hover:text-luxefiz-purple hover:bg-gray-50'
              }`}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-luxefiz-purple' : 'text-gray-400'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="absolute left-0 mt-2 w-[420px] bg-white rounded-2xl shadow-xl border border-gray-100 p-3 grid grid-cols-1 gap-1 z-50 animate-fadeIn"
              >
                <div className="px-3 py-2 border-b border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Our Capabilities</span>
                  <Link
                    to="/services"
                    className="text-xs font-bold text-luxefiz-purple hover:underline"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    View All Services &rarr;
                  </Link>
                </div>
                {servicesList.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors group"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <span className="text-xl p-1.5 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">{service.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-luxefiz-purple transition-colors">
                        {service.title}
                      </div>
                      <div className="text-xs text-gray-500 line-clamp-1">
                        {service.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/work"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                isActive ? 'text-luxefiz-purple bg-purple-50' : 'text-gray-700 hover:text-luxefiz-purple hover:bg-gray-50'
              }`
            }
          >
            Work
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                isActive ? 'text-luxefiz-purple bg-purple-50' : 'text-gray-700 hover:text-luxefiz-purple hover:bg-gray-50'
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                isActive ? 'text-luxefiz-purple bg-purple-50' : 'text-gray-700 hover:text-luxefiz-purple hover:bg-gray-50'
              }`
            }
          >
            Insights
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                isActive ? 'text-luxefiz-purple bg-purple-50' : 'text-gray-700 hover:text-luxefiz-purple hover:bg-gray-50'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+916382839617"
            className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition flex items-center gap-1.5"
            aria-label="Call Luxefiz at +91 6382839617"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            +91 63828 39617
          </a>
          <Link
            to="/contact"
            className="btn-primary text-xs uppercase tracking-wider py-2.5 px-5 shadow-sm hover:shadow-md"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            to="/contact"
            className="text-xs font-bold text-white bg-luxefiz-purple px-3.5 py-1.5 rounded-full"
          >
            Enquire
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
            className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className="px-4 py-2.5 rounded-xl font-bold text-gray-900 hover:bg-purple-50 hover:text-luxefiz-purple"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            
            <div className="px-4 py-2">
              <div className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-2">Services</div>
              <div className="space-y-1 pl-2 border-l-2 border-purple-100">
                <Link
                  to="/services"
                  className="block py-1.5 text-sm font-semibold text-luxefiz-purple"
                  onClick={() => setMobileOpen(false)}
                >
                  All Services Overview &rarr;
                </Link>
                {servicesList.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block py-1.5 text-sm text-gray-700 hover:text-luxefiz-purple"
                    onClick={() => setMobileOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/work"
              className="px-4 py-2.5 rounded-xl font-bold text-gray-900 hover:bg-purple-50 hover:text-luxefiz-purple"
              onClick={() => setMobileOpen(false)}
            >
              Selected Work (Portfolio)
            </Link>
            <Link
              to="/about"
              className="px-4 py-2.5 rounded-xl font-bold text-gray-900 hover:bg-purple-50 hover:text-luxefiz-purple"
              onClick={() => setMobileOpen(false)}
            >
              About Luxefiz & Founder
            </Link>
            <Link
              to="/insights"
              className="px-4 py-2.5 rounded-xl font-bold text-gray-900 hover:bg-purple-50 hover:text-luxefiz-purple"
              onClick={() => setMobileOpen(false)}
            >
              Insights & Blog
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2.5 rounded-xl font-bold text-gray-900 hover:bg-purple-50 hover:text-luxefiz-purple"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-3">
            <Link
              to="/contact"
              className="btn-primary w-full text-center py-3 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Start a Project
            </Link>
            <div className="flex justify-between items-center text-xs text-gray-500 pt-2 px-1">
              <span>Direct Call: <a href="tel:+916382839617" className="font-bold text-luxefiz-purple">+91 6382839617</a></span>
              <span>Mannargudi, TN</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
