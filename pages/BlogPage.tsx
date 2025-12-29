import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { blogPosts, BlogPost } from '../data/blogPosts';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    return (
        <Link to={`/blog/${post.slug}`} className="group block h-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-bold text-brand-purple tracking-wider uppercase">{post.category}</span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-playfair font-bold text-brand-charcoal mb-4 text-brand-charcoal group-hover:text-brand-purple transition-colors duration-300">
                        {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-brand-charcoal group-hover:text-brand-purple transition-colors mt-auto">
                        Read Article
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
};

const BlogPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Insights | Luxefiz - Building Business Trust Online</title>
                <meta name="description" content="Practical insights on professional websites, online presence, and business growth for companies in Tamil Nadu." />
            </Helmet>

            <div className="bg-white min-h-screen">
                {/* SECTION 1: INTRO */}
                <div className="bg-brand-charcoal text-white pt-32 pb-20 px-6 md:px-12 lg:px-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
                            Insights on Building a <span className="text-brand-gray">Strong Online Presence</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            We share practical insights on websites, online presence, and how businesses can grow visibility and trust online. No hype, just clarity.
                        </p>
                    </div>
                </div>

                {/* SECTION 2: BLOG POSTS */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>

                {/* SECTION 3: BOTTOM CTA */}
                <div className="bg-gray-50 py-20 px-6 text-center border-t border-gray-100">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-playfair font-bold text-brand-charcoal mb-4">
                            Looking to build a professional online presence?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Start a conversation with Luxefiz essentially.
                        </p>
                        <a href="https://api.whatsapp.com/send?phone=916382839617" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-brand-purple text-white font-semibold rounded hover:bg-opacity-90 transition-all">
                            Start a Conversation
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
