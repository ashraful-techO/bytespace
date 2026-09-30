import SearchBar from "@/components/shared/searchBar";

const HeroBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="w-[935px] flex flex-col justify-center items-center text-[72px] text-white font-semibold">
        <span> Get Access to Hundreds </span> <span>Courses Available</span>
      </div>
      <p className="text-[18px] font-normal text-[white]">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>

      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroBanner;
