import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <>
      <SEO
        title={`${post.title} | Luxefiz Insights`}
        description={post.excerpt}
        canonicalUrl={`https://www.luxefiz.com/blog/${post.slug}`}
        type="article"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": "2025-10-12",
            "author": {
              "@type": "Person",
              "name": "Palani Durai",
              "url": "https://www.luxefiz.com/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Luxefiz",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.luxefiz.com/luxefiz-logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.luxefiz.com/blog/${post.slug}`
            }
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://www.luxefiz.com/blog/${post.slug}`
              }
            ]
          }
        ]}
      />

      <div className="bg-white min-h-screen pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center space-x-3 text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">
              <span className="badge-pill badge-pill-purple">{post.category}</span>
              <span>&bull;</span>
              <span>{post.date}</span>
              <span>&bull;</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-black text-obsidian leading-tight mb-8">
              {post.title}
            </h1>
            <div className="w-16 h-1 bg-signature-pink mx-auto rounded-full"></div>
          </header>

          {/* Article Body */}
          <div
            className="prose prose-lg prose-purple mx-auto text-gray-700 leading-relaxed font-body space-y-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-obsidian [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-obsidian [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_p]:text-base [&_p]:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Contextual Internal Links */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <h3 className="text-xl font-display font-bold text-obsidian mb-4">Related Solutions</h3>
            <div className="bg-porcelain p-6 rounded-2xl border border-gray-100 space-y-3 text-sm">
              <p>
                Interested in evaluating custom web solutions? Explore our{' '}
                <Link to="/services/website-development" className="text-luxefiz-purple hover:underline font-bold">
                  custom business website development services
                </Link>.
              </p>
              <p>
                Need to evaluate your search visibility? Discover our{' '}
                <Link to="/services/seo" className="text-luxefiz-purple hover:underline font-bold">
                  technical SEO services
                </Link>.
              </p>
              <p>
                Ready to talk with an engineer?{' '}
                <Link to="/contact" className="text-luxefiz-purple hover:underline font-bold">
                  Start a project enquiry
                </Link>.
              </p>
            </div>
          </div>

          {/* Author Byline */}
          <div className="mt-12 p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4">
            <img
              src="/image/meeee.png"
              alt="Palani Durai"
              className="w-14 h-14 rounded-full object-cover object-top border-2 border-luxefiz-purple flex-shrink-0"
            />
            <div>
              <h4 className="font-display font-bold text-sm text-obsidian">Written by Palani Durai</h4>
              <p className="text-xs text-gray-500">
                Founder & Principal Engineer at Luxefiz. Writing on digital systems, Core Web Vitals, and organic search growth for growing businesses.
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPostPage;
