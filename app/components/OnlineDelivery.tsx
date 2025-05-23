"use client";
import React from "react";
import FoodCard from "./TopRestFoodCard";
import { restaurantChains } from "@/data/restaurantChains";




const OnlineDelivery: React.FC = () => {
const data = restaurantChains;

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex my-5 items-center justify-between">
        <h2 className="text-[20px] sm:text-[28px] font-bold leading-snug">
          Restaurants with online food delivery in Tumkur
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((val, index) => (
          <FoodCard key={index} {...val} />
        ))}
      </div>
    </div>
  );
};

export default OnlineDelivery;
