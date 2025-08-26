// src/components/uiux/CultureMarquee.jsx
import React from 'react';
import Marquee from 'react-fast-marquee';

const images = [
    'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg',
    'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg',
    'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
    'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg',
    'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg'
];

const CultureMarquee = () => {
    return (
        <section className="py-20 bg-white">
            <Marquee gradient={false} speed={50}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Culture image ${index + 1}`} className="w-80 h-96 object-cover rounded-lg shadow-lg mx-4" />
                ))}
            </Marquee>
        </section>
    );
};

export default CultureMarquee;