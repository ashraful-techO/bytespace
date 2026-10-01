"use client";

import Image from "next/image";
import React from "react";

// 1. Data Array containing the exact content from the image
const testimonialsData = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

const CommunityTestimonials = () => {
  return (
    <section className="bg-gradient-to-br from-white via-[#f4fbf7] to-[#ecfccb] py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
            Discover What Our <br className="hidden md:block" /> Community Is
            Saying
          </h2>

          <p className="text-gray-500 text-[15px] leading-relaxed lg:mt-2">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100/50 flex flex-col h-full"
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                height={10}
                width={10}
                className="w-16 h-16 rounded-full object-cover mb-5"
              />

              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {testimonial.name}
              </h3>
              <p className="text-blue-600 text-[14px] font-medium mb-5">
                {testimonial.role}
              </p>

              <p className="text-gray-600 text-[14px] leading-relaxed italic">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;
