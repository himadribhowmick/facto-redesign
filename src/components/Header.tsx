import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Casa logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    "Services",
    "How it works",
    "Why is different",
    "Reviews",
    "Pricing",
    "Contact",
  ];

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 shadow-sm">
      {/* ---------- Desktop / Tablet Navbar ---------- */}
      <div className="max-w-[1435px] mx-auto flex items-center justify-between px-4 md:px-8 lg:px-0 h-[64px] sm:h-[72px] lg:h-[88px] mt-[20px] sm:mt-[30px] lg:mt-[40px]">
        {/* ---------- Logo + Hamburger ---------- */}
        <div className="flex items-center gap-4">
          {/* Hamburger Icon (Mobile Only) */}
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
            className="w-[120px] sm:w-[140px] md:w-[151px] h-auto object-contain"
          />
        </div>

        {/* ---------- Nav Links (Desktop Only) ---------- */}
        <nav className="hidden lg:flex items-center gap-10 font-roboto text-[16px] xl:text-[18px] text-[#000] font-normal">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-gray-700 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* ---------- CTA Buttons (Desktop Only) ---------- */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {/* Sign In */}
          <button className="px-6 py-3 bg-[#DFEDE3] rounded-full font-manrope font-semibold text-[16px] xl:text-[20px] text-[#0F4E23]">
            Sign In
          </button>

          {/* Sign Up */}
          <button className="px-6 py-3 bg-[#000000] text-white rounded-full font-manrope font-semibold text-[16px] xl:text-[20px]">
            Sign Up
          </button>
        </div>
      </div>

      {/* ---------- Mobile Drawer Menu ---------- */}
      {isOpen && (
        <div
          id="menu-overlay"
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex"
          onClick={(e) => {
            if ((e.target as HTMLElement).id === "menu-overlay") setIsOpen(false);
          }}
        >
          <div
            className="bg-white w-[75%] max-w-[320px] h-full p-6 flex flex-col justify-between shadow-xl animate-slideInLeft"
            style={{ animation: "slideInLeft 0.3s ease-out" }}
          >
            {/* Top Section: Logo + Close */}
            <div className="flex items-center justify-between mb-8">
              <img
                src={logo}
                alt="Casa Logo"
                className="w-[110px] sm:w-[130px] h-auto object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6 font-roboto text-[16px] sm:text-[18px] text-[#000]">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-700 transition-colors duration-150"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 mt-10">
              <button className="w-full py-3 bg-[#DFEDE3] rounded-full font-manrope font-semibold text-[16px] text-[#0F4E23]">
                Sign In
              </button>
              <button className="w-full py-3 bg-[#000000] text-white rounded-full font-manrope font-semibold text-[16px]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------- Mobile Slide Animation ---------- */}
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
