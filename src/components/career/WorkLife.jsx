// src/components/career/WorkLife.jsx

import React from 'react';

// নতুন এবং ভিডিওর সাথে সামঞ্জস্যপূর্ণ ছবির লিঙ্ক
const images = [
    'https://i.ibb.co.com/99RNfYY3/photo-1621692121831-98d5f9a538d3.jpg', // Team celebration
    'https://i.ibb.co.com/DHGvVysV/images-3.jpg', // Team working at laptops
    'https://i.ibb.co.com/ZzhVVx2W/images-4.jpg', // Formal meeting
    'https://i.ibb.co.com/vvj1hL7X/images-5.jpg', // Playing ping pong
    'https://i.ibb.co.com/Zpxr6gn3/photo-1555323912-3526a765162b.jpg', // Team in a swimming pool
    'https://i.ibb.co.com/kgChzYkW/download-10.jpg',  // Coding on a desk
];

const WorkLife = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        We Live, Work & Play
                    </h2>
                </div>

                {/* --- নতুন এবং উন্নত Masonry Grid লেআউট --- */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Column 1 */}
                    <div className="grid gap-4">
                        <div className="aspect-w-3 aspect-h-4">
                            <img className="h-full w-full object-cover rounded-lg shadow-md" src={images[0]} alt="Team celebration" />
                        </div>
                        <div className="aspect-w-3 aspect-h-3">
                            <img className="h-full w-full object-cover rounded-lg shadow-md" src={images[1]} alt="Team working on laptops" />
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className="grid gap-4">
                        <div className="aspect-w-3 aspect-h-3">
                            <img className="h-full w-full object-cover rounded-lg shadow-md" src={images[2]} alt="Formal team meeting" />
                        </div>
                        <div className="aspect-w-3 aspect-h-4">
                            <img className="h-full w-full object-cover rounded-lg shadow-md" src={images[3]} alt="Playing table tennis" />
                        </div>
                    </div>
                    {/* Column 3 */}
                     <div className="grid gap-4">
                        <div className="aspect-w-3 aspect-h-4">
                            <img className="h-full w-full object-cover rounded-lg shadow-md" src={images[4]} alt="Team outing in a pool" />
                        </div>
                        <div className="aspect-w-3 aspect-h-3">
                            <img className="h-full w-full object-cover rounded-lg shadow-md" src={images[5]} alt="Developer coding at desk" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkLife;