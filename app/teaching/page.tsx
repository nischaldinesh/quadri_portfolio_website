import { courses } from "@/data/teaching";
import React from "react";

const Teaching = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section>
          <h1 className="text-3xl font-semibold italic text-[#841617] mb-8">
            Teaching Experience
          </h1>
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={index} className="border-l-4 border-[#841617] pl-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {course.institution} | {course.semester}
                </p>
                <p className="mt-2 text-gray-700 leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Teaching;
