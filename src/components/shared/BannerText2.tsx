"use client";

const bannerData = [
  {
    text: "Explore Diverse Learning Paths at Bytespace",
    subText:
      "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
  },
];

const BannerText2 = () => {
  // Access the first item in the array
  const { text, subText } = bannerData[0];

  return (
    <div className="w-[917px] mx-auto text-center px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-4 tracking-tight">
        {text}
      </h2>

      <p className="w-[917px] text-gray-500 text-[17px]">{subText}</p>
    </div>
  );
};

export default BannerText2;
