import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import NavMenu from "./Navbar/NavMenu";
import HeroBanner from "./Header/Hero/HeroBanner";


const Hero = () => {
  return (
    <div className="bg-[#003BE2] w-full">
      {/* Header */}
      <div className="h-30 mx-auto px-17.5 flex justify-between items-center text-white">
        <div className="flex items-center">
          <Image
            src="/logo/Header_Logo.png"
            alt="logo"
            width={171}
            height={37}
            className="w-30 h-auto"
          />
        </div>
        <Navbar />
        <NavMenu />
      </div>

      {/* Hero */}
      <div>
        <HeroBanner />
      </div>
    </div>
  );
};

export default Hero;
