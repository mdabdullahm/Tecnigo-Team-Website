import React from 'react';

const projectsData = [
  {
    img1: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
    title1: 'Fuel Pro',
    desc1: 'Fuel Pro is a robust web application that simplifies fuel management for businesses. It offers real-time tracking, spending insights, and transaction logs, enabling more efficient and cost-effective fuel usage.',
    link1: '#' // ভবিষ্যতে প্রজেক্ট ডিটেইল পেজের লিঙ্ক এখানে যোগ করা যাবে
  },
  {
    img2: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    title2: 'IntelliHealth',
    desc2: 'IntelliHealth delivers AI-powered, personalized health consultations, redefining the future of healthcare with cutting-edge technology.',
    link2: '#'
  },
  {
    img1: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    title1: 'Pixel Pulse',
    desc1: 'Pixel Pulse is a dynamic platform built for digital agencies, combining project management, real-time analytics, and task tracking into one seamless interface.',
    link1: '#'
  },
  {
    img2: 'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg',
    title2: 'Fleet Hub',
    desc2: 'Fleet Hub offers seamless vehicle and workforce management, providing real-time tracking and communication to optimize business operations effortlessly.',
    link2: '#'
  },
];

// একটি সিঙ্গেল প্রজেক্ট কার্ডের জন্য কম্পোনেন্ট
const ProjectCard = ({ image, title, description, link }) => {
  return (
    <a href={link} className="block group">
      {/* --- ছবির কন্টেইনার, যা হোভার ইফেক্ট নিয়ন্ত্রণ করবে --- */}
      <div className="overflow-hidden rounded-lg mb-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-cover aspect-[4/3] transform transition-transform duration-500 ease-in-out group-hover:scale-110" 
        />
      </div>
      
      {/* --- টেক্সট কন্টেন্ট --- */}
      <div>
        <h3 className="text-3xl font-bold mb-3 group-hover:text-gray-300 transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </a>
  );
};


const ProjectGrid = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              {project.img1 && (
                <ProjectCard
                  image={project.img1}
                  title={project.title1}
                  description={project.desc1}
                  link={project.link1}
                />
              )}
              {project.img2 && (
                <ProjectCard
                  image={project.img2}
                  title={project.title2}
                  description={project.desc2}
                  link={project.link2}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;