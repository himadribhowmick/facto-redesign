import heroEmoji from "../assets/Illustration.png";

export default function Hero() {
  return (
    <section
      className="pt-[120px] sm:pt-[140px] lg:pt-[160px] pb-20 px-4 sm:px-8 lg:px-12 
                 max-w-[1280px] mx-auto text-center overflow-hidden"
    >
      {/* ---------- Badge ---------- */}
      <div
        className="inline-flex items-center justify-center bg-[#DFEDE3] text-[#0F4E23]
                   font-manrope text-[14px] sm:text-[18px] md:text-[20px]
                   rounded-full px-6 sm:px-8 py-2 sm:py-3 mb-8 sm:mb-10"
      >
        Fast. Secure. Hassle-free
      </div>

      {/* ---------- Heading ---------- */}
      <h1
        className="font-[roboto] font-bold text-[#111111]
                   text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px]
                   leading-[42px] sm:leading-[60px] md:leading-[72px] lg:leading-[84px]
                   max-w-[1042px] mx-auto mb-6 sm:mb-8"
      >
        Get Paid Faster{" "}
        <span className="inline-block align-middle ml-2">
          <img
            src={heroEmoji}
            alt="money emoji"
            className="w-[36px] sm:w-[48px] md:w-[60px] lg:w-[72px] h-auto inline-block"
          />
        </span>
        <br className="block sm:hidden" />
        Instant Cash for Businesses!
      </h1>

      {/* ---------- Subtext ---------- */}
      <p
        className="text-[#686868] font-[manrope] font-normal 
                   text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px]
                   leading-[24px] sm:leading-[30px] md:leading-[34px] lg:leading-[38px]
                   max-w-[900px] mx-auto px-2 sm:px-4 lg:px-0 mb-10 sm:mb-12"
      >
        Stop waiting months for credit card payments. CASA helps business owners
        access cash instantly by converting card transactions into immediate
        funds.
      </p>

      {/* ---------- CTA Button ---------- */}
      <button
        className="w-[160px] sm:w-[180px] md:w-[192px] h-[50px] sm:h-[54px] md:h-[58px]
                   bg-[#0F4E23] hover:bg-[#146532] transition-all duration-200
                   rounded-full flex items-center justify-center mx-auto shadow-md"
      >
        <span
          className="font-manrope font-semibold text-white
                     text-[16px] sm:text-[18px] md:text-[20px]
                     leading-[20px] sm:leading-[24px] md:leading-[26px]"
        >
          Get Started
        </span>
      </button>
    </section>
  );
}
