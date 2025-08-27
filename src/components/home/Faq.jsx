// src/components/home/Faq.jsx

import React, { useState, useContext } from 'react'; // <-- useContext ইম্পোর্ট করুন
import { Plus, Minus } from 'lucide-react';
import { AppContext } from '../../AppContext'; // <-- AppContext ইম্পোর্ট করুন

const faqData = [
    // ... (faqData অপরিবর্তিত) ...
    {question: 'What types of services does Tecnigo Team offer?', answer: 'We offer a full range of digital services, including custom web development, mobile app development, UI/UX design, and cyber security solutions. We are your one-stop partner for all digital needs.'},{question: 'How do you ensure the quality of your projects?', answer: 'Quality is our top priority. We follow a rigorous process that includes detailed planning, agile development, continuous testing (SQA), and transparent client communication to ensure the final product is of the highest standard.'},{question: 'What is the typical timeline for a project?', answer: 'The timeline varies depending on the project\'s complexity and scope. After our initial discovery call, we provide a detailed project roadmap with clear milestones and deadlines.'},{question: 'How much will my project cost?', answer: 'Project costs are tailored to your specific requirements. We offer a free, no-obligation quote after discussing your needs. Our goal is to provide maximum value for your investment.'},{question: 'Can I see some examples of your previous work?', answer: 'Absolutely! You can explore our featured case studies on our Projects page. We\'d also be happy to share more specific examples relevant to your industry during our call.'},
];

const FaqItem = ({ item, isOpen, onClick }) => {
    // ... (FaqItem কম্পোনেন্ট অপরিবর্তিত) ...
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left gap-4"
        onClick={onClick}
      >
        <h3 className="text-xl font-medium text-gray-800">{item.question}</h3>
        <span className="text-red-500">
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed pr-8">{item.answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { setIsContactPopupOpen } = useContext(AppContext); // <-- context থেকে ফাংশনটি নিন

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Image and Title */}
          <div className="lg:sticky top-24">
            <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Frequently Asked Questions
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
                </p>
            </div>
            <div className="relative aspect-w-4 aspect-h-3">
              <img
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team discussing questions"
                className="rounded-2xl w-full h-full object-cover shadow-xl"
              />
            </div>
            <div className="text-center lg:text-left mt-8">
                {/* --- NavLink কে button দিয়ে প্রতিস্থাপন করা হয়েছে --- */}
                <button
                    onClick={() => setIsContactPopupOpen(true)} // <-- onClick ইভেন্ট যোগ করা হয়েছে
                    className="inline-block bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition-colors duration-300"
                >
                    Ask a Question
                </button>
            </div>
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