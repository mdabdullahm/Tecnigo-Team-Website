import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Server, AlertTriangle, Fingerprint, Lock, Shield } from 'lucide-react';
import Frameworks from '../components/service-details/Frameworks'; // Frameworks কম্পোনেন্ট পুনরায় ব্যবহার করব

// Hero Section Component
const HeroSection = () => (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-32 pb-20 text-white overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in-up">
                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                    Robust <span className="text-cyan-400">Cyber Security</span> Services
                </h1>
                <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
                    Protect your digital assets with our comprehensive cyber security solutions. We identify vulnerabilities, mitigate risks, and safeguard your business from evolving threats.
                </p>
                <NavLink 
                    to="/contact"
                    className="mt-8 inline-block bg-cyan-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-cyan-600 transition-transform duration-300 transform hover:scale-105"
                >
                    Secure Your Business
                </NavLink>
            </div>
            <div className="flex justify-center">
                <ShieldCheck size={256} className="text-cyan-500 opacity-20 animate-pulse" />
            </div>
        </div>
    </section>
);

// Key Features Component
const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full text-center">
        <div className="inline-block bg-gray-100 text-rose-500 p-4 rounded-full mb-5">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const KeyFeatures = () => {
    const features = [
        { icon: <AlertTriangle size={28} />, title: 'Vulnerability Assessment', description: 'We conduct in-depth scans to identify and prioritize security weaknesses in your systems and applications.' },
        { icon: <Server size={28} />, title: 'Network Security', description: 'Our experts design and implement robust network security measures, including firewalls and intrusion detection systems.' },
        { icon: <Fingerprint size={28} />, title: 'Identity & Access Management', description: 'Secure your data by ensuring only authorized users can access sensitive information through strong authentication.' },
        { icon: <Lock size={28} />, title: 'Data Encryption', description: 'Protect your critical data at rest and in transit with advanced encryption standards and protocols.' },
        { icon: <Shield size={28} />, title: 'Threat Monitoring & Response', description: 'We provide 24/7 monitoring to detect and respond to security incidents in real-time, minimizing potential damage.' },
    ];
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-rose-600 font-semibold uppercase tracking-wider">OUR SERVICES</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Comprehensive Protection for Your Digital Ecosystem
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
                </div>
            </div>
        </section>
    );
};

const CyberSecurityPage = () => {
    // Cyber Security সম্পর্কিত টুলস এবং টেকনোলজি
    const cyberSecurityFrameworks = [
        { name: 'Nessus', logo: 'https://i.postimg.cc/8z7L0J8c/nessus.png' },
        { name: 'Wireshark', logo: 'https://i.postimg.cc/D0B9y28Q/wireshark.png' },
        { name: 'Metasploit', logo: 'https://i.postimg.cc/C5YnFzT0/metasploit.png' },
        { name: 'Snort', logo: 'https://i.postimg.cc/KY22zDq3/snort.png' },
        { name: 'Kali Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kalilinux/kalilinux-original.svg' },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    ];

    return (
        <div>
            <HeroSection />
            <KeyFeatures />
            <Frameworks frameworks={cyberSecurityFrameworks} />
            {/* ভবিষ্যতে এখানে আরও সেকশন যোগ করা যাবে */}
        </div>
    );
};

export default CyberSecurityPage;