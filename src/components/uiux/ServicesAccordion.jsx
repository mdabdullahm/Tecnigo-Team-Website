import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const servicesData = [
  { title: 'UI/UX Design', description: "ZaagXd's UI/UX Design services craft user-centered interfaces that enhance engagement and satisfaction. We combine aesthetics and functionality to deliver digital experiences that resonate with users globally." },
  { title: 'Web Design', description: 'Our Web Design service builds responsive, visually engaging websites that reflect your brand identity. We focus on optimized layouts and smooth navigation to leave a lasting impact online.' },
  { title: 'Logo & Brand Design', description: "ZaagXd creates memorable logos and brand identities that capture your brand’s essence. Our designs help you stand out in the marketplace and establish strong audience connections." },
  { title: 'UX Audit', description: "ZaagXd's UX Audit dives deep into your user experience, pinpointing key improvements. We provide insights that increase user satisfaction and drive measurable results." },
  { title: 'Webflow', description: "Our Webflow Development service brings your designs to life with clean, high-performing websites. We leverage Webflow’s power to create custom, easily manageable sites." },
  { title: 'SaaS Design', description: "ZaagXd's SaaS Design service delivers streamlined interfaces for SaaS products, simplifying complex processes. We create intuitive user flows that enhance engagement and retention." },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left gap-4">
        <h3 className={`text-lg md:text-xl font-semibold transition-colors ${isOpen ? 'text-black' : 'text-gray-700'}`}>
          {item.title}
        </h3>
        <div className="text-gray-500 flex-shrink-0">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[200px] mt-4' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed pr-8">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const ServicesAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {servicesData.map((service, index) => (
        <AccordionItem
          key={index}
          item={service}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default ServicesAccordion;