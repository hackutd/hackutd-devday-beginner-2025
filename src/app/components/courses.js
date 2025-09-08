"use client";
import React, {useState, useEffect} from 'react'
import CourseCard from './coursecard'
import { nebulaFetch } from '../utils/api'

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        console.log("Starting fetch..");
        const apiResponse = await nebulaFetch('course/all');        // gets all courses
        console.log("After fetch");
        console.log("API Response:" , apiResponse);
        setCourses(apiResponse.data || []);
      } catch (err) {
        console.error("API error: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  if (loading)
   return <div className="min-h-screen text-center py-12 bg-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading course data...</p>
          </div>

  if (error) 
    return <div> Error: {error} </div>;

  const relevantCourses = ["1337", "2305","2340","3341", "3345"];
  const filtered = courses.filter(course => course.subject_prefix == "CS" && relevantCourses.includes(course.course_number)) // filter for CS courses
   
  const unique = [];         // remove duplicates (multiple sections I'm assuming)
  const seen = new Set();

  for (const course of filtered) {   
    if (!seen.has(course.course_number)) {
      seen.add(course.course_number);
      unique.push(course);
    }
  }

  return (
    <div className="py-12 bg-gray-100">
      {unique.map((course, idx) => (
        <div key={idx} className="mb-6">
          <CourseCard
            courseCode={`${course.subject_prefix} ${course.course_number}`}
            title={course.title}
            description={course.description}
            creditHours={course.credit_hours}
          />
        </div>
      ))}
    </div>
  )
}

export default Courses