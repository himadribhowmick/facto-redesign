// import React from "react";
import cubyn from "../assets/cubyn.png";
import digits from "../assets/digits.png";
import bastion from "../assets/bastion.png";
import pipe from "../assets/pipe.png";
import ramp from "../assets/ramp.png";

const companies = [
  { name: "Cubyn", logo: cubyn },
  { name: "Bastion", logo: bastion },
  { name: "DIGITS", logo: digits },
  { name: "Pipe", logo: pipe },
  { name: "Ramp", logo: ramp },
];

export default function TrustedBy() {
  return (
    <section className="bg-green-900 py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-10 gap-6">
        {/* Title */}
        <span className="text-white font-semibold text-2xl text-center md:text-left flex-shrink-0">
          Trusted by <br className="hidden md:block" /> Top Companies
        </span>

        {/* Scrolling logos */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-10 animate-scroll-once">
            {companies.map((c) => (
              <div
                key={c.name}
                className="flex items-center text-white text-lg md:text-xl gap-3"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
