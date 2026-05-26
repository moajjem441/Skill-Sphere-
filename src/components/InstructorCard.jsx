import { FaRegStar } from "react-icons/fa";
import Link from 'next/link';


const InstructorCard = ({ instructor }) => {
    return (
       
            <div className="card  bg-base-100 w-full h-96 shadow-sm rounded-4xl hover:scale-105 transition-transform duration-700">

            <figure>
                <img
                    width={400}
                    height={150}
                    className="rounded-t-4xl object-cover h-48 w-full"
                    src={instructor.image}
                    alt={instructor.name}
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title">{instructor.name}</h2>

                <p className="font-bold">
                    Role: {instructor.role}
                </p>

                <p className="text-sm text-gray-500">
                    Students: {instructor.students}
                </p>

                <div className="flex items-center gap-2">
                    <FaRegStar className="text-yellow-500" />
                    <p className="m-0">{instructor.rating}</p>
                </div>

                {/* <div className="card-actions justify-end">
                        <Link href={`/view-details/${course.id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div> */}
            </div>
        </div>
       
    );
};

export default InstructorCard;