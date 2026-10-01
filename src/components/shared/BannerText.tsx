"use client";

type Props = {
  heading: string;
  subheading: string;
};

const BannerText = ({ heading, subheading }: Props) => {
  return (
    <div className="w-229.25 flex flex-col justify-center items-center gap-2 mt-10">
      <h2 className="w-147 text-center text-5xl md:text-5xl font-bold text-gray-900">
        {heading}
      </h2>
      {/* Explicitly styling the p */}
      <p className="w-229.25 bg-white text-[16.5px] m-0 text-center text-gray-600 font-normal">
        {subheading}
      </p>
    </div>
  );
};

export default BannerText;
