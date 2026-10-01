"use client";

type Props = {
  id: number | string;
  tag: string;
};

const TagData: Props[] = [
  { id: 1, tag: "Featured" },
  { id: 2, tag: "Music" },
  { id: 3, tag: "Drawing & Painting" },
  { id: 4, tag: "Marketing" },
  { id: 5, tag: "Animation" },
  { id: 6, tag: "Social Media" },
  { id: 7, tag: "UI/UX Design" },
  { id: 8, tag: "Creative Marketing" },
  { id: 9, tag: "Digital Illustration" },
  { id: 10, tag: "Film & Video" },
  { id: 11, tag: "Crafts" },
  { id: 12, tag: "Freelance & Entrepreneurship" },
  { id: 13, tag: "Graphic Design" },
  { id: 14, tag: "Photography" },
  { id: 15, tag: "Productivity" },
  { id: 16, tag: "Web Development" },
  { id: 17, tag: "Data Science" },
  { id: 18, tag: "Cooking" },
];

const Tag = () => {
  return (
    <div className="mx-auto mt-4 flex w-318.75 flex-wrap justify-center gap-4">
      {TagData.map((item, index) => (
        <div
          key={item.id}
          className={`rounded-[24px] px-5 py-2.5 text-[16px] font-medium ${
            index === 0
              ? "bg-[#CBFC01] text-black"
              : "bg-[#F5F5F6] text-[#4B4B52]"
          }`}
        >
          {item.tag}
        </div>
      ))}

      <span className="px-1 py-2.5 text-[16px] font-medium text-[#003CFF]">
        + More
      </span>
    </div>
  );
};

export default Tag;
