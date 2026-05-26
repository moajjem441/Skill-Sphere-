import InstructorCard from '@/components/InstructorCard';
import React from 'react';


const instructors = [
  {
    id: 1,
    name: "John Doe",
    role: "Full Stack Developer",
    rating: 4.9,
    image: "https://i.pravatar.cc/400?img=12",
    students: "10K+"
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "UI/UX Designer",
    rating: 4.8,
    image: "https://i.pravatar.cc/400?img=32",
    students: "8K+"
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Python Engineer",
    rating: 4.7,
    image: "https://i.pravatar.cc/400?img=45",
    students: "12K+"
  },
  {
    id: 4,
    name: "Emma Watson",
    role: "Data Scientist",
    rating: 4.9,
    image: "https://i.pravatar.cc/400?img=5",
    students: "15K+"
  }
];

const TopInstructorPage = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map(ins => (
                <InstructorCard key={ins.id} instructor={ins} />
            ))}
        </div>
    );
};

export default TopInstructorPage;