import React from 'react';

const packages = [
  {
    title: 'Basic Recruiter Package',
    price: '29.99',
    features: [
      '5 job postings per month',
      'Access to basic candidate profiles',
      'Payment gateway integration',
      'Limited use of assessment templates',
    ],
    buttonStyle: 'bg-blue-900 text-white',
    cardStyle: 'bg-gradient-to-b from-[#EDF0FF] to-[#CAD1F1] text-blue-900',
  },
  {
    title: 'Professional Recruiter Package',
    price: '49.99',
    features: [
      '20 job postings per month',
      'Access to basic candidate profiles',
      'Payment gateway integration',
      'Limited use of assessment templates',
    ],
    buttonStyle: 'bg-white text-blue-900 border-2 border-blue-900',
    cardStyle: 'bg-gradient-to-b from-blue-900 to-[#0C002E] text-white',
    highlight: true,
  },
  {
    title: 'Enterprise Recruiter Package',
    price: '99.99',
    features: [
      '30 job postings per month',
      'Access to basic candidate profiles',
      'Payment gateway integration',
      'Limited use of assessment templates',
    ],
    buttonStyle: 'bg-blue-900 text-white',
    cardStyle: 'bg-gradient-to-b from-[#EDF0FF] to-[#CAD1F1] text-blue-900',
  },
];

const Pricing = () => {
  return (
    <div className="py-20 px-10 bg-white ">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#33448D]">Recruiter Packages</h2>
        <p className="text-[#33448D] mt-2 mb-20 font-bold text-xl">
          Empower your hiring and assessment process with comprehensive tools designed to meet your goals.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`flex flex-col p-6 rounded-lg shadow-md ${pkg.cardStyle} w-full md:w-1/3`}
          >
            <h3 className="text-4xl font-semibold mb-6 text-center">{pkg.title}</h3>
            <p className="text-5xl font-bold text-center my-6 mb-5">${pkg.price}</p>
            <ul className="flex-1 mt-5 space-y-4  text-md text-center">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="border-b border-gray-400 mt-5 mb-5 py-5">
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`mt-16 mb-10 py-2 font-bold w-full rounded-md ${pkg.buttonStyle}`}>
              Choose This Package
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
