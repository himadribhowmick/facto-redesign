import React from "react";
import as from "../assets/average-sale.png";
import u1 from "../assets/user1.jpg";
import u2 from "../assets/user2.jpg";
import u3 from "../assets/user3.jpg";
import u4 from "../assets/user4.jpg";
import cashIcon from "../assets/cash.svg";
import feeIcon from "../assets/hidden.svg";
import posIcon from "../assets/pos.svg";
import secureIcon from "../assets/secure.svg";

const WhyCasa: React.FC = () => {
  // Chart data
  const barChartData = [
    { day: "Sun", value: 70, color: "bg-[#E0F0E5]" },
    { day: "Mon", value: 60, color: "bg-[#E0F0E5]" },
    { day: "Tue", value: 90, color: "bg-[#E0F0E5]" },
    { day: "Wed", value: 70, color: "bg-[#E0F0E5]" },
    { day: "Thu", value: 130, color: "bg-[#0F4E23]" }, // highest
    { day: "Fri", value: 60, color: "bg-[#DAFFC2]" },
    { day: "Sat", value: 90, color: "bg-[#E0F0E5]" },
  ];

  const users = [u1, u2, u3, u4];

  const features = [
    { icon: cashIcon, text: "Instant Cash, No Waiting" },
    { icon: feeIcon, text: "No Hidden Fees, No Surprises" },
    { icon: posIcon, text: "Seamless POS & Payment Processor" },
    { icon: secureIcon, text: "Secure & Compliant Transactions" },
  ];

  return (
    <section className="py-24 px-6 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="bg-green-100 text-green-800 text-sm font-medium px-5 py-1 rounded-full">
          Why casa different
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          Why CASA Stands Out <br className="hidden md:block" /> from the Rest
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Empowering businesses with faster cash access, CASA provides a secure,
          fast, and flexible solution to get early payments for credit card
          sales.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-gray-50 rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16 shadow-sm">
        {/* Left Section */}
        <div className="relative bg-green-50 rounded-2xl p-8 flex-1">
          {/* Floating Receive Card */}
          <div className="absolute -top-6 left-8 bg-white rounded-xl shadow-md p-3 flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-200">
              <img src={as} alt="Receive card" className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">
                Receive Money from card
              </p>
              <p className="text-[11px] text-gray-500">
                Cash Deposited Within 24 Hours
              </p>
            </div>
          </div>

          {/* Chart Card */}
          <div className="mt-10 bg-white rounded-2xl p-6 shadow-md">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Total sales :</p>
              <p className="text-lg font-semibold text-gray-900">$12,500</p>
            </div>

            {/* Chart */}
            <div className="flex items-end justify-between h-36 mt-6">
              {barChartData.map((bar, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-end space-y-1"
                >
                  <div
                    className={`${bar.color} w-6 rounded-t-md`}
                    style={{ height: `${bar.value}px` }}
                  ></div>
                  <p className="text-[10px] text-gray-500 mt-1">{bar.day}</p>
                </div>
              ))}
            </div>

            {/* Highlight box */}
            <div className="bg-yellow-100 px-3 py-1 rounded-md mt-4 inline-block text-sm font-medium text-yellow-800">
              Highest sale → $2,450
            </div>
          </div>

          {/* Top User Card */}
          <div className="absolute bottom-4 right-6 bg-white rounded-2xl p-4 shadow-md w-56 text-left">
            <p className="text-sm font-semibold text-gray-800 mb-2">Top User</p>
            <div className="flex -space-x-2 mb-3">
              {users.map((user, idx) => (
                <img
                  key={idx}
                  src={user}
                  alt={`User ${idx + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-xs text-gray-600 mb-2">
              <p>Enter Amount</p>
              <p className="font-semibold text-gray-900">$50,000</p>
              <p>Discount rate : 10%</p>
            </div>
            <button className="mt-2 w-full bg-green-100 text-green-800 text-xs font-semibold py-1.5 rounded-md hover:bg-green-200 transition">
              See detail
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            CASA offers instant, flexible funding from card transactions.
          </h3>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            CASA stands out by offering fast, flexible, and transparent funding
            for business owners who need immediate cash flow from credit card
            transactions. Here’s what makes us unique
          </p>

          <ul className="space-y-4 mb-8">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <img src={f.icon} alt={f.text} className="w-6 h-6" />
                <span className="text-gray-800 text-sm">{f.text}</span>
              </li>
            ))}
          </ul>

          <button className="bg-green-800 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition">
            Become a Member
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyCasa;
