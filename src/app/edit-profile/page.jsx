import { Form } from '@heroui/react';
import React from 'react';

const page = () => {

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedData = Object.fromEntries(formData.entries());
        console.log("Updated Profile Data:", updatedData);
        // এখানে আপনার প্রোফাইল আপডেট করার লজিক যোগ করুন
          
    }
    return (
        <div className="flex items-center justify-center h-[50vh] ">
            <div className="card bg-base-100 w-96 p-5  shadow-sm rounded-4xl">
               <h1 className="text-2xl font-bold mb-6 text-center text-cyan-100">
                        Edit Your Profile
                    </h1>
                <Form>
                    <div className="mb-4">
                        <label>Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="your name"
                            className="input input-bordered w-full rounded-2xl text-white"
                        />
                    </div>
                    <div className="m-2">
                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="your email"
                            className="input input-bordered w-full rounded-2xl text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label>Photo URL</label>

                        <input
                            type="url"
                            name="photoURL"
                            placeholder="your photo url"
                            className="input input-bordered w-full rounded-2xl text-white"
                        />
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default page;