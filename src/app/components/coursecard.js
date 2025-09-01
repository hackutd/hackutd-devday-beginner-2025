import React from 'react';

const CourseCard = () => {
  const data = [
    {
      "courseCode": "CS 1200",
      "title": "Introduction to Computer Science and Software Engineering",
      "description": "Overview of computer science and software engineering concepts.",
      "creditHours": 2
    }
  ];

  const course = data[0];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-sm">

      <h1 className="text-3xl font-bold text-blue-600 mb-3">
        {course.courseCode}
      </h1>

      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        {course.title}
      </h2>

      <p className="text-gray-500 mb-4">
        {course.description}
      </p>

      <div className="inline-block">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          {course.creditHours} Credit Hours
        </span>
      </div>
    </div>
  );
};

export default CourseCard;