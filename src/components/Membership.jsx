import React from 'react';

const plans = [
  {
    name: 'BASIC',
    price: 'FREE',
    features: ['“Evil” mode only', 'No saved data'],
    button: 'Get Basic',
    defaultGlow: 'shadow-[0_0_20px_2px_rgba(0,120,255,0.1)]',
    hoverGlow: 'hover:shadow-[0_0_80px_12px_rgba(0,150,255,0.6)]',
  },
  {
    name: 'PRO',
    price: '$19',
    priceSuffix: '/month',
    features: ['“Evil” and “Coach” modes', 'Basic analytics'],
    button: 'Get Pro',
    defaultGlow: 'shadow-[0_0_30px_4px_rgba(0,150,255,0.3)]',
    hoverGlow: 'hover:shadow-[0_0_80px_12px_rgba(0,150,255,0.6)]',
  },
  {
    name: 'PREMIUM',
    price: '$39',
    priceSuffix: '/month',
    features: ['All feedback modes', 'Advanced analytics'],
    button: 'Get Premium',
    defaultGlow: 'shadow-[0_0_20px_2px_rgba(0,120,255,0.1)]',
    hoverGlow: 'hover:shadow-[0_0_80px_12px_rgba(0,150,255,0.6)]',
  },
];

const MembershipSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 text-center">
      <h2 className="text-5xl font-extrabold mb-6">Membership</h2>
      <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto">
        If a $500 golf ball isn’t enough, you can improve our margins further by kindly providing us with recurring revenue.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-[#0b0b0b] rounded-2xl border border-gray-800 p-10 py-20 flex flex-col items-center transition-all duration-300 ${plan.defaultGlow} ${plan.hoverGlow}`}
          >
            <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
            <div className="text-4xl font-extrabold mb-2">
              {plan.price}
              {plan.priceSuffix && (
                <span className="text-xl font-medium"> {plan.priceSuffix}</span>
              )}
            </div>

            <ul className="text-gray-300 text-lg mt-8 mb-10 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 px-8 rounded-full transition-all">
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-16">
        *Plans and prices are subject to change based on the whims of our CFO.
      </p>
    </section>
  );
};

export default MembershipSection;
