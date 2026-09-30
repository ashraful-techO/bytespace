"use client";

type Props = {
  heading: string;
  subheading: string;
};

const BannerText = ({ heading, subheading }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {" "}
      {/* Added a wrapper for spacing */}
      {/* Explicitly styling the h2 */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        {heading}
      </h2>
      {/* Explicitly styling the p */}
      <p className="text-lg text-gray-600">{subheading}</p>
    </div>
  );
};

export default BannerText;
