import coursesData from "@/app/data/courses.json";
import BackButton from "@/components/BackButton";
import { FaRegStar } from "react-icons/fa";


const curriculum = [
    "Introduction & Setup",
    "Core Concepts",
    "Hands-on Projects",
    "Advanced Techniques",
    "Best Practices",
    "Final Assessment"
];

const DetailsPage = async ({ params }) => {

    const { id } = await params;

    // console.log("Received ID:", id);

    // console.log("courses Data:",coursesData)

    

    const course = coursesData?.find(
        course => parseInt(course.id) === parseInt(id)
    );
    // console.log(course);
    return (

        <div className="max-w-full">
                     <div className="mt-8  ml-4">
                          <BackButton></BackButton>
                        </div>
        <section className="min-h-screen max-w-6xl my-5 mx-auto bg-base-200 py-12 px-4">

            <div className=" bg-base-100 rounded-3xl shadow-2xl overflow-hidden">

                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Image */}
                    <div className="overflow-hidden">
                        <img
                            src={course?.image}
                            alt={course?.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Details */}
                    <div className="p-8 flex flex-col justify-center">

                        {/* Category Badge */}
                        <div className="mb-4">
                            <span className="badge badge-primary badge-lg">
                                {course?.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-bold mb-4">
                            {course?.title}
                        </h1>

                        {/* Description */}
                        <p className="text-gray-500 text-lg leading-relaxed mb-6">
                            {course?.description}
                        </p>

                        {/* Info */}
                        <div className="space-y-4">

                            <div className="flex items-center justify-between border-b pb-3">
                                <span className="font-semibold">Instructor</span>
                                <span>{course?.instructor}</span>
                            </div>

                            <div className="flex items-center justify-between border-b pb-3">
                                <span className="font-semibold">Duration</span>
                                <span>{course?.duration}</span>
                            </div>

                            <div className="flex items-center justify-between border-b pb-3">
                                <span className="font-semibold">Level</span>
                                <span>{course?.level}</span>
                            </div>

                            <div className="flex items-center justify-between border-b pb-3">
                                <span className="font-semibold">Rating</span>

                                <div className="flex items-center gap-2">
                                    <FaRegStar className="text-yellow-500" />
                                    <span>{course?.rating}</span>
                                </div>
                            </div>

                        </div>

                        {/* Button */}
                       

                    </div>
                </div>

                {/* Curriculum Section */}
                <div className="p-8 border-t bg-base-100">

                    <h2 className="text-3xl font-bold mb-6">
                        Course Curriculum
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {
                        curriculum.map((item,index)=>(
                            <div key={index} className="bg-base-200 p-4 rounded-2xl mb-4">{item}</div>
                        ))
                    }


                    </div>
                </div>

            </div>
        </section>
        </div>

    );
};

export default DetailsPage;