"use client";

import { MidiPort } from "lucide-react";

const LogoSection = () => {
  return (
    <div className="w-full h-[202px] z-80 bg-[#F5F5F6] flex justify-center items-center">
      <div className="w-[1135px] h-[45px] text-center flex justify-between items-center text-[#82868E] font-semibold">
        <div className="flex gap-1 w-[170px]">
          <span>
            <MidiPort />
          </span>
          <span>LogoIpsum</span>
        </div>
        <div className="flex gap-1 w-[170px]">
          <span>
            <MidiPort />
          </span>
          <span>LogoIpsum</span>
        </div>
        <div className="flex gap-1 w-[170px]">
          <span>
            <MidiPort />
          </span>
          <span>LogoIpsum</span>
        </div>
        <div className="flex gap-1 w-[170px]">
          <span>
            <MidiPort />
          </span>
          <span>LogoIpsum</span>
        </div>
        <div className="flex gap-1 w-[170px]">
          <span>
            <MidiPort />
          </span>
          <span>LogoIpsum</span>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
