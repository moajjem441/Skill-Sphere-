import React from "react";

const LearningTips = () => {
    return (
        <section className="w-full py-12 px-4">
            
        
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Learning Tips</h2>
                <p className="text-gray-400 mt-2">
                    Improve your skills with smart study techniques
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

               
                <div className="p-6 rounded-2xl shadow-md bg-base-100 hover:shadow-xl transition-all duration-700 hover:-translate-y-2  hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2">
                        📚 Study Techniques
                    </h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-1">
                        <li>Use active recall instead of passive reading</li>
                        <li>Break topics into small chunks</li>
                        <li>Practice with real projects</li>
                        <li>Teach others what you learn</li>
                    </ul>
                </div>

                <div className="p-6 rounded-2xl shadow-md bg-base-100 hover:shadow-xl transition-all duration-700 hover:-translate-y-2  hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2">
                        ⏳ Time Management Tips
                    </h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-1">
                        <li>Use Pomodoro technique (25/5 rule)</li>
                        <li>Set daily learning goals</li>
                        <li>Avoid multitasking</li>
                        <li>Track your progress daily</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default LearningTips;