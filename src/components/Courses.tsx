// Copyright 2024 Saideep
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Link from "next/link";
import CoursesButton from "./CoursesButton";
import courseData from "@/data/music_courses.json";
import { Course } from "@/utils/courseI";
import CourseCard from "./CourseCard";


export default function Courses() {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);
    return (
        <div className = "flex text-center justify-center items-center flex-col bg-gray-900">
        <div className = "py-10">
           <div>
            <h2 className = "text-teal-600 uppercase text-base font-semibold tracking-wide mb-3 mt-5 text-l">FEATURED COURSES</h2>
            <p className = "font-bold text-4xl mt-5">Learn With the Best</p>
           </div>
        </div>
        <div className="flex justify-center px-4 mt-5">
        <div className="w-full max-w-screen-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course: Course) => (
                <div className="text-center" key={course.id}>
                <CourseCard heading={course.title} content={course.description} slug={course.slug}/>
                </div>
            ))}
            </div>
        </div>
        </div>
        <div className = "mt-20 mb-4">
            <Link href={"/courses"}>
            <CoursesButton content={"View All Courses"}/>
            </Link>
        </div>
        </div>
    )
}