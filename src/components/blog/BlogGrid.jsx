// src/components/blog/BlogGrid.jsx

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Blog Posts Data ---
const allPosts = [
    {
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Management Software Development',
        title: 'Property Management Software Development: A Complete Guide for 2025',
        author: 'ZAAG Systems Ltd',
        link: '#',
    },
    {
        image: 'https://images.pexels.com/photos/7567228/pexels-photo-7567228.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Management Software Development',
        title: 'Pharmacy Management Software Development: A Complete Guide for 2025',
        author: 'ZAAG Systems Ltd',
        link: '#',
    },
    {
        image: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Management Software Development',
        title: 'Inventory Management Software Development: A Complete Guide for Businesses in 2025',
        author: 'ZAAG Systems Ltd',
        link: '#',
    },
    {
        image: 'https://i.ibb.co.com/nNSkf42Z/download.jpg',
        category: 'Ecommerce',
        title: 'B2B Ecommerce Website Development: Full Guide for 2025',
        author: 'ZAAG Systems Ltd',
        link: '#',
    },
    {
        image: 'https://i.ibb.co.com/gL1TPwbG/download-1.jpg',
        category: 'Ecommerce',
        title: 'Ecommerce Website Development Cost in 2025: Full Breakdown',
        author: 'ZAAG Systems Ltd',
        link: '#',
    },
    {
        image: 'https://i.ibb.co.com/MDpj5S88/download-2.jpg',
        category: 'Ecommerce',
        title: 'Custom Ecommerce Development: Complete Guide for 2025',
        author: 'ZAAG Systems Ltd',
        link: '#',
    },
    {
        image: 'https://i.ibb.co.com/VYwPBhSd/images.jpg',
        category: 'Industry Reviews',
        title: 'Top 10 IT Company in Bangladesh (2025 Guide)',
        author: 'ZAAG Systems Ltd',
        link: '#',
    },
    {
        image: 'https://i.ibb.co.com/d4wrC6pV/images-1.jpg',
        category: 'Software Development',
        title: 'The Best Programming Languages for Web Development in 2025',
        author: 'ZAAG Systems Ltd',
        link: '#',
    },
    {
        image: 'https://i.ibb.co.com/nM8TrWsB/download-3.jpg',
        category: 'Ecommerce',
        title: 'How to Choose the Best Ecommerce Development Company for Your Business',
        author: 'ZAAG Systems Ltd',
        link: '#',
    },
];

const categories = ['All', 'Ecommerce', 'Industry Reviews', 'Management Software Development', 'Software Development', 'Technology'];

// --- Components ---
const BlogPostCard = ({ image, category, title, author, link }) => (
    <a href={link} className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="overflow-hidden">
            <img src={image} alt={title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">{category}</p>
            <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors">{title}</h3>
            <p className="text-sm text-gray-400 mt-4">Author: {author}</p>
        </div>
    </a>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center items-center gap-4 mt-16 text-gray-600">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50">
                <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
                {pageNumbers.map(number => (
                    <button key={number} onClick={() => onPageChange(number)} className={`h-10 w-10 rounded-full text-sm font-semibold transition-colors ${currentPage === number ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}>
                        {number}
                    </button>
                ))}
            </div>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50">
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

const BlogGrid = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    const filteredPosts = useMemo(() => {
        if (activeCategory === 'All') return allPosts;
        return allPosts.filter(post => post.category === activeCategory);
    }, [activeCategory]);

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(1); // Reset to first page on category change
    };

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                                activeCategory === category 
                                ? 'bg-blue-600 text-white shadow-md' 
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentPosts.map((post, index) => (
                        <BlogPostCard key={index} {...post} />
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                     <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                )}
            </div>
        </section>
    );
};

export default BlogGrid;