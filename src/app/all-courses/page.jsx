'use client';
import coursesData from "@/app/data/courses.json";
import AllCoursesCard from "@/components/AllCoursesCard";
import { useSpring, animated } from '@react-spring/web';

const AllCoursesPage = () => {
    const allCourses=coursesData;
    // console.log(allCourses);
    return (
        <div className='mt-15'>
            <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">All Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
            

            {allCourses.map((course, index) => {

                const style = useSpring({
                    from: { opacity: 0, transform: "translateY(40px)" },
                    to: { opacity: 1, transform: "translateY(0px)" },
                    delay: index * 150
                });

                return (
                    <animated.div key={course.id} style={style}>
                        
                        <AllCoursesCard course={course} />
                    </animated.div>
                );
            })}

        </div>
        </div>
    );
};

export default AllCoursesPage;