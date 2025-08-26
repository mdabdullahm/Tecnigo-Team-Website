// src/components/home/Faq.jsx
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'What services does Zaag Systems offer?',
    answer: 'We provide custom software development, web and mobile app development, UI/UX design, e-commerce solutions, CMS development, and dedicated developer staffing services for businesses worldwide.'
  },
  {
    question: 'Which industries do you serve?',
    answer: 'We serve a wide range of industries including healthcare, finance, e-commerce, real estate, education, and more. Our solutions are tailored to meet the specific needs of each industry.'
  },
  {
    question: 'How do you ensure the quality of your projects?',
    answer: 'We follow a rigorous quality assurance (SQA) process that includes code reviews, automated testing, manual testing, and user acceptance testing (UAT) to ensure the final product is bug-free and meets the highest standards.'
  },
  {
    question: 'How much does it cost to build a website or app?',
    answer: 'The cost depends on various factors such as the complexity of the project, features required, and the technology stack. We provide a detailed quote after understanding your specific requirements.'
  },
];

const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-blue-800/50 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-xl font-medium text-white">{item.question}</h3>
        <span>
          {isOpen ? <Minus className="text-white" /> : <Plus className="text-white" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-blue-200 leading-relaxed pr-8">{item.answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#001f55] text-white py-24">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Your Software Development Questions, Answered
          </h2>
          <p className="mt-6 text-lg text-blue-200">
            From strategy to execution, our custom software development services are built to transform your challenges into business advantages.
          </p>
        </div>

        {/* New Grid for Image and Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Image */}
          <div className="hidden lg:block sticky top-24">
            <img
              src="https://images.pexels.com/photos/17798150/pexels-photo-17798150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Abstract 3D Glass Art"
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>

          {/* Right Side: Accordion */}
          <div>
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;