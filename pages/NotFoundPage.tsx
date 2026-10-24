import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center py-24 px-6">
      <SEO
        title="Page Not Found (404) | Luxefiz"
        description="The page you are looking for might have been moved, renamed, or is temporarily unavailable."
        canonicalUrl="https://www.luxefiz.com/404"
      />
      <div className="text-center max-w-xl mx-auto space-y-6">
        <span className="badge-pill badge-pill-purple">Error 404</span>
        <h1 className="text-5xl md:text-7xl font-display font-black text-obsidian tracking-tight">
          Page Not Found
        </h1>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          The page you requested may have moved during our recent website upgrade or is no longer available. Let's get you back on track.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">
            Return to Homepage
          </Link>
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>

        <div className="pt-8 text-xs text-gray-500 border-t border-gray-100">
          Need immediate assistance? Call us directly at{' '}
          <a href="tel:+916382839617" className="font-bold text-luxefiz-purple hover:underline">
            +91 63828 39617
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
