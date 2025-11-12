import total from "../assets/total-sales.png";
import trending from "../assets/trending-up.svg";
const TotalSales = () => {


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
  );
};

export default TotalSales;