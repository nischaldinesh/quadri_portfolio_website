import React from "react";

const Teaching = () => {
  const courses = [
    {
      title: "CS 4063/5063: Human-Computer Interaction",
      institution: "University of Oklahoma, Norman",
      semester: "Spring 2025",
      description:
        "This course introduces the theory and practice of human-computer interaction, with a focus on graphical user interfaces. Topics include principles of HCI, interface design, human cognitive capabilities, desktop/window systems, and social implications of computing. Includes a semester-long team project.",
    },
    {
      title: "CS 5970: Information Visualization",
      institution: "University of Oklahoma, Norman",
      semester: "Spring 2025",
      description:
        "Explores the design, development, and evaluation of data visualizations. Combines design, HCI, and data science to create effective visualizations. Topics include graphical encoding, user-centered design, storytelling, and statistical analyses.",
    },
    {
      title: "COP 3353: User-level Intro to Linux",
      institution: "University of South Florida",
      semester: "2017",
      description:
        "Introduction to a modern Linux distribution. Covers installation in a virtualized environment, user and package management, and shell commands for navigation and text processing.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Teaching Experience
          </h1>
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
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
