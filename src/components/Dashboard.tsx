import sales from "../assets/sales-icon.png";
import total from "../assets/total-sales.png";
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
    <div className="flex justify-center bg-[#F9FAFB] pt-[120px] pb-10 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* ---------- Container ---------- */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[36px] w-full max-w-[1440px] justify-center">
        {/* ---------- Card 1: Sales Overview ---------- */}
        <div className="bg-[#E0F0E5] w-full sm:max-w-[500px] lg:w-[457px] py-8 px-5 sm:px-6 rounded-lg border border-gray-200 flex justify-center">
          <div className="w-full flex flex-col gap-6">
            <h2 className="flex items-center gap-4 font-roboto font-semibold text-[22px] sm:text-[28px] lg:text-[32px] leading-tight text-gray-800 text-center sm:text-left">
              <img src={sales} alt="sales-icon" className="w-[36px] sm:w-[40px] h-[36px] sm:h-[40px]" />
              Sales Overview from Previous Day
            </h2>

            {/* Sales Stats */}
            <div className="relative bg-white w-full h-[320px] sm:h-[361px] rounded-[16px] p-[24px] shadow-sm border border-gray-200 mt-6">
              <div className="flex items-center flex-wrap gap-2 absolute top-[24px] left-[24px] sm:left-[32px]">
                <img src={total} alt="total sales" className="w-[28px] sm:w-[32px] h-[28px] sm:h-[32px]" />
                <span className="font-manrope font-medium text-[18px] sm:text-[22px] text-[#686868]">
                  Total sales:
                </span>
                <span className="font-roboto font-bold text-[24px] sm:text-[32px] text-[#686868]">$12,500</span>
              </div>

              {/* Bar Chart */}
              <div className="absolute top-[110px] left-[20px] sm:left-[32px] right-[20px] sm:right-[32px] flex justify-between items-end gap-[6px] sm:gap-[8px]">
                {barChartData.map(({ day, value, color }) => {
                  const isHighest = value === Math.max(...barChartData.map((d) => d.value));
                  return (
                    <div key={day} className="flex flex-col items-center justify-end relative w-[20px] sm:w-[28px]">
                      {isHighest && (
                        <div
                          className="absolute bg-[#F1F68E] rounded-[12px] shadow-md flex flex-col items-center justify-center text-[#141414] font-roboto font-medium text-center"
                          style={{ width: "120px", height: "70px", top: "-65px", left: "-45px" }}
                        >
                          <p className="text-[12px] sm:text-[14px] font-normal">Highest sale</p>
                          <p className="text-[16px] sm:text-[20px] font-bold mt-[4px]">$2,450</p>
                        </div>
                      )}
                      <div className={`rounded-t-[4px] ${color} w-full`} style={{ height: `${value}px` }}></div>
                      <span className="text-[10px] sm:text-[12px] mt-[4px] sm:mt-[6px] text-[#666]">{day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Avg Sale */}
            <div className="mt-8 sm:mt-10 flex items-center gap-2 sm:gap-4 rounded-[24px] p-[12px_16px] sm:p-[16px_24px] bg-[#BFE5A6]">
              <img src={as} alt="average sale" className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]" />
              <p className="font-roboto text-[16px] sm:text-[20px] text-[#141414]">
                Avg. sale: $104.16 / per transaction
              </p>
            </div>
          </div>
        </div>

        {/* ---------- Card 2: Factoring Amount ---------- */}
        <div className="bg-[#DAFFC2] w-full sm:max-w-[500px] lg:w-[466px] py-8 px-5 sm:px-6 rounded-lg border border-gray-200 flex flex-col justify-between">
          <div>
            <h2 className="flex items-center gap-4 font-roboto font-semibold text-[22px] sm:text-[28px] lg:text-[32px] text-[#141414] text-center sm:text-left">
              <img src={factoring} alt="factoring" className="w-[40px] sm:w-[48px] h-[40px] sm:h-[48px]" />
              Factoring Possible Amount
            </h2>

            {/* Available Amount */}
            <div className="mt-8 sm:mt-[54px] flex flex-col items-center w-full max-w-[245px] h-auto p-[20px] sm:p-[24px] gap-[16px] bg-white rounded-[25px] shadow-lg mx-auto">
              <span className="font-manrope text-[20px] sm:text-[24px] text-[#686868] text-center">
                Available Amount
              </span>
              <div className="flex justify-center items-center gap-3 sm:gap-6">
                <span className="font-roboto font-semibold text-[26px] sm:text-[32px] text-[#141414]">$15,375</span>
                <span className="font-roboto font-semibold text-[16px] sm:text-[18px] text-[#141414]">USD</span>
              </div>
            </div>

            {/* Factored Amount */}
            <div className="mt-8 sm:mt-[36px] flex flex-col items-center w-full max-w-[400px] h-auto p-[20px] sm:p-[24px] gap-[24px] sm:gap-[30px] bg-white rounded-[25px] shadow-lg mx-auto">
              <div className="flex items-start gap-3 sm:gap-[16px] w-full">
                <div className="w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] rounded-full bg-[#E0F0E5] flex items-center justify-center">
                  <img src={dollar} alt="dollar" className="w-[18px] sm:w-[21px] h-[18px] sm:h-[21px]" />
                </div>
                <p className="font-roboto text-[18px] sm:text-[24px] text-[#141414]">
                  Factored amount vs. remaining
                </p>
              </div>

              <div className="flex flex-col items-start w-full bg-[#E0F0E5] rounded-[24px] p-[16px] sm:p-[24px] gap-[40px] sm:gap-[64px]">
                <div className="flex justify-between w-full">
                  <p className="font-roboto font-semibold text-[16px] sm:text-[20px] text-[#686868]">
                    Factored Balance
                  </p>
                  <p className="font-roboto font-bold text-[18px] sm:text-[24px] text-[#141414]">
                    $11,531.25
                  </p>
                </div>
                <div className="relative w-full h-[12px] sm:h-[15px] bg-[#F2F2F2] rounded-[25px]">
                  <div className="absolute left-0 top-0 h-full bg-[#0F4E23] rounded-[25px]" style={{ width: "75%" }}></div>
                  <span className="absolute -top-6 left-[65%] font-roboto font-semibold text-[14px] sm:text-[18px] text-[#141414]">
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Card 3: Secure Workflow ---------- */}
        <div className="bg-[#F1F68E] w-full sm:max-w-[500px] lg:w-[455px] p-5 sm:p-6 rounded-2xl shadow-lg flex flex-col justify-between">
          <h2 className="flex items-center gap-4 text-center sm:text-left">
            <img src={secure} alt="secure" className="w-[40px] sm:w-[48px] h-[40px] sm:h-[48px]" />
            <span className="font-roboto font-semibold text-[22px] sm:text-[28px] lg:text-[32px] text-[#141414]">
              Secure & Streamlined Workflow
            </span>
          </h2>

          {/* Recent Users & Balances */}
          <div className="flex flex-col gap-6 mt-6">
            {/* Recent Users */}
            <div className="bg-white shadow-sm mx-auto w-[90%] sm:w-[266px] p-5 rounded-[25px] rotate-[-12.89deg]">
              <div className="flex justify-between items-center font-roboto">
                <p className="text-gray-900 text-lg sm:text-xl font-bold">Recent user</p>
                <p className="text-gray-500 text-sm">View All</p>
              </div>
              <div className="flex -space-x-3 mt-3 justify-center">
                {us.map((u, i) => (
                  <div key={i} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-white overflow-hidden">
                    <img src={u} alt={`u${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-lime-100 border-2 border-white flex items-center justify-center text-black font-bold">
                  9+
                </div>
              </div>
            </div>

            {/* Total Balance */}
            <div className="bg-white shadow-sm w-[200px] sm:w-[195px] h-auto py-4 px-5 self-center rounded-[25px] -rotate-[2.5deg]">
              <span className="text-gray-500 font-medium text-[16px] sm:text-[18px] font-roboto">
                Total Balance
              </span>
              <span className="block text-xl sm:text-2xl font-bold text-gray-800 font-roboto mt-1">
                23,576.00
              </span>
              <button className="text-[#686868] font-semibold text-[16px] sm:text-[18px] hover:underline transition mt-2">
                <span className="bg-green-100 inline-block w-5 h-5 rounded-full mr-1">+</span> Add Number
              </button>
            </div>

            {/* Online User */}
            <div className="bg-white shadow-sm w-[95%] sm:w-[373px] py-4 px-5 mx-auto rounded-[25px] rotate-[6deg] flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full overflow-hidden">
                  <img src={u3} alt="user" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-gray-800 font-bold text-[18px] sm:text-[24px] leading-tight">
                    Online
                  </p>
                  <span className="text-[#686868] font-manrope font-normal text-sm sm:text-base">
                    Tommy Restaurant
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[16px] sm:text-[20px] text-gray-700 font-bold mb-1">+$10k</p>
                <button className="bg-[#E0F0E5] text-green-800 px-3 py-1 rounded-full text-[12px] sm:text-[14px] font-medium hover:bg-green-700 hover:text-white transition">
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
