"use client";

import Image from "next/image";

const BannerImage = () => {
  return (
    // <div className="w-144.5 h-100 flex flex-col justify-center">
    //

    <div className="">
      <div className="absolute w-[1149px] h-[1149px] top-130 right-90 border-260 rounded-full border-[#CBFC01] " />

      <div className="z-10 relative w-[578px] h-[541px] -top-15">
        <Image
          src="/Image/Banner.png"
          alt=""
          //   width={578}
          //   height={541}
          fill
          className="object-contain object-center"
        />
      </div>
    </div>
    // </div>
  );
};

export default BannerImage;
