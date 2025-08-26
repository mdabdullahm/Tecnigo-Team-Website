// src/components/blog/BlogHero.jsx

import React from 'react';

const BlogHero = () => {
    return (
        <section className="bg-white pt-32 pb-16 text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
                    Insights & Innovations
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Explore expert tips, industry trends, and the latest updates from ZAAG Systems to stay ahead in the world of technology and innovation.
                </p>
            </div>
        </section>
    );
};

export default BlogHero;