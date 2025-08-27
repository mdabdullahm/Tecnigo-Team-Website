// src/pages/Career.jsx

import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Briefcase, MapPin, ArrowUpRight, Search, ChevronDown } from 'lucide-react';

// --- চাকরির ডেটা ---
const jobListings = [
    {
        title: 'Senior Frontend Developer (React)',
        department: 'Web Development',
        type: 'Full-time',
        location: 'Dhaka, Bangladesh',
    },
    {
        title: 'UI/UX Designer',
        department: 'Design',
        type: 'Full-time',
        location: 'Remote',
    },
    {
        title: 'Senior Backend Developer (Node.js)',
        department: 'Web Development',
        type: 'Full-time',
        location: 'Dhaka, Bangladesh',
    },
    {
        title: 'SQA Engineer',
        department: 'Quality Assurance',
        type: 'Full-time',
        location: 'Dhaka, Bangladesh',
    },
    {
        title: 'Mobile App Developer (Flutter)',
        department: 'App Development',
        type: 'Full-time',
        location: 'Remote',
    },
];

const departments = ['All Departments', 'Web Development', 'App Development', 'Design', 'Quality Assurance'];

// --- Job Card Component ---
const JobCard = ({ title, department, type, location }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <p className="text-sm font-semibold text-red-600 mb-1">{department}</p>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mt-3">
                <div className="flex items-center gap-2"><Briefcase size={16} /><span>{type}</span></div>
                <div className="flex items-center gap-2"><MapPin size={16} /><span>{location}</span></div>
            </div>
        </div>
        <NavLink to="#" className="mt-4 sm:mt-0 flex-shrink-0 flex items-center gap-2 bg-red-50 text-red-600 font-semibold px-5 py-2.5 rounded-full hover:bg-red-100 transition-colors">
            Apply Now <ArrowUpRight size={16} />
        </NavLink>
    </div>
);


// --- Main Career Page Component ---
const Career = () => {
    const [selectedDept, setSelectedDept] = useState('All Departments');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredJobs = useMemo(() => {
        return jobListings.filter(job => {
            const matchesDept = selectedDept === 'All Departments' || job.department === selectedDept;
            const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesDept && matchesSearch;
        });
    }, [selectedDept, searchTerm]);

    return (
        <div className="bg-white">
            {/* --- Hero Section --- */}
            <section className="relative bg-gray-900 text-white pt-32 pb-20 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Join Our Team" className="w-full h-full object-cover opacity-30"/>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold">Join Our Mission</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                        We're looking for passionate creators and problem-solvers to help us build the future of technology. Be a part of a team that values innovation, collaboration, and growth.
                    </p>
                </div>
            </section>

            {/* --- Open Positions Section --- */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
                        Current Openings
                    </h2>

                    {/* --- Filters --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by job title..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 pl-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                        <div className="relative">
                            <select 
                                value={selectedDept}
                                onChange={(e) => setSelectedDept(e.target.value)}
                                className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* --- Job Listings --- */}
                    <div className="space-y-6 max-w-5xl mx-auto">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job, index) => <JobCard key={index} {...job} />)
                        ) : (
                            <div className="text-center bg-white p-10 rounded-2xl shadow-md">
                                <h3 className="text-xl font-bold text-gray-700">No Open Positions Found</h3>
                                <p className="text-gray-500 mt-2">
                                    There are no openings that match your criteria right now. Check back later or send us your resume!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
             {/* --- Why Join Us Section --- */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16">Why Join Tecnigo Team?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h3 className="text-xl font-bold">Growth Opportunities</h3>
                            <p className="mt-2 text-gray-600">We invest in our team's professional development with continuous learning and career advancement opportunities.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Innovative Projects</h3>
                            <p className="mt-2 text-gray-600">Work on exciting and challenging projects with cutting-edge technologies that make a real-world impact.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Collaborative Culture</h3>
                            <p className="mt-2 text-gray-600">Be a part of a supportive and inclusive environment where every voice is heard and teamwork thrives.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;