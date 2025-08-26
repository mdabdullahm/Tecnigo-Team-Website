// src/pages/ServiceDetails.jsx

import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

// কম্পונেন্টগুলো ইম্পোর্ট করা হচ্ছে
import WhyZaag from '../components/service-details/WhyZaag';
// import AchievementBanner from '../components/home/AchievementBanner'; // <-- নতুন ইম্পোর্ট
import FeaturePoints from '../components/service-details/FeaturePoints';
import Frameworks from '../components/service-details/Frameworks';
import HiringModels from '../components/service-details/HiringModels';
import TalentPool from '../components/service-details/TalentPool';
import GlobalPresence from '../components/service-details/GlobalPresence';
import RecruitmentProcess from '../components/service-details/RecruitmentProcess';
import ServiceTestimonial from '../components/service-details/ServiceTestimonial';

// --- Hero Section Component ---
const ServiceHero = ({ title, description, imageUrl }) => {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left animate-fade-in-up">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">{title}</h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">{description}</p>
                    <NavLink 
                        to="/contact"
                        className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
                    >
                        Hire Now
                    </NavLink>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img src={imageUrl} alt={title} className="max-w-md w-full animate-fade-in" style={{ animationDelay: '0.3s' }}/>
                </div>
            </div>
        </section>
    );
};

