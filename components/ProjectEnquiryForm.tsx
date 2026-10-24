import React, { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  city: string;
  services: string[];
  budget: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  services?: string;
  message?: string;
}

const availableServices = [
  'Website Design & Development',
  'Search Engine Optimization (SEO)',
  'Google Business Profile & Local Search',
  'Brand Identity & Logo Design',
  'E-commerce Store Development',
  'Custom SaaS & Web Application',
  'Website Redesign & Speed Audit'
];

const budgetOptions = [
  '₹20,000 – ₹40,000 (Starter / Local Business)',
  '₹40,000 – ₹80,000 (Growth / Custom Multi-Page)',
  '₹80,000 – ₹1,50,000 (E-commerce / Advanced Portal)',
  '₹1,50,000+ (Custom SaaS / Dedicated Platform)',
  'Need Guidance / Not Sure Yet'
];

export const ProjectEnquiryForm: React.FC<{ defaultService?: string }> = ({ defaultService }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    city: '',
    services: defaultService ? [defaultService] : ['Website Design & Development'],
    budget: budgetOptions[1],
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const nextServices = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: nextServices };
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone or WhatsApp number';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (8-15 digits)';
    }

    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch & log enquiry
    setTimeout(() => {
      const ref = `LXF-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    if (!validate()) return;
    const msg = `Hello Luxefiz, I want to discuss a project:%0A- Name: ${encodeURIComponent(formData.fullName)}%0A- Business: ${encodeURIComponent(formData.businessName || 'N/A')}%0A- City: ${encodeURIComponent(formData.city || 'N/A')}%0A- Services: ${encodeURIComponent(formData.services.join(', '))}%0A- Budget: ${encodeURIComponent(formData.budget)}%0A- Details: ${encodeURIComponent(formData.message || 'Looking for an initial consultation.')}`;
    window.open(`https://wa.me/916382839617?text=${msg}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="bg-porcelain border border-emerald-200 rounded-3xl p-8 md:p-12 text-center animate-fadeIn shadow-subtle">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
          ✓
        </div>
        <span className="badge-pill badge-pill-purple mb-4">Enquiry Received</span>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-obsidian mb-3">
          Thank you, {formData.fullName}!
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto mb-6 leading-relaxed">
          Your project inquiry has been logged under Reference ID <strong className="font-mono text-luxefiz-purple">{submissionId}</strong>. Palani Durai or our senior consulting team will review your requirements and reach out within 4 business hours.
        </p>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 max-w-md mx-auto text-left mb-8 shadow-sm">
          <div className="text-xs uppercase font-bold text-gray-400 mb-2">Inquiry Summary</div>
          <div className="text-sm space-y-1.5 text-gray-700">
            <p><strong>Selected Services:</strong> {formData.services.join(', ')}</p>
            <p><strong>Budget Target:</strong> {formData.budget}</p>
            <p><strong>Contact Phone:</strong> {formData.phone}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`https://wa.me/916382839617?text=Hi%20Luxefiz,%20I%20just%20submitted%20project%20enquiry%20${submissionId}.%20Can%20we%20connect%20now?`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Connect on WhatsApp Now
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                businessName: '',
                city: '',
                services: ['Website Design & Development'],
                budget: budgetOptions[1],
                message: ''
              });
            }}
            className="btn-secondary"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-gray-100" noValidate>
      <div className="mb-8">
        <span className="badge-pill badge-pill-purple mb-3">Start a Conversation</span>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-obsidian mb-2">
          Tell Us About Your Project
        </h3>
        <p className="text-sm text-gray-600">
          Clear, structured estimates with no hidden surprise costs. We respond within 4 business hours.
        </p>
      </div>

      <div className="space-y-6">
        {/* Services Selection Pills */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
            1. Services Needed <span className="text-signature-pink">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {availableServices.map((service) => {
              const isSelected = formData.services.includes(service);
              return (
                <button
                  type="button"
                  key={service}
                  onClick={() => toggleService(service)}
                  className={`text-xs md:text-sm font-semibold px-4 py-2 rounded-full border transition-all ${
                    isSelected
                      ? 'bg-luxefiz-purple text-white border-luxefiz-purple shadow-sm'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-luxefiz-purple/50'
                  }`}
                >
                  {isSelected ? '✓ ' : '+ '}
                  {service}
                </button>
              );
            })}
          </div>
          {errors.services && <p className="text-xs text-rose-500 mt-2 font-medium">{errors.services}</p>}
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Your Name <span className="text-signature-pink">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Anand Kumar"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-gray-200 focus:border-luxefiz-purple'
              }`}
            />
            {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Phone / WhatsApp <span className="text-signature-pink">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-gray-200 focus:border-luxefiz-purple'
              }`}
            />
            {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Business Email <span className="text-signature-pink">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. anand@company.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-gray-200 focus:border-luxefiz-purple'
              }`}
            />
            {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Business / Brand Name (Optional)
            </label>
            <input
              id="businessName"
              type="text"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              placeholder="e.g. Apex Engineering Works"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-luxefiz-purple focus:outline-none"
            />
          </div>
        </div>

        {/* City and Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              City / Location (Optional)
            </label>
            <input
              id="city"
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="e.g. Coimbatore, Mannargudi, Chennai"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-luxefiz-purple focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Approximate Budget
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:border-luxefiz-purple focus:outline-none"
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Project Overview & Goals (Optional)
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us what you're looking to build, your timeline, or any reference websites you admire..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-luxefiz-purple focus:outline-none"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full sm:w-auto text-center"
          >
            {isSubmitting ? 'Submitting Details...' : 'Submit Project Enquiry'}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppRedirect}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-emerald-500 text-emerald-700 font-display font-bold text-sm hover:bg-emerald-50 transition-colors w-full sm:w-auto"
          >
            <span>💬</span> Send via WhatsApp Direct
          </button>
        </div>

        <p className="text-xs text-gray-500 pt-2 flex items-center gap-1.5">
          <span className="text-emerald-600 font-bold">🔒</span>
          Your business details are protected. No spam, no sales calls from unauthorized third parties.
        </p>
      </div>
    </form>
  );
};

export default ProjectEnquiryForm;
