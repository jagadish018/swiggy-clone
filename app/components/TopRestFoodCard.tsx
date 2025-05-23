"use client"
import React from "react";
import { FcRating } from "react-icons/fc";
import Image from "next/image";

type CardProps = {
  image: string;
  offer: string;
  title: string;
  rating: number | string;
  minTime: number;
  maxTime: number;
  name: string;
  place: string;
};

const FoodCard: React.FC<CardProps> = ({
  image,
  offer,
  title,
  rating,
  minTime,
  maxTime,
  name,
  place,
}) => {
  return (
    <div className="w-full sm:w-[273px] flex-shrink-0 flex-grow p-2">
      <div className="h-[182px] group rounded-[15px] overflow-hidden relative">
        <Image
          src={`/images/${image}`}
          alt={title}
          width={400}
          height={200}
          className="group-hover:scale-110 duration-150 object-cover w-full h-full"
        />
        <div className="absolute w-full h-full top-0 flex items-end p-2 text-[20px] sm:text-[25px] font-bold text-white tracking-tight bg-gradient-to-t from-black/60 to-transparent">
          {offer}
        </div>
      </div>
      <div className="mt-3 text-lg sm:text-xl font-bold">{title}</div>
      <div className="text-sm sm:text-base flex items-center gap-1 mt-1">
        <FcRating />
        {rating}
        <span className="ml-2">
          {minTime}-{maxTime} mins
        </span>
      </div>
      <div className="text-sm mt-1">
        {name}
        <br />
        {place}
      </div>
    </div>
  );
};

export default FoodCard;
