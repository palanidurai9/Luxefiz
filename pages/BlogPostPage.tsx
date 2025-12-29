import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{post.title} | Luxefiz Insights</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            <div className="bg-white min-h-screen pt-32 pb-20">
                <article className="max-w-3xl mx-auto px-6 md:px-12">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6 uppercase tracking-widest font-semibold">
                            <span className="text-brand-purple">{post.category}</span>
                            <span>&bull;</span>
                            <span>{post.date}</span>
                            <span>&bull;</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-playfair font-bold text-brand-charcoal leading-tight mb-8">
                            {post.title}
                        </h1>
                        <div className="w-20 h-1 bg-brand-purple mx-auto"></div>
                    </header>

                    {/* Content */}
                    <div
                        className="prose prose-lg prose-purple mx-auto text-gray-700 leading-relaxed font-poppins"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* SECTION 3: INTERNAL LINKING */}
                    <div className="mt-16 pt-10 border-t border-gray-100">
                        <h3 className="text-xl font-bold font-playfair mb-6">Continue Exploring</h3>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 space-y-4">
                            <p>
                                Interested in seeing examples of our work? View our <Link to="/portfolio" className="text-brand-purple hover:underline font-semibold">professional business websites</Link> in our portfolio.
                            </p>
                            <p>
                                Ready to discuss your project? <Link to="/contact" className="text-brand-purple hover:underline font-semibold">Start a conversation</Link> about building a strong online presence.
                            </p>
                            <p>
                                <Link to="/" className="text-gray-500 hover:text-black hover:underline text-sm">Return to Homepage</Link>
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-xl font-playfair font-bold text-brand-charcoal mb-2">
                            Looking to build a professional online presence for your business?
                        </p>
                        <a href="https://api.whatsapp.com/send?phone=916382839617" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-8 py-3 bg-brand-charcoal text-white font-semibold rounded hover:bg-brand-purple transition-all duration-300">
                            Start a Conversation with Luxefiz
                        </a>
                    </div>
                </article>
            </div>
        </>
    );
};

export default BlogPostPage;
