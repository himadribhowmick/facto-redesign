import React, { useState } from "react";
import amount from "../assets/amount.svg";
import pricing from "../assets/pricing.svg";
import payout from "../assets/payout.svg";

const AboutCasa: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const cardData = [
    {
      title: "Secure and Instant Cash Advances",
      img: amount,
      text: "No more waiting weeks—convert daily credit card transactions into cash within 24 hours to keep your business running smoothly.",
    },
    {
      title: "Transparent and Fair Pricing Process",
      img: pricing,
      text: "No Hidden Fees, No Surprises. Enjoy clear, upfront pricing with flexible funding options, so you always know what to expect.",
    },
    {
      title: "Flexible and Secure Payout Options",
      img: payout,
      text: "We offer flexible and easy payout options tailored to your needs, ensuring quick access to your funds. Choose from multiple payment methods.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* ---------- Top Section ---------- */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-2 mb-14 sm:mb-16">
          <div className="max-w-xl">
            <span className="inline-block bg-[#DFEDE3] text-[#0F4E23] text-sm sm:text-base font-medium px-4 py-1 rounded-full">
              About Casa Service
            </span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-gray-900 leading-tight font-[roboto]">
              Revolutionizing Cash Flow <br className="hidden sm:block" /> for
              Business Owners!
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600 text-[15px] sm:text-[16px] leading-[26px] mb-5">
              Empowering businesses with faster cash access, CASA provides a
              secure, fast, and flexible solution to get early payments for
              credit card sales.
            </p>
            <button className="bg-[#0F4E23] text-white px-6 py-3 rounded-full font-semibold text-[16px] sm:text-[18px] hover:bg-green-700 transition">
              Join Now
            </button>
          </div>
        </div>

        {/* ---------- Cards Section ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cardData.map((card, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`transition-all duration-500 ease-in-out p-6 sm:p-8 rounded-2xl border shadow-sm hover:cursor-pointer flex flex-col justify-start w-[339px] h-[290px]
                  ${
                    isActive
                      ? "bg-[#1E4620] text-white border-transparent shadow-xl"
                      : "bg-white text-gray-900 border-gray-200"
                  }
                `}
              >
                {/* Icon (small circle, left-aligned) */}
                <div className="w-12 h-12 mb-4 rounded-full bg-[#DFEDE3] flex items-center justify-center">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-5 h-5"
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-[18px] sm:text-[20px] font-semibold mb-3 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-900"
                  }`}
                >
                  {card.title}
                </h3>

                {/* Text */}
                <p
                  className={`text-[14px] sm:text-[15px] leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutCasa;
