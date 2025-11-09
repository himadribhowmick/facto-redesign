import React, { useState } from "react";
import checkIcon from "../assets/check.png"; // ✅ your check icon

interface Plan {
  name: string;
  rate: string;
  rateText?: string;
  description: string;
  features: string[];
}

const PricingSection: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Basic Plan",
      rate: "2%",
      rateText: "Discount Rate",
      description: "For businesses processing up to $10,000/month",
      features: [
        "Instant Fund Transfers",
        "Real-time Transaction Monitoring",
        "Seamless POS Integration",
        "24/7 Customer Support",
      ],
    },
    {
      name: "Enterprise Plan",
      rate: "Custom Rate",
      description: "Tailored for high-volume businesses",
      features: [
        "Instant Fund Transfers",
        "Real-time Transaction Monitoring",
        "Seamless POS Integration",
        "24/7 Customer Support",
      ],
    },
    {
      name: "Growth Plan",
      rate: "1.5%",
      rateText: "Discount Rate",
      description: "For businesses processing up to $10,000 – $50,000/month",
      features: [
        "Instant Fund Transfers",
        "Real-time Transaction Monitoring",
        "Seamless POS Integration",
        "24/7 Customer Support",
      ],
    },
  ];

  // State to track which card is active (green)
  const [activeIndex, setActiveIndex] = useState(1); // middle card active by default

  return (
    <section className="w-full py-16 bg-white">
      <div className="text-center mb-12">
        <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full font-medium">
          Pricing
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-2 text-gray-900">
          Simple, Transparent Pricing&nbsp;
          <br className="hidden md:block" />
          No Hidden Fees!
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Trusted by Thousands of Business Owners. See what our satisfied
          customers have to say about CASA.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {plans.map((plan, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(1)} // revert to middle card
              className={`relative rounded-2xl p-8 shadow-sm border transition-all duration-500 transform 
                ${isActive ? "bg-green-900 border-green-900 scale-[1.03]" : "bg-white border-gray-200 hover:scale-[1.02]"}`}
            >
              {/* Plan Header */}
              <div>
                <h3
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-700"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mt-3 mb-4 flex items-end space-x-1">
                  <span
                    className={`text-4xl font-bold transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.rate}
                  </span>
                  {plan.rateText && (
                    <span
                      className={`text-sm mb-1 transition-colors duration-300 ${
                        isActive ? "text-green-200" : "text-gray-500"
                      }`}
                    >
                      {plan.rateText}
                    </span>
                  )}
                </div>

                <button
                  className={`w-full py-2 rounded-full font-medium transition-colors duration-300 
                    ${
                      isActive
                        ? "bg-yellow-300 text-green-900"
                        : "bg-gray-100 text-gray-800"
                    }`}
                >
                  Get Started
                </button>

                <p
                  className={`text-sm mt-4 transition-colors duration-300 ${
                    isActive ? "text-green-100" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* What's Included box */}
              <div
                className={`mt-6 rounded-xl p-5 shadow-sm bg-white transition-all duration-300`}
              >
                <h4 className="font-semibold mb-3 text-gray-800">
                  What's Included?
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <img src={checkIcon} alt="check" className="w-5 h-5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;
