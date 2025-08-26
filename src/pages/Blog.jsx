// src/pages/Blog.jsx

import React from 'react';
import BlogHero from '../components/blog/BlogHero';
import BlogGrid from '../components/blog/BlogGrid';
import BlogContact from '../components/blog/BlogContact'; // <-- নতুন ইম্পোর্ট

const Blog = () => {
    return (
        <div>
            <BlogHero />
            <BlogGrid />
            <BlogContact /> {/* <-- নতুন কম্পונেন্ট যুক্ত করা হলো */}
        </div>
    );
};

export default Blog;