// --- সম্পূর্ণ ডেটাবেস ---
// (allServicesData অবজেক্টটি আগের মতোই থাকবে, এখানে আর পেস্ট করছি না)
const allServicesData = {
    'hire-front-end-developers': {
        hero: {
            title: "Hire Expert Front-End Developers",
            description: "Unlock the potential of your website with our skilled front-end developers. We create captivating user interfaces and ensure smooth functionality.",
            imageUrl: "https://i.ibb.co.com/g1ZrG6K/download.jpg",
        },
        featurePoints: {
            title: 'Out-staffing Front-End Developers for Dynamic Web Experiences',
            list: [
                { title: 'Expertise in Modern Web Technologies', description: 'Access front-end developers skilled in the latest web technologies and frameworks.' },
                { title: 'Seamless Integration & Collaboration', description: 'Our developers seamlessly integrate into your team, ensuring smooth collaboration.' },
                { title: 'Scalable Team Capacity', description: 'Scale your front-end team based on project requirements, adding or reducing resources.' },
                { title: 'Quality Assurance and Testing', description: 'Our developers follow best practices in code quality, optimization, and testing.' },
                { title: 'Responsive and Mobile-First Approach', description: 'Leverage our expertise in responsive web design to create engaging user experiences.' },
                { title: 'Continuous Learning and Adaptability', description: 'Our developers stay up-to-date with the latest industry trends and technologies.' }
            ]
        },
        frameworks: [
            { name: 'Javascript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Angular JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
            { name: 'Php', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
            { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
            { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'Material UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
            { name: 'Vue JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
            { name: 'Next JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'Node JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Codeignitor', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
            { name: 'Sass', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        ]
    },
    'hire-back-end-developers': {
        hero: {
            title: "Hire Expert Back-End Developers",
            description: "Harness the Expertise of our Backend Developers to Propel Your Business Forward. Our Skilled Professionals Will Empower Your Projects with Efficient and Scalable Backend Solutions.",
            imageUrl: "https://i.ibb.co/1nQ1Z9H/backend.png",
        },
        featurePoints: {
            title: 'Out-staffing Back-End Developers for Robust Web Solutions',
            list: [
                { title: 'Advanced Back-End Technologies', description: 'Access back-end developers proficient in a wide range of programming languages and frameworks.' },
                { title: 'Data Management and Integration', description: 'Our developers specialize in data management, API integrations, and server-side logic.' },
                { title: 'Secure and Efficient Coding Practices', description: 'Benefit from our developers’ expertise in secure coding, data protection, and performance optimization.' },
                { title: 'System Architecture and Scalability', description: 'Leverage our developers’ knowledge in designing scalable architectures that can handle increased user traffic.' },
                { title: 'Seamless Collaboration', description: 'Our outstaffed back-end developers work closely with your team, fostering a collaborative environment.' },
                { title: 'Continuous Improvement and Optimization', description: 'Our developers proactively identify areas for optimization, performance enhancement, and system refinement.' }
            ]
        },
        frameworks: [
            { name: 'Node JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Express JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
            { name: 'Nest JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
            { name: 'ASP.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
            { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
            { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
            { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
            { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
            { name: 'Ruby', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
            { name: 'Meteor', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-original.svg' },
            { name: 'Next JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'CakePHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg' },
        ]
    },
    'hire-ui-ux-developers': {
        hero: {
            title: "Hire Expert UI/UX Designers",
            description: "Elevate User Experiences to New Heights with our UI/UX Designers. Our Creative Experts Will Collaborate with You to Create Intuitive and Engaging Interfaces.",
            imageUrl: "https://i.ibb.co/hK7Jv7k/ui-ux-design.png",
        },
        featurePoints: {
            title: 'Out-staffing UI/UX Designers for Exceptional Design Solutions',
            list: [
                { title: 'Access Top-Tier Design Talent', description: 'Tap into our network of highly skilled and experienced UI/UX designers, handpicked for their expertise.' },
                { title: 'Flexible Scalability', description: 'Scale your design team up or down based on project requirements, ensuring you have the right resources.' },
                { title: 'Cost-Effective Solution', description: 'Out-staffing allows you to optimize your design budget by avoiding long-term hiring commitments.' },
                { title: 'Quick Time-to-Market', description: 'Leverage our outstaffed UI/UX designers to accelerate your design process, delivering innovative solutions faster.' },
                { title: 'Diverse Skill Set', description: 'Benefit from a diverse pool of designers with expertise in various design tools, methodologies, and platforms.' },
                { title: 'Collaborative Partnership', description: 'Our outstaffed UI/UX designers seamlessly integrate with your team, fostering open communication and knowledge sharing.' }
            ]
        },
        frameworks: [
            { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'Adobe XD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
            { name: 'Sketch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' },
            { name: 'Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
            { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
            { name: 'InVision', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/invision/invision-original.svg' },
            { name: 'Zeplin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zeplin/zeplin-original.svg' },
            { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
            { name: 'After Effects', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg' },
            { name: 'Premiere Pro', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg' },
            { name: 'Blender', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
            { name: 'Slack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
        ]
    },
    'hire-sqa-engineers': {
        hero: {
            title: "Hire Expert SQA Engineers",
            description: "Ensure the Quality and Reliability of Your Software with our SQA Engineers. Our Experienced Professionals Utilize Industry Best Practices and Cutting-Edge Tools.",
            imageUrl: "https://i.ibb.co/6yJ2qM7/sqa-engineer.png",
        },
        featurePoints: {
            title: 'Out-staffing SQA Engineers for Robust Software Quality Assurance',
            list: [
                { title: 'Expertise in Testing Methodologies', description: 'Access SQA engineers proficient in various testing methodologies, including manual, automated, and performance testing.' },
                { title: 'Thorough Bug Detection and Reporting', description: 'Our SQA engineers meticulously test software applications, detecting and reporting bugs to help improve overall product quality.' },
                { title: 'Test Planning and Execution', description: 'Benefit from our SQA engineers’ skills in test planning, test case creation, and test execution.' },
                { title: 'Performance and Security Testing', description: 'Our SQA engineers specialize in performance testing and security testing, ensuring high-performance standards.' },
                { title: 'Collaboration and Communication', description: 'Our SQA engineers work closely with your development team, fostering effective communication and collaboration.' },
                { title: 'Continuous Improvement', description: 'Our engineers stay updated with the latest testing tools and methodologies to provide cutting-edge quality assurance.' }
            ]
        },
        frameworks: [
            { name: 'Selenium', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
            { name: 'Jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
            { name: 'Postman', logo: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
            { name: 'Cypress', logo: 'https://www.svgrepo.com/show/373523/cypress.svg' },
            { name: 'JMeter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jmeter/jmeter-original.svg' },
            { name: 'TestRail', logo: 'https://www.svgrepo.com/show/374121/testrail.svg' },
            { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
            { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'Trello', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
            { name: 'Katalon', logo: 'https://www.svgrepo.com/show/373722/katalon.svg' },
            { name: 'Appium', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appium/appium-original.svg' },
        ]
    },
    'hire-mobile-app-developers': {
        hero: {
            title: "Hire Expert Mobile App Developers",
            description: "Unleash the Potential of Mobile Apps with our Dedicated Developers. Our Team Delivers Robust and User-Friendly Mobile Applications for iOS and Android Platforms.",
            imageUrl: "https://i.ibb.co/L51Jd5x/mobile-app-dev.png",
        },
        featurePoints: {
            title: 'Out-staffing Mobile Application Developers for Engaging Mobile Experiences',
            list: [
                { title: 'Expertise in Cross-Platform Development', description: 'Access mobile app developers skilled in cross-platform frameworks like React Native and Flutter.' },
                { title: 'User-Centric Mobile Experiences', description: 'Our developers prioritize user experience, designing intuitive and visually appealing interfaces.' },
                { title: 'Integration and Connectivity', description: 'Leverage our expertise in integrating mobile apps with various APIs, databases, and third-party services.' },
                { title: 'Performance and Optimization', description: 'Our developers follow best practices in code optimization, performance tuning, and memory management.' },
                { title: 'Responsive Design and Adaptability', description: 'Benefit from our skills in responsive design, creating mobile apps that adapt to different screen sizes.' },
                { title: 'Agile Development Methodology', description: 'Our developers embrace agile practices, allowing for iterative development and quick feedback loops.' }
            ]
        },
        frameworks: [
            { name: 'Apple', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
            { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
            { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
            { name: 'Object C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg' },
            { name: 'Ionic', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
            { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
            { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
            { name: 'Xamarin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg' },
            { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
            { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
            { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        ]
    },
    'explore-all-resources': {
        hero: {
            title: "Exceptional Global Tech Talent, Hire & Pay",
            description: "Access a vast pool of pre-vetted tech professionals. We simplify the process of hiring and managing remote talent, ensuring a perfect fit for your projects.",
            imageUrl: "https://i.ibb.co/6gT2n5P/explore-all.png",
        },
        featurePoints: null,
        frameworks: null,
    }
};

// --- মূল পেজ কম্পונেন্ট ---
const ServiceDetails = () => {
    const { serviceId } = useParams();
    
    const currentServiceId = serviceId === 'resources' ? 'explore-all-resources' : serviceId;
    const serviceData = allServicesData[currentServiceId] || allServicesData['hire-front-end-developers'];

    return (
        <div>
            {serviceData && (
                <>
                    <ServiceHero 
                        title={serviceData.hero.title} 
                        description={serviceData.hero.description}
                        imageUrl={serviceData.hero.imageUrl}
                    />
                    
                    <WhyZaag />
                    
                    {/* <AchievementBanner /> */}
                    
                    {serviceData.featurePoints && (
                        <FeaturePoints 
                            title={serviceData.featurePoints.title}
                            features={serviceData.featurePoints.list}
                        />
                    )}
                    
                    {serviceData.frameworks && (
                        <Frameworks 
                            frameworks={serviceData.frameworks}
                        />
                    )}
                    
                    <HiringModels />
                    <TalentPool />
                    <GlobalPresence />
                    <RecruitmentProcess />
                    <ServiceTestimonial />
                </>
            )}
        </div>
    );
};

export default ServiceDetails;