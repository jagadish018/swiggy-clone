"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import FoodCard from "./TopRestFoodCard";
import { restaurantChains } from "@/data/restaurantChains";



const TopRest: React.FC = () => {
  const data = restaurantChains;
  const [slide, setSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4); // default visible cards count

  useEffect(() => {
    // Update visible cards count on resize
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1); // mobile
      else if (window.innerWidth < 768) setVisibleCards(2); // small tablets
      else if (window.innerWidth < 1024) setVisibleCards(3); // tablets
      else setVisibleCards(4); // desktop and above
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const rightSlide = () => {
    if (slide < data.length - visibleCards) {
      setSlide((prev) => prev + 1);
    } else {
      setSlide(0); // Loop back to the start
    }
  };

  const leftSlide = () => {
    if (slide > 0) {
      setSlide((prev) => prev - 1);
    } else {
      setSlide(data.length - visibleCards-1); // Loop to the last visible group
    }
  };
  

  // Calculate translateX in %
  const translateXPercent = (slide * 100) / visibleCards;

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[20px] sm:text-[28px] font-bold">
          Top restaurant chains in Tumkur
        </h2>
        <div className="flex">
          <button
            onClick={leftSlide}
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            aria-label="Slide Left"
            disabled={slide === 0}
          >
            <FaArrowLeft />
          </button>
          {data.length > 0 && (
            <button
              onClick={rightSlide}
              className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
              aria-label="Slide Right"
              disabled={data.length <= visibleCards}
            >
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-7 transition-transform duration-500"
          style={{
            transform: `translateX(-${translateXPercent}%)`,
            width: `${(data.length * 100) / visibleCards}%`,
          }}
        >
          {data.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / data.length}%` }}
            >
              <FoodCard {...card} />
            </div>
          ))}
        </div>
      </div>
      <hr className="my-4 border border-gray-300" />
    </div>
  );
};

export default TopRest;
