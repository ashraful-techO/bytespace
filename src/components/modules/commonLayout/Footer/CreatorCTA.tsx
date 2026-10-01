"use client";

import React from "react";

const CreatorCTA = () => {
  return (
    <section className="w-full bg-[#1A36E2] relative overflow-hidden py-24 px-6 md:px-12 flex justify-center items-center">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15] 
                   bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] 
                   bg-[size:60px_60px]"
      />

      <div className="absolute -top-4 -left-4 md:top-4 md:left-8 w-24 h-24 md:w-32 md:h-32 bg-[#D6F266] rounded-full rounded-tr-none rotate-45 transform origin-bottom-right shadow-lg z-0" />

      <div className="absolute top-12 left-[20%] md:left-[15%] z-0 drop-shadow-lg">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path
            d="M10 50C20 10 40 50 50 10"
            stroke="white"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute top-12 right-12 md:top-16 md:right-[15%] w-0 h-0 border-l-[50px] border-l-transparent border-b-[80px] border-b-[#D6F266] border-r-[50px] border-r-transparent rotate-[30deg] drop-shadow-lg z-0" />

      <div className="absolute top-0 -right-12 md:right-[-5%] w-40 h-64 bg-white rounded-[40px] rotate-[25deg] shadow-xl z-0" />

      <div className="absolute bottom-10 -left-6 md:bottom-16 md:left-[5%] w-24 h-32 bg-white rounded-t-full rotate-[-30deg] shadow-lg z-0" />

      <div className="absolute -bottom-16 left-16 md:-bottom-24 md:left-[15%] w-40 h-40 md:w-56 md:h-56 rounded-full border-[30px] md:border-[40px] border-[#D6F266] shadow-xl z-0" />

      <div className="absolute bottom-4 right-8 md:bottom-8 md:right-[10%] z-0 drop-shadow-xl rotate-12">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path
            d="M15 65C35 15 45 65 65 15"
            stroke="#D6F266"
            strokeWidth="25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.2] mb-6 tracking-tight">
          Unlock Your Potential as a <br className="hidden md:block" /> Creator
          with ByteSpace
        </h2>

        <p className="text-blue-100 text-[14px] md:text-[15px] leading-relaxed max-w-3xl mb-10">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button className="bg-[#D6F266] hover:bg-[#c2e055] text-gray-900 font-bold text-[15px] px-8 py-3.5 rounded-full transition-transform hover:scale-105 shadow-md">
          Join as Creator
        </button>
      </div>
    </section>
  );
};

export default CreatorCTA;
