"use client";
import React, {  useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import { category } from "@/data/category";

type Category = {
  image: string;
};

const Category: React.FC = () => {
  const [slide, setSlide] = useState(0);
    const categories = category;




  const visibleCount = 8;
  const step = 3;

  const rightSlide = () => {
    if (slide + visibleCount >= categories.length) return;
    setSlide((prev) => Math.min(prev + step, categories.length - visibleCount));
  };

  const leftSlide = () => {
    if (slide === 0) return;
    setSlide((prev) => Math.max(prev - step, 0));
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-[20px] sm:text-[28px] font-bold">
          What&apos;s on your mind?
        </div>
        <div className="hidden sm:flex">
          <button
            onClick={leftSlide}
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            aria-label="Scroll Left"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={rightSlide}
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            aria-label="Scroll Right"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="relative overflow-x-auto sm:overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${slide * 150}px)`,
            width: `${categories.length * 150}px`,
          }}
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="w-[120px] sm:w-[150px] flex-shrink-0 p-2"
            >
              <Image
                src={`/images/${cat.image}`}
                alt={`Category ${index}`}
                width={150}
                height={150}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6 border border-gray-300" />
    </div>
  );
};

export default Category;
