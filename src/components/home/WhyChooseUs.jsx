// // src/components/home/WhyChooseUs.jsx
// import React from 'react';

// const features = [
//   {
//     number: '01',
//     title: 'Professional Team',
//     description: 'We get to hire the best software developers in the industry — talented minds who bring deep expertise, fresh ideas, and a passion for building world-class solutions.',
//   },
//   {
//     number: '02',
//     title: 'Innovative Solutions',
//     description: 'We prioritize your needs and work closely with you to ensure a seamless and satisfactory experience throughout the project lifecycle.',
//   },
//   {
//     number: '03',
//     title: 'On Time Service',
//     description: 'We value your time. With our on-time service, we ensure timely project delivery, meeting your deadlines and keeping your business on track.',
//   },
// ];

// const FeatureCard = ({ number, title, description }) => (
//   <div className="group bg-[#0a2a6b] p-8 rounded-2xl border border-blue-800/50 relative overflow-hidden h-full transition-all duration-300 hover:bg-[#1a3a8a] hover:border-blue-700 hover:scale-105">
//     {/* Background Number */}
//     <span className="absolute -top-2 -left-2 text-8xl font-extrabold text-white/10 select-none transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]">
//       {number}
//     </span>
//     {/* Content */}
//     <div className="relative z-10">
//       <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
//       <p className="text-blue-200 leading-relaxed">{description}</p>
//     </div>
//   </div>
// );


// const WhyChooseUs = () => {
//   return (
//     <section className="bg-[#001f55] text-white py-20">
//       <div className="container mx-auto px-4">
//         {/* Title Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold">Why Zaag System?</h2>
//           <p className="mt-4 max-w-3xl mx-auto text-blue-200">
//             As the top software company in Bangladesh, ZAAG Systems delivers innovative solutions, tailored services, & exceptional user experiences that elevate your brand.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature) => (
//             <FeatureCard
//               key={feature.number}
//               number={feature.number}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-20 bg-gradient-to-r from-[#0a2a6b] to-[#001f55] rounded-full p-4 flex flex-col md:flex-row justify-between items-center shadow-lg border border-blue-800/50">
//             <p className="text-lg font-medium text-center md:text-left mb-4 md:mb-0 md:ml-6">
//                 Need more services based on your demand?
//             </p>
//             <a href="/contact" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
//                 Contact us Now
//             </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;