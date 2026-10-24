import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import BackToTopButton from './components/BackToTopButton';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

// Dedicated Service Pages
import WebsiteDevelopmentServicePage from './pages/services/WebsiteDevelopmentServicePage';
import SeoServicePage from './pages/services/SeoServicePage';
import GoogleBusinessProfileServicePage from './pages/services/GoogleBusinessProfileServicePage';
import DigitalMarketingServicePage from './pages/services/DigitalMarketingServicePage';
import BrandingServicePage from './pages/services/BrandingServicePage';
import EcommerceServicePage from './pages/services/EcommerceServicePage';
import SaasDevelopmentServicePage from './pages/services/SaasDevelopmentServicePage';

// Location Hubs & 404
import CoimbatorePage from './pages/locations/CoimbatorePage';
import MannargudiPage from './pages/locations/MannargudiPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="font-body flex flex-col min-h-screen bg-white text-obsidian antialiased selection:bg-signature-pink selection:text-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Core Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          
          {/* Dedicated Service Routes */}
          <Route path="/services/website-development" element={<WebsiteDevelopmentServicePage />} />
          <Route path="/services/seo" element={<SeoServicePage />} />
          <Route path="/services/google-business-profile-optimization" element={<GoogleBusinessProfileServicePage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingServicePage />} />
          <Route path="/services/branding" element={<BrandingServicePage />} />
          <Route path="/services/ecommerce-development" element={<EcommerceServicePage />} />
          <Route path="/services/saas-development" element={<SaasDevelopmentServicePage />} />

          {/* Portfolio & Work (with backward compatibility) */}
          <Route path="/work" element={<PortfolioPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />

          {/* Insights & Blog (with backward compatibility) */}
          <Route path="/insights" element={<BlogPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />

          {/* Trust & Process Pages */}
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Regional Target Locations */}
          <Route path="/locations/coimbatore" element={<CoimbatorePage />} />
          <Route path="/locations/mannargudi" element={<MannargudiPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTopButton />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;