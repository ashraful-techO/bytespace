import CourseCard from "@/components/shared/CourseCard";
import { coursesData } from "@/lib/Data/courseDara";


export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white p-8">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {coursesData.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
