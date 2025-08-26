// src/pages/Career.jsx

import React from 'react';
import CareerHero from '../components/career/CareerHero';
import OpenPositions from '../components/career/OpenPositions';
import WorkLife from '../components/career/WorkLife'; // <-- নতুন ইম্পোর্ট

const Career = () => {
    return (
        <div>
            <CareerHero />
            <OpenPositions />
            <WorkLife /> {/* <-- নতুন কম্পונেন্ট যুক্ত করা হলো */}
        </div>
    );
};

export default Career;