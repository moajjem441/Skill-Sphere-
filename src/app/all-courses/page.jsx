'use client';
import coursesData from "@/app/data/courses.json";
import AllCoursesCard from "@/components/AllCoursesCard";
import { useTrail, animated ,config} from '@react-spring/web'; // useTrail ব্যবহার করা উত্তম
import { useState } from "react";

const AllCoursesPage = () => {
    const allCourses = coursesData;
    const [searchInput, setSearchInput] = useState("");

    const filteredCourses = searchInput 
        ? allCourses.filter(course => course.title.toLowerCase().includes(searchInput.toLowerCase())) 
        : allCourses;

    // লুপের বাইরে useTrail ব্যবহার করা হচ্ছে
   const trails = useTrail(filteredCourses.length, {
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    // নিচের যেকোনো একটি ব্যবহার করতে পারেন:
    config: config.wobbly,      // কিছুটা বাউন্সি ইফেক্ট দিবে
    // config: config.gentle,   // খুব মসৃণ এবং ধীরে হবে
    // config: { duration: 500 } // নির্দিষ্ট সময় ধরে ট্রানজিশন হবে
});

    return (
        <div className='mt-15'>
            <div className="m-4 max-w-5xl mx-auto">
                <label className="input w-full max-w-5xl flex items-center gap-2 rounded-full">
                    <input 
                        type="search" 
                        value={searchInput} 
                        onChange={(e) => setSearchInput(e.target.value)} 
                        placeholder="Search" 
                        className="w-full"
                    />
                </label>
            </div>

            <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">All Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {trails.map((style, index) => (
                    <animated.div key={filteredCourses[index].id} style={style}>
                        <AllCoursesCard course={filteredCourses[index]} index={index} />
                    </animated.div>
                ))}
            </div>
        </div>
    );
};

export default AllCoursesPage;