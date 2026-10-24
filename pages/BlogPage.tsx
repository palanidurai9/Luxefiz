import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { blogPosts, BlogPost } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Insights, Technical SEO & Digital Growth Strategies | Luxefiz"
        description="Practical, research-backed guides on business website development, search engine optimization, and conversion strategies for businesses in Tamil Nadu and India."
        canonicalUrl="https://www.luxefiz.com/insights"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Luxefiz Insights & Strategy",
            "url": "https://www.luxefiz.com/insights",
            "description": "Practical guides on web performance, SEO architecture, and business growth."
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
                "name": "Insights",
                "item": "https://www.luxefiz.com/insights"
              }
            ]
          }
        ]}
      />

      {/* Hero */}
      <section className="bg-obsidian text-white pt-32 pb-24 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="badge-pill badge-pill-dark mb-4">Knowledge & Strategy</span>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            Insights on Digital Growth, <br className="hidden md:block" />
            <span className="text-signature-pink">SEO & Modern Engineering</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            No marketing buzzwords or generic AI fluff. Practical, actionable insights on how ambitious businesses build search authority and convert online attention.
          </p>
        </div>
      </section>

      {/* Articles Feed */}
      <section className="py-24 px-6 bg-porcelain">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post: BlogPost) => (
              <article
                key={post.id}
                className="editorial-card p-8 bg-white flex flex-col justify-between h-full group hover:border-luxefiz-purple/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="badge-pill badge-pill-purple text-[11px] py-1 px-3">
                      {post.category}
                    </span>
                    <span className="font-mono">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-display font-bold text-obsidian mb-3 group-hover:text-luxefiz-purple transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-400">{post.date}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-bold text-luxefiz-purple group-hover:text-signature-pink transition-colors flex items-center gap-1"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day Content Roadmap Overview */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="badge-pill badge-pill-purple mb-3">Editorial Pipeline</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-obsidian mb-2">
              Upcoming Research Topics (90-Day Content Plan)
            </h3>
            <p className="text-sm text-gray-600">
              Our ongoing publishing roadmap covering buyer decision guides and regional SEO analyses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm">
            {[
              'How Much Does a Business Website Cost in Tamil Nadu? (2026 Guide)',
              'Website Design vs Custom Development: What Ambitious Businesses Need',
              'How to Choose a Website Development Company in Coimbatore',
              'Why Small Businesses Need a Dedicated Website Over an Instagram Page',
              'The Complete Google Business Profile Optimization Checklist',
              'Local SEO vs Traditional SEO: A Practical Guide for Regional Retailers',
              'Website Redesign Checklist: 7 Warning Signs Your Site is Losing Leads',
              'Core Web Vitals Explained: How Site Speed Directly Impacts Rankings'
            ].map((topic, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-2.5">
                <span className="font-mono text-luxefiz-purple font-bold">0{i + 1}.</span>
                <span className="text-gray-700 font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
