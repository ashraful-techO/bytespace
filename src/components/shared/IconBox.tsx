"use client";

import React from "react";
import {
  PenTool,
  CodeXml,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

const categories = [
  { id: 1, icon: PenTool, title: "Design" },
  { id: 2, icon: CodeXml, title: "Development" },
  { id: 3, icon: Laptop, title: "IT & Software" },
  { id: 4, icon: Building2, title: "Business" },
  { id: 5, icon: Megaphone, title: "Marketing" },
  { id: 6, icon: Camera, title: "Photography" },
];

const IconBox = () => {
  return (
    <div className="w-350 h-[168px] flex flex-wrap items-center justify-around">
      {categories.map((category) => {
        const Icon = category.icon;

        return (
          <div
            key={category.id}
            className="flex flex-col items-center justify-center w-[167px] h-[167px] bg-white border border-gray-200 rounded-[24px] hover:shadow-md transition-shadow duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-center w-14 h-14 bg-[#D4FB20] rounded-full mb-3">
              <Icon className="w-6 h-6 text-gray-900" />
            </div>

            <p className="text-[15px] font-semibold text-gray-800">
              {category.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default IconBox;
