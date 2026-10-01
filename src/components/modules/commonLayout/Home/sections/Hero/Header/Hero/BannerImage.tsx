"use client";

import Image from "next/image";

const BannerImage = () => {
  return (
    <div className="">
      <div className="absolute w-[1149px] h-[1149px] top-140 right-100 border-260 rounded-full border-[#CBFC01] " />

      <div className="z-10 relative w-[578px] h-[541px] -top-15">
        <Image
          src="/Image/Banner.png"
          alt="hero pic"
          fill
          className="object-contain object-center"
        />
      </div>
    </div>
    // </div>
  );
};

export default BannerImage;
