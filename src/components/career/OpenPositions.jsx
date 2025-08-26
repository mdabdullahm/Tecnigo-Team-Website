// src/components/career/OpenPositions.jsx

import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, Clock, MapPin, Briefcase, ArrowUpRight } from 'lucide-react';

// --- Job Data ---
const jobListings = [
    {
        title: 'Software Engineer',
        department: 'Mobile Development',
        experience: '3/5 years of minimum experience needed.',
        type: 'Full-time',
        location: 'Dhaka, Bangladesh',
        salary: '80k - 100k',
        deadline: '21 June-2021',
        link: '#',
    },
    {
        title: 'UI/UX Designer',
        department: 'Design',
        experience: '2+ years of experience in UI/UX design.',
        type: 'Full-time',
        location: 'Remote',
        salary: '70k - 90k',
        deadline: '30 July-2024',
        link: '#',
    },
    {
        title: 'Senior React Developer',
        department: 'Web Development',
        experience: '5+ years of experience with React.',
        type: 'Full-time',
        location: 'Dhaka, Bangladesh',
        salary: '120k - 150k',
        deadline: '15 August-2024',
        link: '#',
    },
    {
        title: 'SQA Engineer',
        department: 'Quality Assurance',
        experience: '3+ years in software quality assurance.',
        type: 'Full-time',
        location: 'Dhaka, Bangladesh',
        salary: '60k - 80k',
        deadline: '25 July-2024',
        link: '#',
    },
];

const departments = ['All Department', 'Mobile Development', 'Web Development', 'Design', 'Quality Assurance'];

// --- Job Card Component ---
const JobCard = ({ title, department, experience, type, location, salary, deadline, link }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200/80 hover:shadow-lg hover:border-blue-500 transition-all duration-300 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="text-sm text-gray-600 font-medium">{department}</span>
                </div>
            </div>
            <a href={link} className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline whitespace-nowrap">
                Apply Now <ArrowUpRight size={16} />
            </a>
        </div>
        <p className="text-gray-500">{experience}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2"><Briefcase size={16} /><span>{type}</span></div>
            <div className="flex items-center gap-2"><MapPin size={16} /><span>{location}</span></div>
            <div className="flex items-center gap-2"><Briefcase size={16} /><span>{salary}</span></div>
            <p className="text-sm text-gray-400 ml-auto whitespace-nowrap">Application Deadline: {deadline}</p>
        </div>
    </div>
);


const OpenPositions = () => {
    const [selectedDept, setSelectedDept] = useState('All Department');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredJobs = useMemo(() => {
        return jobListings.filter(job => {
            const matchesDept = selectedDept === 'All Department' || job.department === selectedDept;
            const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesDept && matchesSearch;
        });
    }, [selectedDept, searchTerm]);

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
                    Current Open Positions
                </h2>

                {/* --- Filters --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                    {/* Department Dropdown */}
                    <div className="relative">
                        <select 
                            value={selectedDept}
                            onChange={(e) => setSelectedDept(e.target.value)}
                            className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Careers"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 pl-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                </div>

                {/* --- Job Listings --- */}
                <div className="space-y-6 max-w-5xl mx-auto">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => <JobCard key={index} {...job} />)
                    ) : (
                        <p className="text-center text-gray-500 py-10">No open positions match your criteria.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OpenPositions;