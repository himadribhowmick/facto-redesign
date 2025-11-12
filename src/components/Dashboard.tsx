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
    <div className="">
      {/* Container */}
      <div className="w-[1440px] h-[665x] opacity-100  gap-[141px] pt-20 bg-[#F9FAFB] flex flex-col align-middle justify-center lg:flex-row lg:gap-[36px] max-w-[1440px] ">
        {/* Card 1 */}
        
          <div className="w-[457px] h-[665px] opacity-100 p-[46px_28px] flex flex-col align-middle justify-between  gap-2 rounded-[24px]  bg-[#E0F0E5] ">
            <div className="w-[401px] h-[587px] opacity-100 flex flex-col gap-[50px]">
            <div className="w-[401px] h-[62px] opacity-100 flex items-center gap-[24px] bg-[#E0F0E5]">
              
            <h2 className="flex items-center w-[334px] h-[62px] opacity-100 font-roboto font-semibold text-[32px] leading-[40px] align-middle text-[#141414] gap-6">
              <img src={sales} alt="sales-icon" className=" w-[40px] h-[40px]" />
              Sales overview from Previous Day
            </h2>
            
            </div>

            {/* Sales Stats */}
            
            <div className="w-[400px] h-[475px] opacity-100 flex flex-col  items-center justify-center gap-[50px] relative      ">
              <div className="w-[400px] h-[361px] opacity-100 rounded-[24px] bg-[#FFFFFF] flex align-middle">
              <div className="flex gap-4 items-center  w-[308px] h-[40px] opacity-100 absolute top-[32px] left-[32.5px] ">
                <img src={total} alt="total sales" className="w-[32px] h-[32px]" />
                <span className="w-[260px] h-[40px] opacity-100 flex gap-2">
                <span className="w-[133px] h-[22px] opacity-100 font-manrope font-medium text-[24px] leading-[36px] align-middle text-[#686868]">
                  Total sales:
                </span>
                <span className="w-[119px] h-[40px] opacity-100 font-roboto font-bold text-[32px] leading-[40px] align-middle text-[#686868]">
                  $12,500
                </span>
                </span>
              </div>

              {/* Bar Chart */}
              <div className="absolute left-[33px] top-[102px] flex justify-between  items-end gap-[8px] w-[334px] h-[232px] opacity-100 ">
                
                {barChartData.map(({ day, value, color }) => {
                  const isHighest = value === Math.max(...barChartData.map((d) => d.value));
                  return (
                    <div key={day} className="flex flex-col items-center justify-end relative w-[28px]">
                      {isHighest && (
                        <div
                          className="absolute bg-[#F1F68E] rounded-[12px] shadow-md flex flex-col items-center justify-center text-[#141414] font-[roboto] font-medium"
                          style={{ width: "135px", height: "87px", top: "-70px", left: "-54px" }}
                        > 
                          <p className="text-[14px] font-normal leading-[20px]">Highest sale</p>

                          <div className=" flex items-center w-[103px] h-[34px] gap-2">
                          <img src={trending} alt="total sales" className="w-[10px] h-[10px] top-[10px] left-[5px] opacity-100" />
                          <p className="text-[20px] font-bold leading-[28px] mt-[4px]">$2,450</p>
                          </div>

                        </div>
                      )}
                      <div className={`rounded-t-[4px] ${color} w-full`} style={{ height: `${value}px` }}></div>
                      <span className="text-[12px] mt-[6px] text-[#666]">{day}</span>
                    </div>
                  );
                })}
               
              </div>
              </div>
            

            {/* Avg Sale */}
            <div className=" flex items-center w-[400px] h-[64px] opacity-100 pt-4 pr-6 pb-4 pl-6 gap-2 rounded-[24px] bg-[#BFE5A6] ">
              <div className="flex items-center w-[355px] h-[32px] opacity-100 gap-4">
                <img src={as} alt="average sale icon" className="w-[24px] h-[24px]" />
                <p className="w-[315px] h-[32px] opacity-100 font-roboto font-normal text-[20px] leading-[32px] align-middle text-[#141414]">
                  Avg. sale: $104.16/per transection
                </p>
              </div>
            </div>
            
          </div>
          </div>
          </div>
        

        {/* Card 2 */}
        {/* Factoring Possible Amount */}
        <div className=" sm:w-[500px] lg:w-[466px] border border-gray-200 flex flex-col justify-between w-[456px] h-[665px] opacity-100 pt-[46px] pr-[28px] pb-[46px] pl-[28px] gap-[54px] rounded-[25px] bg-[#DAFFC2]">
            <h2 className="flex items-center align-middle justify-between w-[388px] h-[77px] opacity-100  gap-[24px]">
              <img src={factoring} alt="factoring" className="w-[48px] h-[48px]" />
              <span className="w-[316px] h-[77px] opacity-100 font-roboto font-semibold text-[32px] leading-[40px] text-[#141414]">
                Factoring Possible Amount
              </span>
            </h2>
            
            {/* Available Amount & Factored amount vs. remaining */}
            <div className="w-[400px] h-[442px] opacity-100 flex flex-col items-center  gap-[36px] ">
            <div className=" items-center max-w-[245px] w-[245px] h-[125px] opacity-100 flex flex-col gap-[16px] rounded-[25px] p-[24px] bg-[#FFFFFF]">
              <span className="flex items-center justify-center w-[197px] h-[21px] opacity-100 font-manrope font-normal text-[24px] leading-[36px] text-center align-middle text-[#686868]">
                Available Amount
              </span>
              <div className="flex flex-row justify-center items-center w-[197px] h-[40px] opacity-100 gap-[24px]">
                <span className=" flex items-center justify-center w-[118px] h-[40px] opacity-100 font-roboto font-semibold text-[32px] leading-[40px] align-middle text-[#141414]">
                  $15,375
                </span>
                <span className=" flex items-center justify-center w-[35px] h-[19px] opacity-100 font-roboto font-semibold text-[18px] leading-[30px] align-middle text-[#141414]">
                  USD
                </span>
              </div>
            </div>

            {/* Factored Amount */}
            <div className="mt-[36px] items-center max-w-[400px] w-[400px] h-[281px] opacity-100 flex flex-col gap-[30px] rounded-[25px] p-[24px] bg-[#FFFFFF]">
              <div className="flex flex-row items-start w-[348px] h-[62px] opacity-100 gap-4">
                <div className="relative w-[32px] h-[32px] rounded-full bg-[#E0F0E5] flex items-center justify-center">
                  <img src={dollar} alt="dollar icon" className="w-[21.33px] h-[21.33px]" />
                </div>
                <p className="flex items-center w-[300px] h-[62px] opacity-100 font-roboto font-medium text-[24px] leading-[32px] align-middle text-[#141414]">
                  Factored amount vs. remaining balance 
                </p>
              </div>

              <div className=" w-[374px] h-[141px] opacity-100 flex flex-col gap-[64px] rounded-[24px] p-[24px] bg-[#E0F0E5]">
                
                <div className="flex justify-between w-[326px] h-[14px] gap-12">
                  <p className=" text-[20px] opacity-100 gap-[48px] rounded-[24px] w-[154px] h-[28px] font-['Roboto'] font-semibold text-lg leading-[28px] text-[#686868] text-left">
                    Factored Balance
                  </p>
                  <p className="text-[24px] w-[124px] h-[34px] font-['Roboto'] font-bold text-2xl leading-[34px] text-[#141414] text-right ">
                    $11,531.25
                  </p>
                </div>
                
                <div className="relative w-[305px] h-[15px]  rounded-[25px] bg-[#F2F2F2] opacity-100">
                  <div className="absolute left-0 top-0 w-[234px] h-[15px] rounded-[25px] bg-[#0F4E23] opacity-100" style={{ width: "75%" }}></div>
                  <span className="absolute top-[-26px] left-[206.5px] text-[18px] leading-[30px] w-[34px] h-[21px] font-['Roboto'] font-semibold text-lg text-[#141414] align-middle ">
                    75%
                  </span>
                </div>
    
              </div>
            </div>
            </div>
          
        </div>

        {/* Card 3 */}
        <div className="bg-[#F1F68E] h-[665px] w-full sm:w-[500px] lg:w-[455px] p-6 rounded-2xl shadow-lg flex flex-col justify-between">
          <h2 className="flex items-center gap-[24px] w-full h-[100px] opacity-100">
            <img src={secure} alt="secure" className="w-[48px] h-[48px]" />
            <span className="w-full font-[roboto] font-semibold text-[32px] leading-[40px] text-[#141414]">
              Secure & Streamlined Workflow
            </span>
          </h2>

          {/* Recent Users & Balances */}
          <div className="flex flex-col gap-6">
            {/* Recent Users Card */}
            <div className="bg-white p-3 shadow-sm  sm:w-60 mx-auto flex flex-col justify-between -skew-y-8 skew-x-8 w-[266.49px] h-[124.69px] top-[160.97px] left-[78.89px] py-5 px-6 gap-4 rotate-[-12.89deg] rounded-[25px]">
              <div className="flex justify-between items-center font-roboto">
                <p className="text-gray-900 text-xl font-bold">Recent user</p>
                <p className="text-gray-500 text-sm">View All</p>
              </div>
              <div className="flex -space-x-4">
                {us.map((u, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                    <img src={u} alt={`u${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-lime-100 border-2 border-white flex items-center justify-center text-black font-bold">
                  9+
                </div>
              </div>
            </div>

            {/* Total Balance */}
            <div className="bg-white p-3 shadow-sm  flex flex-col self-center xl:self-end  w-[195.61px] h-[165.95px] top-[316.93px] left-[228.59px] py-5 px-6 gap-4 -rotate-[2.5deg] rounded-[25px]">
              <span className="text-gray-500 font-medium text-[18px] font-roboto ">Total Balance</span>
              <span className="text-2xl font-bold text-gray-800 font-roboto">23,576.00</span>
              <button className="text-[#686868] font-semibold text-[18px] hover:underline transition w-[147.61px] h-[26px] gap-4 ">
                <span className="bg-green-100 inline-block w-5 h-5 rounded-full font-manrope">+</span> Add Number
              </button>
            </div>

            {/* Online User Card */}
            <div className="bg-white p-3  shadow-sm  flex justify-between items-center mx-auto w-[373.23px] h-[96px] top-[482.88px] left-[24.25px] py-4 px-6 gap-[26px] -rotate-[-6.36deg] rounded-[25px]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden -rotate-[-6.36deg]">
                  <img src={u3} alt="u3" className="w-full h-full object-cover" />
                </div>
                <span className="text-gray-800 font-bold text-[24px] ">
                  Online <br />
                  <span className="text-[#686868] font-['Manrope'] font-normal text-base leading-[100%] tracking-normal not-italic align-middle -rotate-[-6.36deg]">Tommy Restaurant</span>
                </span>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[20px] text-gray-700 font-bold mb-1">+$10k</p>
              <button className="bg-[#E0F0E5] text-green-800 px-3 py-1 rounded-full text-[14px] font-medium hover:bg-blue-800 transition">
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
