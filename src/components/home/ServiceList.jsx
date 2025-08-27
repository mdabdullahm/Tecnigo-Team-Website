// import React, { useState } from 'react';
// import { FiArrowUpRight } from 'react-icons/fi';
// import { NavLink } from 'react-router-dom';

// const services = [
//   {
//     id: 'team-augmentation',
//     title: 'Team Augmentation',
//     description: 'Scale your development team with our vetted developers, designers, and project managers.',
//     // --- পরিবর্তন এখানে ---
//     path: '/services/hire-front-end-developers', // <-- এই লিঙ্কটি এখন ServiceDetails.jsx পেজে যাবে
//     image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },
//   {
//     id: 'custom-software',
//     title: 'Custom Software Development',
//     description: 'Turn ideas into robust digital products with scalable backend and seamless user experiences.',
//     path: '/services/custom-software-development',
//     image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },
//   {
//     id: 'mobile-app',
//     title: 'Mobile App Development',
//     description: 'Build high-performance mobile applications across iOS, Android, Flutter, and React Native.',
//     path: '/services/mobile-app-development',
//     image: 'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },
//   {
//     id: 'mvp-dev',
//     title: 'MVP Development',
//     description: 'Launch faster with a Minimum Viable Product tailored for market validation.',
//     path: '/services/mvp-development',
//     image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },
//   {
//     id: 'web-dev',
//     title: 'Custom Web Development',
//     description: 'Craft beautiful, functional, and SEO-friendly websites aligned with your goals.',
//     path: '/services/web-development',
//     image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },
//   {
//     id: 'ui-ux',
//     title: 'UI UX Design',
//     description: 'Deliver intuitive, stunning user experiences with our design-first approach.',
//     path: '/services/ui-ux-design',
//     image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },
// ];

// // বাকি অংশ অপরিবর্তিত থাকবে
// const ServiceItem = ({ service, isHovered, onHover }) => (
//   <NavLink
//     to={service.path}
//     className="block relative group overflow-hidden border-b border-gray-200 last:border-b-0"
//     onMouseEnter={onHover}
//   >
//     <div
//       className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
//       style={{ backgroundImage: `url(${service.image})` }}
//     >
//       <div className="absolute inset-0 bg-black/60"></div>
//     </div>
//     <div className="relative z-10 py-10 px-8 flex flex-col md:flex-row justify-between items-center transition-all duration-300">
//       <div className="flex-1 text-center md:text-left">
//         <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
//           {service.title}
//         </h3>
//         <p className="text-gray-500 group-hover:text-gray-200 mt-2 max-w-xl transition-colors duration-300">
//           {service.description}
//         </p>
//       </div>
//       <div className="mt-6 md:mt-0 flex-shrink-0 flex items-center gap-4 transition-all duration-500 transform md:translate-x-16 group-hover:translate-x-0">
//         <div className={`flex items-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
//           <div className="h-14 w-14 bg-blue-600 rounded-full flex items-center justify-center text-white">
//             <FiArrowUpRight size={28} />
//           </div>
//           <span className="text-white font-semibold text-lg">Explore Service</span>
//         </div>
//         <div className={`absolute right-8 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
//           <div className="h-14 w-14 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-500">
//             <FiArrowUpRight size={28} />
//           </div>
//         </div>
//       </div>
//     </div>
//   </NavLink>
// );

// const ServiceList = () => {
//   const [hoveredServiceId, setHoveredServiceId] = useState(null);

//   return (
//     <section className="bg-white py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//             Expert-Led Software Development
//           </h2>
//           <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
//             Leveraging specialized skills to deliver innovative software solutions and achieve business success.
//           </p>
//         </div>
//         <div 
//           className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
//           onMouseLeave={() => setHoveredServiceId(null)}
//         >
//           {services.map((service) => (
//             <ServiceItem
//               key={service.id}
//               service={service}
//               isHovered={hoveredServiceId === service.id}
//               onHover={() => setHoveredServiceId(service.id)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceList;