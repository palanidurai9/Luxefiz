import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ProjectEnquiryForm } from '../components/ProjectEnquiryForm';

interface StepDetail {
  number: string;
  title: string;
  phase: string;
  summary: string;
  deliverables: string[];
  decisionPoint: string;
}

const stepsData: StepDetail[] = [
  {
    number: '01',
    title: 'Discover & Understand',
    phase: 'Research & Intent Analysis',
    summary: 'We delve into your commercial objectives, audience queries, and regional competitors in Coimbatore, Tamil Nadu, or across India. We uncover exactly what your prospective clients search for and what objections prevent them from hiring you.',
    deliverables: [
      'Buyer intent keyword cluster report',
      'Competitor differentiation audit',
      'Technical requirements & integrations scope'
    ],
    decisionPoint: 'Approval of the core project scope, target keywords, and feature roadmap.'
  },
  {
    number: '02',
    title: 'Strategize & Blueprint',
    phase: 'Information Architecture & Wireframes',
    summary: 'Before designing visual elements or writing a line of code, we blueprint the entire page hierarchy, user pathways, and conversion funnels to ensure maximum clarity and machine readability.',
    deliverables: [
      'Low-fidelity wireframe blueprints',
      'Heading hierarchy (H1-H3) & Schema map',
      'High-converting CTA placement plan'
    ],
    decisionPoint: 'Sign-off on page structure and conversion funnels before visual styling begins.'
  },
  {
    number: '03',
    title: 'Design & Build',
    phase: 'Luxe UI/UX & Clean Engineering',
    summary: 'We handcraft the user interface following our Luxe Digital Studio design system. We code lean, semantic HTML5 and modern React components optimized for Core Web Vitals and fluid responsiveness.',
    deliverables: [
      'High-fidelity editorial UI design with custom tokens',
      'Clean React/TypeScript frontend implementation',
      'Mobile-first responsive optimization across devices'
    ],
    decisionPoint: 'Interactive staging preview review and milestone acceptance.'
  },
  {
    number: '04',
    title: 'Launch & Improve',
    phase: 'Validation, Indexing & Growth Support',
    summary: 'We run comprehensive pre-launch audits across SSL, mobile responsiveness, and Core Web Vitals. Upon launch, we submit XML sitemaps to Google Search Console and provide post-launch support.',
    deliverables: [
      'Production deployment on secure cloud hosting',
      'Google Search Console and GA4 configuration',
      'Source code handover & 30-day post-launch support'
    ],
    decisionPoint: 'Live verification and formal project handover.'
  }
];

const ProcessPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Our 4-Step Development Process | Luxefiz"
        description="Discover how Luxefiz plans, designs, builds, and launches high-performance business websites. Transparent milestones, zero guesswork, and predictable outcomes."
        canonicalUrl="https://www.luxefiz.com/process"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How Luxefiz Builds High-Performance Business Websites",
            "step": stepsData.map((s, i) => ({
              "@type": "HowToStep",
              "position": i + 1,
              "name": s.title,
              "text": s.summary
            }))
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
                "name": "Process",
                "item": "https://www.luxefiz.com/process"
              }
            ]
          }
        ]}
      />

      {/* Hero */}
      <section className="bg-obsidian text-white pt-32 pb-24 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="badge-pill badge-pill-dark mb-4">Structured Methodology</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            How We Build Websites That <br className="hidden md:block" />
            <span className="text-signature-pink">Earn Trust & Drive Enquiries</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
            A disciplined 4-step framework engineered to eliminate guesswork, respect project budgets, and deliver measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-24 px-6 bg-porcelain">
        <div className="container mx-auto max-w-5xl space-y-12">
          {stepsData.map((step) => (
            <div
              key={step.number}
              className="editorial-card p-8 md:p-12 bg-white rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl font-black text-luxefiz-purple bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {step.number}
                  </span>
                  <div>
                    <span className="text-xs uppercase font-bold text-signature-pink tracking-wider block">
                      {step.phase}
                    </span>
                    <h2 className="text-2xl font-display font-bold text-obsidian">
                      {step.title}
                    </h2>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-8">
                {step.summary}
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-obsidian mb-3">Key Deliverables</h3>
                  <ul className="space-y-2 text-xs text-gray-600">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-luxefiz-purple mb-2">Decision Point</h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {step.decisionPoint}
                  </p>
                </div>
              </div>
            </div>
          ))}
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

export default ProcessPage;
