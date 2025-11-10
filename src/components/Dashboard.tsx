import sales from "../assets/sales-icon.png";
import total from "../assets/total-sales.png";
import trending from "../assets/trending-up.svg";
import factoring from "../assets/factoring-logo.png";
import dollar from "../assets/dollar-logo.png";
import u1 from "../assets/user1.jpg";
import u2 from "../assets/user2.jpg";
import as from "../assets/average-sale.png";
import u3 from "../assets/user3.jpg";
import u4 from "../assets/user4.jpg";
import u5 from "../assets/user5.jpg";
import secure from "../assets/secure-logo.png";

const Dashboard = () => {
  const us = [u1, u2, u3, u4, u5];

  const barChartData = [
    { day: "Sun", value: 70, color: "bg-[#E0F0E5]" },
    { day: "Mon", value: 60, color: "bg-[#E0F0E5]" },
    { day: "Tue", value: 90, color: "bg-[#E0F0E5]" },
    { day: "Wed", value: 70, color: "bg-[#E0F0E5]" },
    { day: "Thu", value: 130, color: "bg-[#0F4E23]" },
    { day: "Fri", value: 60, color: "bg-[#DAFFC2]" },
    { day: "Sat", value: 90, color: "bg-[#E0F0E5]" },
  ];

  return (
    <div className="flex justify-center py-6 bg-[#F9FAFB] px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-stretch gap-10 w-full max-w-[1440px]">
        {/* ---------------------- CARD 1 ---------------------- */}
        <div className="bg-[#E0F0E5] w-full md:w-[500px] lg:w-[457px] rounded-xl border border-gray-200 flex flex-col justify-start p-6 sm:p-8">
          <h2 className="flex items-center gap-4 text-[22px] sm:text-[28px] lg:text-[32px] font-semibold text-gray-800 mb-6">
            <img src={sales} alt="sales-icon" className="w-8 sm:w-10 h-8 sm:h-10" />
            Sales overview from Previous Day
          </h2>

          {/* Sales Stats */}
          <div className="relative bg-white rounded-2xl p-5 sm:p-6 border shadow-sm flex-1">
            <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-6">
              <img src={total} alt="total sales" className="w-7 sm:w-8 h-7 sm:h-8" />
              <span className="text-gray-600 text-lg sm:text-xl">Total sales:</span>
              <span className="font-bold text-2xl sm:text-3xl text-gray-800">$12,500</span>
            </div>

            {/* Bar Chart */}
            <div className="flex justify-between items-end gap-2 sm:gap-3 w-full">
              {barChartData.map(({ day, value, color }) => {
                const isHighest = value === Math.max(...barChartData.map((d) => d.value));
                return (
                  <div key={day} className="flex flex-col items-center justify-end relative w-[24px] sm:w-[28px]">
                    {isHighest && (
                      <div className="absolute bg-[#F1F68E] rounded-xl shadow-md flex flex-col items-center justify-center text-[#141414] font-medium -top-[70px] left-[-50px] p-2 w-[120px] sm:w-[135px]">
                        <p className="text-xs sm:text-sm">Highest sale</p>
                        <div className="flex items-center gap-2">
                          <img src={trending} alt="trending" className="w-3 h-3" />
                          <p className="text-lg sm:text-xl font-bold">$2,450</p>
                        </div>
                      </div>
                    )}
                    <div className={`rounded-t ${color} w-full`} style={{ height: `${value}px` }}></div>
                    <span className="text-[11px] sm:text-xs mt-2 text-[#666]">{day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Avg Sale */}
          <div className="mt-6 flex items-center gap-3 w-full rounded-2xl p-4 bg-[#BFE5A6]">
            <img src={as} alt="average sale icon" className="w-6 h-6" />
            <p className="text-base sm:text-lg text-[#141414] font-medium">
              Avg. sale: <span className="font-semibold">$104.16</span> / per transaction
            </p>
          </div>
        </div>

        {/* ---------------------- CARD 2 ---------------------- */}
        <div className="bg-[#DAFFC2] w-full md:w-[500px] lg:w-[466px] rounded-xl border border-gray-200 p-6 sm:p-8 flex flex-col justify-between">
          <h2 className="flex items-center gap-4 text-[22px] sm:text-[28px] lg:text-[32px] font-semibold text-[#141414] mb-6">
            <img src={factoring} alt="factoring" className="w-10 h-10" />
            Factoring Possible Amount
          </h2>

          {/* Available Amount */}
          <div className="flex flex-col items-center w-full bg-white rounded-2xl shadow-lg py-6 px-4 mb-6">
            <span className="text-[#686868] text-lg sm:text-xl mb-2">Available Amount</span>
            <div className="flex gap-3 items-center">
              <span className="text-3xl font-bold text-[#141414]">$15,375</span>
              <span className="text-lg font-semibold text-[#141414]">USD</span>
            </div>
          </div>

          {/* Factored Amount */}
          <div className="flex flex-col items-center w-full bg-white rounded-2xl shadow-lg py-6 px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E0F0E5] flex items-center justify-center">
                <img src={dollar} alt="dollar icon" className="w-5 h-5" />
              </div>
              <p className="text-lg sm:text-xl font-medium text-[#141414]">
                Factored amount vs. remaining
              </p>
            </div>

            <div className="w-full bg-[#E0F0E5] rounded-2xl p-4 flex flex-col gap-4">
              <div className="flex justify-between text-[#686868]">
                <p className="text-base sm:text-lg font-semibold">Factored Balance</p>
                <p className="text-xl sm:text-2xl font-bold text-[#141414]">$11,531.25</p>
              </div>
              <div className="relative w-full h-4 bg-[#F2F2F2] rounded-full">
                <div className="absolute left-0 top-0 h-4 bg-[#0F4E23] rounded-full" style={{ width: "75%" }}></div>
                <span className="absolute -top-6 left-[70%] font-semibold text-[#141414] text-sm sm:text-base">75%</span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------- CARD 3 ---------------------- */}
        <div className="bg-[#F1F68E] w-full md:w-[500px] lg:w-[455px] rounded-xl shadow-lg p-6 sm:p-8 flex flex-col justify-between">
          <h2 className="flex items-center gap-4 text-[22px] sm:text-[28px] lg:text-[32px] font-semibold text-[#141414] mb-4">
            <img src={secure} alt="secure" className="w-10 h-10" />
            Secure & Streamlined Workflow
          </h2>

          <div className="flex flex-col gap-6 items-center">
            {/* Recent User Card */}
            <div className="bg-white p-5 w-[90%] max-w-[300px] rounded-2xl shadow-md rotate-[-8deg]">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-bold text-gray-900">Recent user</p>
                <p className="text-sm text-gray-500">View All</p>
              </div>
              <div className="flex -space-x-4 justify-center">
                {us.map((u, i) => (
                  <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden">
                    <img src={u} alt={`user${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lime-100 border-2 border-white flex items-center justify-center text-sm sm:text-base font-bold">
                  9+
                </div>
              </div>
            </div>

            {/* Total Balance */}
            <div className="bg-white p-5 w-[80%] max-w-[250px] rounded-2xl shadow-md rotate-[2deg]">
              <p className="text-gray-500 text-sm sm:text-base mb-2">Total Balance</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">23,576.00</p>
              <button className="text-[#686868] font-semibold text-sm sm:text-base hover:underline transition">
                <span className="bg-green-100 inline-block w-5 h-5 rounded-full mr-1">+</span> Add Number
              </button>
            </div>

            {/* Online User Card */}
            <div className="bg-white p-5 w-full max-w-[350px] rounded-2xl shadow-md rotate-[-4deg] flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border">
                  <img src={u3} alt="u3" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">
                    Online
                    <br />
                    <span className="text-[#686868] text-sm font-normal">Tommy Restaurant</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-gray-700 font-bold text-lg mb-1">+$10k</p>
                <button className="bg-[#E0F0E5] text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-700 hover:text-white transition">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
