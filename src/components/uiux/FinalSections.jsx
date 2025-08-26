import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Marquee from 'react-fast-marquee';
import { Star, ArrowLeft, ArrowRight, Plus, Minus } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

// --- Testimonials Section ---
const testimonialsData = [
    { image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg', quote: '"A standout IT company in providing tailored solutions that align with client objectives and drive success."', name: 'James Mid', role: 'Project Manager, Frankfurt Rhein Main GmbH' },
    { image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', quote: '"They were very quick, responsive, and efficient. ZaagXd demonstrated a remarkable understanding of the client\'s needs..."', name: 'Momor Lisa', role: 'CEO, Palooi' },
    { image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', quote: '"ZAAGXD took the time to comprehend the intricacies of our business processes and challenges. The team was highly proactive..."', name: 'Walter Rhoddy', role: 'CEO, RHODDY Marketing Group' }
];
const ratingData = [
    { source: 'Firms', rating: 5.0 }, { source: 'DESIGNRUSH', rating: 4.8 }, { source: 'Google', rating: 4.6 }, { source: 'Clutch', rating: 4.8 }, { source: 'GoodFirms', rating: 5.0 }
];

export const Testimonials = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">Our satisfied customers feedback</h2>
          <div className="hidden md:flex gap-4">
            <button ref={navigationPrevRef} className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"><ArrowLeft /></button>
            <button ref={navigationNextRef} className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"><ArrowRight /></button>
          </div>
        </div>
        <Swiper modules={[Navigation, Autoplay]} navigation={{ prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current }} onBeforeInit={(swiper) => { swiper.params.navigation.prevEl = navigationPrevRef.current; swiper.params.navigation.nextEl = navigationNextRef.current; }} loop={true} autoplay={{ delay: 4000 }} slidesPerView={1}>
          {testimonialsData.map((t, i) => (
            <SwiperSlide key={i}><div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-white p-8 rounded-3xl shadow-sm"><img src={t.image} alt={t.name} className="lg:col-span-1 rounded-2xl w-full h-auto" /><div className="lg:col-span-2"><div className="flex items-center gap-4 mb-4"><p className="font-bold text-lg">Clutch</p><p className="font-semibold">5.0</p><div className="flex text-orange-400">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div></div><blockquote className="text-xl font-medium text-gray-700 italic">{t.quote}</blockquote><cite className="block mt-6 font-semibold not-italic">{t.name}, <span className="font-normal text-gray-500">{t.role}</span></cite></div></div></SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-20"><Marquee gradient={false} speed={40}>{ratingData.map((r, i) => (<div key={i} className="bg-white p-6 rounded-2xl shadow-md border mx-4 w-64 text-center"><p className="text-sm text-gray-500 mb-2">REVIEWED ON</p><p className="text-xl font-bold mb-2">{r.source}</p><div className="flex justify-center items-center gap-3"><div className="flex text-red-500">{[...Array(5)].map((_, s) => <Star key={s} fill={s < Math.round(r.rating) ? "currentColor" : "none"} stroke="currentColor" size={20} />)}</div><span className="font-bold text-lg">{r.rating.toFixed(1)}</span></div></div>))}</Marquee></div>
      </div>
    </section>
  );
};


// --- FAQ Section ---
const faqItems = [
    { q: "What is a UI/UX design agency?", a: "A UI/UX design agency specializes in creating user-friendly, visually appealing digital experiences for websites and apps." },
    { q: "What services do UI/UX design agency offer?", a: "We offer services like user research, wireframing, prototyping, visual design, and usability testing." },
    { q: "Which sector or industry does your UI/UX design agency specialize in?", a: "We have expertise across various sectors including fintech, healthcare, e-commerce, and SaaS products." },
    { q: "Why do I need a UI/UX design company for my business?", a: "A good UI/UX design improves customer satisfaction, increases user engagement, and boosts conversion rates." },
    { q: "How does your UI/UX design agency differ from other companies?", a: "Our data-driven, user-centric approach and collaborative process ensure we deliver designs that meet both user needs and business goals." },
    { q: "How do you approach a UI/UX design project?", a: "We follow a proven process: Discover & Strategize, Ideate & Design, Develop & Deliver, and Launch & Optimize." },
    { q: "How long does it take to complete a UI/UX design project?", a: "The timeline varies based on project complexity, but a typical project can take anywhere from 4 to 12 weeks." },
    { q: "How much does it cost to hire your UI/UX design agency?", a: "Costs depend on the project scope. We offer flexible pricing models like 'Pay as you go', 'Project Wise', and 'Design Partner' to fit your budget." },
    { q: "How can Webflow benefit my website?", a: "Webflow allows for creating high-performing, custom websites with a powerful CMS, enabling easy content management without needing a developer." },
    { q: "How do I get started with ZaagXd?", a: "Simply click on 'Start a Project' or 'Let's Talk' to book an intro call with our team. We'd love to hear about your ideas!" }
];

const FaqItem = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200 py-6">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left gap-4">
        <h3 className="text-lg font-medium text-gray-800">{item.q}</h3>
        <span className="text-gray-500">{isOpen ? <Minus /> : <Plus />}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-600 pr-8">{item.a}</p>
      </div>
    </div>
);

export const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 flex justify-center">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 w-full max-w-4xl">
                    <h2 className="text-4xl font-bold text-center mb-10">Answer to your questions</h2>
                    {faqItems.map((item, index) => (
                        <FaqItem key={index} item={item} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} />
                    ))}
                </div>
            </div>
        </section>
    );
};