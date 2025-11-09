import React from "react";
import SectionHeader from "./SectionHeader";
import RecentUsersCard from "./RecentUsersCard";
import StepCard from "./StepCard";

// import amount from "../assets/amount.svg";
// import pricing from "../assets/pricing.svg";
// import payout from "../assets/payout.svg";

interface Step {
  bgColor: string;
  highlightContent: React.ReactNode;
  subtitle: string;
  description: string;
  points: string[];
}

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      bgColor: "bg-[#E8FBE7]",
      highlightContent: (
        <>
          <h3 className="text-xl font-heading font-semibold mb-4">Sign Up</h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-3 rounded-full bg-white focus:ring-2 focus:ring-[#9EE18F] outline-none"
          />
          <input
            type="text"
            placeholder="Company name"
            className="w-full p-3 mb-3 rounded-full bg-white focus:ring-2 focus:ring-[#9EE18F] outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 rounded-full bg-white focus:ring-2 focus:ring-[#9EE18F] outline-none"
          />
          {/* <img src={amount} alt="Sign up illustration" className="mx-auto mt-4 w-20 h-20" /> */}
        </>
      ),
      subtitle: "Connect Your Business",
      description:
        "Sign up and link your credit card processor or POS system with CASA. We support all major payment providers.",
      points: [
        "Fast approval & easy integration",
        "No impact on your credit score",
      ],
    },
    {
      bgColor: "bg-[#FCFFDC]",
      highlightContent: (
        <>
          <div className="flex items-center justify-between bg-white rounded-lg p-4 mb-4">
            <div>
              <h4 className="font-semibold text-black">Maria Kosta</h4>
              <p className="text-sm text-gray-500">Maria@gmail.com</p>
            </div>
            <span className="text-green-600 font-semibold">+$10K</span>
          </div>

          <div className="bg-white rounded-lg p-4 shadow flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Total balance</p>
                <p className="text-black font-semibold text-lg">$12,000.00</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center font-bold text-black">
                  10%
                </div>
                <p className="text-xs text-gray-500 mt-1">discount</p>
              </div>
            </div>
            <button className="w-full bg-[#D6FFB7] text-black py-2 rounded-lg hover:bg-[#b5ff8a] transition">
              See detail
            </button>
          </div>
          {/* <img src={pricing} alt="Transaction illustration" className="mx-auto mt-6 w-24 h-24" /> */}
        </>
      ),
      subtitle: "Transactions for Early Payment",
      description:
        "Every morning, your previous day's credit card transactions are automatically submitted for funding.",
      points: [
        "No waiting for 30–60 day settlements",
        "Transparent discount rates",
      ],
    },
    {
      bgColor: "bg-[#E8FBE7]",
      highlightContent: (
        <>
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4">
            {/* <img
              src={payout}
              alt="Receive money"
              className="w-10 h-10 rounded-full bg-gray-100 p-2"
            /> */}
            <div>
              <p className="font-semibold text-black">Receive Money from Card</p>
              <p className="text-sm text-gray-500">Cash Deposited Within 24 Hours</p>
            </div>
          </div>
          <RecentUsersCard />
        </>
      ),
      subtitle: "Receive Funds & Grow",
      description:
        "Get access to cash faster with same-day or next-day payouts to keep your business moving forward.",
      points: [
        "Same-day or next-day payouts",
        "Flexible repayment from future sales",
      ],
    },
  ];

  return (
    <section className="w-full py-16 bg-[#F9FAFB]">
      <div className="container mx-auto flex flex-col gap-12 px-6">
        <SectionHeader
          badge="How it works"
          title="Simple & Fast Receive Your Payment in 3 Steps!"
          description="Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales."
        />

        <div className="flex flex-col md:flex-row gap-6">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
