"use client";
import React from "react";

const PlaceholderCard = () => {
  return (
    <div className="bg-neutralSecondary border-2 border-neutralSecondary-dark rounded-lg mt-20 mb-32 flex flex-col text-accent w-[300px] sm:w-[400px] min-h-[400px] shadow-2xl animate-pulse">
    {/* Image */}
    <div className="h-[300px] bg-neutralSecondary-loadingDark rounded-lg"></div>
    <div className="px-8 py-5 min-h-[300px]">
      {/* Project title */}
      <div className="h-6 bg-neutralSecondary-loadingLight rounded mb-2"></div>
      {/* Dates */}
      <div className="flex pb-2 gap-10">
        <div className="h-4 bg-neutralSecondary-loadingDark rounded w-24"></div>
        <div className="h-4 bg-neutralSecondary-loadingDark rounded w-24"></div>        
      </div>
      {/* Description */}
      <div className="h-4 bg-neutralSecondary-loadingDark rounded mb-2"></div>
      <div className="h-4 bg-neutralSecondary-loadingDark rounded mb-2"></div>
      <div className="h-4 bg-neutralSecondary-loadingDark rounded mb-2"></div>
      {/* Buttons */}
      <div className="flex gap-3 py-4">
        <div className="h-10 bg-neutralSecondary-loadingLight rounded w-32"></div>
        <div className="h-10 bg-neutralSecondary-loadingLight rounded w-32"></div>
      </div>
      {/* Language bar */}
      <div className="h-4 bg-neutralSecondary-loadingDark rounded w-full"></div>
    </div>
  </div>
  );
};

export default PlaceholderCard;
