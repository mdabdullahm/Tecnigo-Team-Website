import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ plan, isPopular = false }) => (
  <div className={`p-8 rounded-2xl border ${isPopular ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-800 text-gray-300 border-gray-700'}`}>
    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
    <p className={`text-sm ${isPopular ? 'text-blue-200' : 'text-gray-400'}`}>{plan.bestFor}</p>
    <p className="text-5xl font-bold my-6">
      ${plan.price}<span className="text-lg font-medium">/per hour</span>
    </p>
    <p className="text-sm mb-8">{plan.cancelPolicy}</p>
    
    <button className={`w-full py-3 rounded-full font-semibold transition-colors ${isPopular ? 'bg-white text-blue-600 hover:bg-blue-100' : 'bg-white text-gray-800 hover:bg-gray-200'}`}>
      Start Your Project
    </button>

    <div className="mt-8 space-y-4">
      <p className="font-semibold">{plan.whyTitle}</p>
      <ul className="space-y-3">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const plans = [
  { name: 'Pay as you go', bestFor: 'Best for-Limited requirements', price: 32, cancelPolicy: 'Pause or cancel anytime', whyTitle: 'Why should you take this', features: ['Flat rate for design & development', 'Stop and resume anytime', 'No need to share project scope', 'Daily work updates', 'Rapid communication', 'Project duration less than 1 month'] },
  { name: 'Project Wise', bestFor: 'Best for- Single project, Startups', price: 24, cancelPolicy: 'Pause or cancel anytime', whyTitle: 'Why should you take this', features: ['Get a free quote', 'Get a fixed budget', 'Daily work updates', 'Rapid communication', 'Start project with 50% upfront', 'Project duration less than 2 months'], isPopular: true },
  { name: 'Design Partner', bestFor: 'Best for- Agency, Saas products', price: 19, cancelPolicy: 'Pause or cancel anytime', whyTitle: 'Why should you take this', features: ['Unlimited works', 'Unlimited meetings', 'Project management tool access', 'Dedicated resource', 'Data driven approach', 'Project duration more than 2 months'] },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Membership Pricing</h2>
          <p className="mt-4 text-gray-400">We offer simple pricing. No surprises, 3-day revisions or task limits, just on-going support when you need it.</p>
          <button className="mt-6 border border-gray-600 px-6 py-2.5 rounded-full hover:bg-gray-800">
            Book an Intro Call
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => <PricingCard key={index} plan={plan} isPopular={plan.isPopular} />)}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;