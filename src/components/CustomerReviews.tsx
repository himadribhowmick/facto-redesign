import React, { useState, useEffect } from "react";
import adyen from "../assets/adyen.png";
import axway from "../assets/axway.png";
import michael from "../assets/michael.jpg";
import sarah from "../assets/sarah.jpg";
import { FaStar } from "react-icons/fa";

interface Review {
  id: number;
  stars: number;
  logo: string;
  title: string;
  text: string;
  name: string;
  role: string;
  img: string;
}

const reviews: Review[] = [
  {
    id: 1,
    stars: 5,
    logo: adyen,
    title: "Game-Changer for My Business!",
    text: "CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!",
    name: "Michael R",
    role: "Restaurant Owner",
    img: michael,
  },
  {
    id: 2,
    stars: 5,
    logo: axway,
    title: "Fast, Reliable, and Stress-Free!",
    text: "CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!",
    name: "Sarah M.",
    role: "Café Owner",
    img: sarah,
  },
];

const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-6 text-center overflow-hidden">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <span className="text-sm bg-green-100 text-green-800 font-medium py-1 px-3 rounded-full">
          Reviews
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3">
          Hear What Customers Say <br /> About CASA!
        </h2>
        <p className="text-gray-500">
          Trusted by Thousands of Business Owners. See what our satisfied
          customers have to say about CASA.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-full px-4 md:px-8 flex justify-center"
            >
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm w-full md:w-[90%] text-left hover:shadow-md transition-all">
                {/* Stars and Logo */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <img
                    src={review.logo}
                    alt="company logo"
                    className="h-6 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-3">
                  “{review.title}”
                </h3>

                {/* Review Text */}
                <p className="text-gray-600 text-sm mb-6">{review.text}</p>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-green-600 w-5" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
