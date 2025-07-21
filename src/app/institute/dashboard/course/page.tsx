"use client";
import { fetchCourses } from "@/lib/store/course/courseSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useEffect } from "react";

function Course() {
  const { courses } = useAppSelector((store) => store.courses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchCourses(token));
    }
  }, []);

  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kerala User Listing Table</title>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8"> Course</h1>
          {/* Search and Add User (Static) */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search users..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <a href="https://abhirajk.vercel.app/" target="blank">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Add New User
              </button>
            </a>
          </div>
          {/* User Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">CourseName</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Duration</th>
                  <th className="py-3 px-6 text-left">Level</th>
                  <th className="py-3 px-6 text-left">CategoryName</th>
                  <th className="py-3 px-6 text-left">CreatedAt</th>
                  <th className="py-3 px-6 text-left">UpdatedAt</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {courses.length > 0 &&
                  courses.map((course) => {
                    return (
                      <tr key={course.courseId} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left">{course.courseId}</td>
                        <td className="py-3 px-6 text-left">{course.courseName}</td>
                        <td className="py-3 px-6 text-left">{course.coursePrice}</td>
                        <td className="py-3 px-6 text-left">{course.courseDuration}</td>
                        <td className="py-3 px-6 text-left">{course.courseLevel}</td>
                        <td className="py-3 px-6 text-left">{course.categoryName}</td>
                        <td className="py-3 px-6 text-left">{new Date(course.createdAt).toLocaleDateString()}</td>
                        <td className="py-3 px-6 text-left">{new Date(course.updatedAt).toLocaleDateString()}</td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <button className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                            </button>
                            <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          {/* Static Pagination */}
          <div className="flex justify-between items-center mt-6">
            <div>
              <span className="text-sm text-gray-700">
                Showing 1 to 5 of 5 entries
              </span>
            </div>
            <div className="flex space-x-2">
              <a href="https://abhirajk.vercel.app/" target="blank">
                <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 opacity-50">
                  Previous
                </button>
              </a>
              <a href="https://abhirajk.vercel.app/" target="blank">
                <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 opacity-50">
                  Next
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
