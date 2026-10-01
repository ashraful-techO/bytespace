"use client";

import React from "react";
import { BarChart2, Star } from "lucide-react";
import Image from "next/image";

// 1. Define the shape of the data props
interface CourseProps {
  image: string;
  title: string;
  author: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: string;
  price: number;
  students: {
    id: number;
    avatar: string;
  }[];
  studentCount: number;
}

const CourseCard = ({
  image,
  title,
  author,
  lessons,
  duration,
  comments,
  rating,
  level,
  price,
  students,
  studentCount,
}: CourseProps) => {
  return (
    <div className="max-w-[380px] w-full bg-white rounded-[32px] border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover"
        />

        <div className="absolute flex bottom-2 right-1 gap-2">
          <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700">
            {lessons} Lessons
          </span>
          <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700">
            {duration}
          </span>
          <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700">
            {comments} Comments
          </span>
        </div>
      </div>

      <div className="mt-4 px-1">
        <div className="flex items-center mb-1">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {title}
          </h3>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <span className="text-gray-500 font-medium">{rating}</span>
            <Star className="w-5 h-5 fill-gray-400 text-gray-400" />
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          by <span className="text-blue-600 font-medium">{author}</span>
        </p>

        <div className="flex justify-items-start gap-2 items-center mb-5">
         
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
            <BarChart2 className="w-5 h-5 text-gray-800" />
            <span className="text-sm font-semibold text-gray-800">{level}</span>
          </div>

      
          <div className="flex justify-items-start items-center">
            <div className="flex -space-x-3">
              {students.map((student) => (
                <Image
                  key={student.id}
                  src={student.avatar}
                  height={10}
                  width={10}
                  alt="Student"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            <div className="w-10 h-10 rounded-full bg-[#D6F266] flex items-center justify-center text-xs font-bold text-gray-900 border-2 border-white -ml-3 z-10">
              {studentCount}+
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-blue-700">${price}</span>
          <span className="text-gray-400 text-sm font-medium">/lifetime</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
