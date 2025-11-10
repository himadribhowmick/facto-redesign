import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Casa logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { name: "Services", width: "w-[73px]" },
    { name: "How it works", width: "w-[114px]" },
    { name: "Why is different", width: "w-[125px]" },
    { name: "Reviews", width: "w-[66px]" },
    { name: "Pricing", width: "w-[56px]" },
    { name: "Contact", width: "w-[63px]" },
  ];

  return (
    <header className=" bg-white relative top-[70px] px-1 gap-[141px] opacity-100">
      {/* ---------- Navbar Container ---------- */}
      <div
        className="mt-[40px]  w-[1435px] h-[58px] mx-auto flex items-center justify-between 
                   gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[112px]
                   px-4 sm:px-6 md:px-8  xl:px-0"
      >
        {/* ---------- Logo + Hamburger ---------- */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger */}
          <button
            className="block lg:hidden p-2 rounded-md"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6 text-black" />
          </button>

          {/* Logo */}
          <img
            src={logo}
            alt="Casa Logo"
            className="h-[56.37px] w-auto object-contain flex-shrink-0 sm:w-[110px] md:w-[130px] lg:w-[120px] xl:w-[151px]"
          />
        </div>

        {/* ---------- Nav Links (Desktop Only) ---------- */}
        <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 font-roboto font-normal text-[16px] md:text-[17px] xl:text-[18px] leading-[30px] text-[#141414]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              className={`${link.width} h-[30px] align-middle hover:text-gray-700 transition-colors duration-200`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ---------- CTA Buttons (Desktop Only) ---------- */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-6">
          {/* Sign In */}
          <button className="w-[120px] sm:w-[135px] md:w-[145px] h-[50px] md:h-[58px] pt-3 md:pt-4 pb-3 md:pb-4 px-6 md:px-10 gap-2 rounded-full bg-[#DFEDE3] flex items-center justify-center">
            <span className="font-manrope font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[26px] text-[#0F4E23]">
              Sign In
            </span>
          </button>

          {/* Sign Up */}
          <button className="w-[125px] sm:w-[140px] md:w-[154px] h-[50px] md:h-[58px] pt-3 md:pt-4 pb-3 md:pb-4 px-6 md:px-10 gap-2 rounded-full bg-[#141414] flex items-center justify-center">
            <span className="font-manrope font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[26px] text-[#FFFFFF]">
              Sign Up
            </span>
          </button>
        </div>
      </div>

      {/* ---------- Mobile Drawer Menu ---------- */}
      {isOpen && (
        <div
          id="menu-overlay"
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex"
          onClick={(e) => {
            if ((e.target as HTMLElement).id === "menu-overlay")
              setIsOpen(false);
          }}
        >
          <div
            className="bg-white w-[75%] sm:w-[70%] max-w-[320px] h-full p-6 flex flex-col justify-between shadow-xl animate-slideInLeft"
            style={{ animation: "slideInLeft 0.3s ease-out" }}
          >
            {/* Top: Logo + Close */}
            <div className="flex items-center justify-between mb-8">
              <img
                src={logo}
                alt="Casa Logo"
                className="w-[110px] sm:w-[130px] h-auto object-contain"
              />
              <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-6 font-roboto text-[16px] sm:text-[18px] text-[#000]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-700 transition-colors duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-4 mt-10">
              <button className="w-full py-3 sm:py-3.5 bg-[#DFEDE3] rounded-full font-manrope font-semibold text-[16px] sm:text-[18px] text-[#0F4E23]">
                Sign In
              </button>
              <button className="w-full py-3 sm:py-3.5 bg-[#000000] text-white rounded-full font-manrope font-semibold text-[16px] sm:text-[18px]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------- Slide Animation ---------- */}
      <style>
        {`
          @keyframes slideInLeft {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </header>
  );
}
