// src/components/home/TechStack.jsx
import React from 'react';
import Marquee from "react-fast-marquee";

const technologies = [
  { name: 'Vue JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Node JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Typescript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  // পরিবর্তন এখানে
  { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' }, 
  { name: 'Ruby', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
];

const TechItem = ({ name, logo }) => (
  <div className="flex flex-col items-center justify-center gap-3 mx-8">
    <img src={logo} alt={`${name} logo`} className="h-12 w-12" />
    <span className="text-sm font-medium text-blue-200">{name}</span>
  </div>
);

const TechStack = () => {
  return (
    <section className="bg-[#001f55] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold">Our Latest Development Technologies</h2>
          </div>
          <div>
            <p className="text-blue-200">
              Zaag System is committed to delivering exceptional solutions by utilizing cutting-edge technology stacks.
            </p>
          </div>
        </div>
      </div>

      <div className="py-8">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
        >
          {technologies.map((tech) => (
            <TechItem key={tech.name} name={tech.name} logo={tech.logo} />
          ))}
        </Marquee>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mt-16 bg-gradient-to-r from-[#0a2a6b] to-[#001f55] rounded-full p-4 flex flex-col md:flex-row justify-between items-center shadow-lg border border-blue-800/50">
          <p className="text-lg font-medium text-center md:text-left mb-4 md:mb-0 md:ml-6">
            Need more services based on your demand?
          </p>
          <a href="/contact" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            Contact us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;