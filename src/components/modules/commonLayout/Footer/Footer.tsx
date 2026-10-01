"use client";

import CoursesPage from "@/app/course/page";
import BannerText from "@/components/shared/BannerText";
import BannerText2 from "@/components/shared/BannerText2";
import CommunityTestimonials from "@/components/shared/CommunityTestimonials";
import IconBox from "@/components/shared/IconBox";
import Tag from "@/components/shared/Tag";
import FooterElement from "./FooterElement";
import CreatorCTA from "./CreatorCTA";

const Footer = () => {
  return (
    <div className="w-full bg-white h-dvh z-999 flex flex-col justify-start items-center p-4">
      <div>
        <BannerText
          heading="Discover Your Passion, Build Your Skills"
          subheading="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />
      </div>
      <div>
        <Tag />
      </div>
      <div>
        <CoursesPage />
      </div>

      <div>
        <BannerText2 />
      </div>

      <div className="mb-15">
        <IconBox />
      </div>

      <div className="w-full">
        <CreatorCTA />
      </div>

      <div className="w-full">
        <CommunityTestimonials />
      </div>

      <div>
        <FooterElement />
      </div>
    </div>
  );
};

export default Footer;
