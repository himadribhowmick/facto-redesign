import heroEmoji from "../assets/Illustration.png";

export default function Hero() {
  return (
    <section
      className="w-[1042px] h-[441px] rotate-0 opacity-100 flex flex-col gap-[130px] pt-[120px] sm:pt-[140px] lg:pt-[160px] pb-20 px-4 sm:px-8 lg:px-12 
                 max-w-[1280px] mx-auto text-center text-gap-[48px] items-center"
    >
      {/* ---------- Badge ---------- */}
      <div className="w-[1042px] h-[335px] md:h-[335px] opacity-100 gap-[32px] sm:gap-8 md:gap-[32px] flex flex-col justify-center items-center">
        <button className="w-[279px] h-[42px] flex items-center justify-center gap-2 rounded-full bg-[#DFEDE3] px-6 py-2 opacity-100">
          <span className="w-[231px] h-[26px] font-manrope font-medium text-[20px] leading-[26px] text-[#0F4E23]">
            Fast. secure. hassle-free
          </span>
        </button>

        {/* ---------- Heading ---------- */}
        <div className="w-[1042px] h-[261px] opacity-100 md:flex-row gap-6 sm:gap-8 md:gap-[24px] ">
          <div className="w-[1042px] h-[165px] opacity-100">
            <h1 className="w-[1042px] h-[165px] font-roboto font-extrabold text-[72px] leading-[82px] text-center align-middle text-[#141414] opacity-100">
              <div className="flex justify-center items-center gap-2">
                <span>Get Paid Faster</span>
                <img
                  src={heroEmoji}
                  alt="money emoji"
                  className="w-[72px] h-[48px] inline-block"
                />
                <span>Instant Cash</span>
              </div>
              <div>for Businesses!</div>
            </h1>
          </div>

          {/* ---------- Subtext ---------- */}
          <p className="w-[1042px] h-[72px] sm:h-[72px] md:h-[72px] font-manrope font-normal text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[36px] text-center text-[#686868] mx-auto">
            Stop waiting months for credit card payments. CASA helps business
            owners access cash instantly by converting card transactions into
            immediate funds.
          </p>
        </div>
      </div>

      {/* ---------- CTA Button ---------- */}
      <button className="w-[160px] sm:w-[180px] md:w-[192px] h-[50px] sm:h-[54px] md:h-[58px] flex items-center justify-center gap-2 rounded-full bg-[#0F4E23] px-8 sm:px-9 md:px-10 py-3 sm:py-3.5 md:py-4 text-white font-manrope font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[26px] hover:bg-[#0c3d1b] transition-colors duration-200">
        <span className="w-[112px] h-[26px] font-manrope font-semibold text-[20px] leading-[26px] text-[#FFFFFF]">
          Sign Up
        </span>
      </button>
    </section>
  );
}
