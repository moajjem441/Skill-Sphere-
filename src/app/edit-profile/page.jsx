'use client'
import BackButton from '@/components/BackButton';
import { authClient } from '@/lib/auth-client';
import { Button, Form } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Page = () => {
    const router = useRouter();

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedData = Object.fromEntries(formData.entries());
        
        console.log("Updated Profile Data:", updatedData);
       
   
        const { data, error } = await authClient.updateUser({
            name: updatedData?.name,
            image: updatedData?.photoURL,
        });

  
        if (data) {
            toast.success("Profile updated successfully!");
            router.push('/my-profile');
        } else if (error) {
            toast.error("Profile update failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center h-[50vh] my-10">
            <div className="card bg-base-100 w-96 p-5 shadow-sm rounded-4xl">
                <h1 className="text-2xl font-bold mb-6 text-center text-cyan-100">
                    Edit Your Profile
                </h1>
                <Form onSubmit={handleProfileUpdate}>
                    <div className="mb-4">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="your name"
                            className="input input-bordered w-full text-white rounded-2xl"
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
                    <div className="flex items-center justify-between">
                        <Button type="submit" variant="primary" className=" rounded-xl">
                        Update Profile
                    </Button>

                    <BackButton></BackButton>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Page;