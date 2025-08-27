// src/pages/Blog.jsx

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { ArrowUpRight } from 'lucide-react';

// --- ব্লগ পোস্টের ডেটা (অপরিবর্তিত) ---
const allPosts = [
    { image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Software Development', title: 'Property Management Software: A Complete Guide for 2025', author: 'Tecnigo Team', date: 'October 26, 2024', readTime: '8 min read', excerpt: 'Discover the essential features, development costs, and benefits of creating a modern property management system.', isFeatured: true, },
    { image: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Web Development', title: 'B2B Ecommerce Website Development: Full Guide for 2025', author: 'Jane Doe', date: 'October 22, 2024', readTime: '10 min read', excerpt: 'Learn the key steps and strategies for building a successful B2B e-commerce platform that drives sales.' },
    { image: 'https://i.ibb.co/MDpj5S88/download-2.jpg', category: 'UI/UX Design', title: 'Top 10 UI/UX Design Trends to Watch in the Coming Year', author: 'John Smith', date: 'October 18, 2024', readTime: '7 min read', excerpt: 'Stay ahead of the curve with these upcoming design trends that will shape user experiences.' },
    { image: 'https://images.pexels.com/photos/7567228/pexels-photo-7567228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'App Development', title: 'Pharmacy Management App: A Guide for Businesses', author: 'Tecnigo Team', date: 'October 15, 2024', readTime: '9 min read', excerpt: 'Explore the benefits of developing a custom mobile application for pharmacy management and patient care.' },
    { image: 'https://i.ibb.co/d4wrC6pV/images-1.jpg', category: 'Technology', title: 'The Rise of AI in Custom Software Development', author: 'Alex Johnson', date: 'October 10, 2024', readTime: '12 min read', excerpt: 'How artificial intelligence is revolutionizing the way we build, test, and deploy software applications.' },
];

// --- BlogPost Card Component (অপরিবর্তিত) ---
const BlogPostCard = ({ post, isFeatured = false }) => (
    <NavLink to="#" className={`group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100 ${isFeatured ? 'lg:col-span-2' : ''}`}>
        <div className={`grid grid-cols-1 ${isFeatured ? 'lg:grid-cols-2' : ''}`}>
            <div className="overflow-hidden">
                <img src={post.image} alt={post.title} className={`w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ${isFeatured ? 'h-full aspect-video lg:aspect-auto' : 'h-56'}`} />
            </div>
            <div className="p-6 flex flex-col">
                <p className="text-sm font-semibold text-red-600 mb-2">{post.category}</p>
                <h3 className={`font-bold text-gray-800 leading-snug ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{post.title}</h3>
                <p className="text-gray-500 mt-3 text-sm line-clamp-3 flex-grow">{post.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span>By {post.author} on {post.date}</span>
                    <span>{post.readTime}</span>
                </div>
            </div>
        </div>
    </NavLink>
);

// --- Main Blog Page Component ---
const Blog = () => {
    const { setIsContactPopupOpen } = useContext(AppContext); 
    const featuredPost = allPosts.find(p => p.isFeatured);
    const regularPosts = allPosts.filter(p => !p.isFeatured);

    return (
        <div className="bg-gray-50">
            {/* --- Hero Section (অপরিবর্তিত) --- */}
            <section className="bg-white pt-32 pb-0 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">Tech & Innovation Insights</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Explore expert tips, industry trends, and the latest updates from the Tecnigo Team.
                    </p>
                </div>
            </section>

            {/* --- Blog Posts Section (অপরিবর্তিত) --- */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {featuredPost && <BlogPostCard post={featuredPost} isFeatured={true} />}
                        {regularPosts.map((post, index) => (
                            <BlogPostCard key={index} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            {/* --- পরিবর্তন: bg-white pb-24 থেকে bg-gray-50 pb-24 করা হয়েছে --- */}
            <section className="bg-gray-50 pb-24">
                 <div className="container mx-auto px-4">
                    <div className="bg-gray-900 text-white rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold">Have a Project Idea?</h2>
                        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
                            Let's turn your idea into a reality. We'd love to hear about your project and discuss how we can help.
                        </p>
                        <button 
                            onClick={() => setIsContactPopupOpen(true)}
                            className="mt-8 inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105"
                        >
                            Let's Talk <ArrowUpRight size={20} />
                        </button>
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default Blog;