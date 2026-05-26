'use client'

import { useSpring, animated } from '@react-spring/web';
import Top3CourseCard from '@/components/Top3CourseCard';
import coursesData from "@/app/data/courses.json";

const Top3CoursesPage = () => {

    const top3courses = [...coursesData]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (

        <div className='mt-15'>
            <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">Top Three Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
            

            {top3courses.map((course, index) => {

                const style = useSpring({
                    from: { opacity: 0, transform: "translateY(40px)" },
                    to: { opacity: 1, transform: "translateY(0px)" },
                    delay: index * 150
                });

                return (
                    <animated.div key={course.id} style={style}>
                        
                        <Top3CourseCard course={course} />
                    </animated.div>
                );
            })}

        </div>
        </div>
    );
};

export default Top3CoursesPage;