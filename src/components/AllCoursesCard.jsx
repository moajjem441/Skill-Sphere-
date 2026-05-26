import { FaRegStar } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';

const AllCoursesCard = ({ course }) => {
    return (
        <div>

           


            <div className="card  bg-base-100 w-full h-96 shadow-sm rounded-4xl hover:scale-105 transition-transform duration-700">
                <figure>
                    <img width={400} height={150} className="rounded-t-4xl"
                        src={course.image}
                        alt={course.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{course.title}</h2>
                    <p className='font-bold'>Instructor: {course.instructor}</p>
                    <div className="flex items-center gap-2">
                        <FaRegStar className="text-yellow-500" />
                        <p className="m-0">{course.rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link href={`/view-details/${course.id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCoursesCard;