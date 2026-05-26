'use client';

import { toast } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const RegisterPage = () => {
    const router = useRouter();

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log("Form Data :", data);

        const {name,email,photoURL,password}= data;

        try{
            const {data:res,error}= await authClient.signUp.email({
            name,
            email,
            photoURL,
            password
        })

        if(!res.ok){
            toast.error(error.message || "Registration failed. Please try again.");
            return;
        }

        if(res.ok){
            toast.success("Registration successful! Please login to your account.");
            router.push('/login')
        }

        }catch(error){
            toast.error(error.message || "An unexpected error occurred. Please try again.");
        }
        
    };

    return (
        <div className="flex items-center justify-center h-screen">

            <form onSubmit={handleRegisterSubmit}>

                <div className="card bg-base-100 max-w-full shadow-sm p-18 rounded-2xl">

                    <h1 className="text-2xl font-bold mb-6 text-center text-cyan-100">
                        Register Your Account
                    </h1>

                    <div className="mb-4">
                        <label>Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="your name"
                            className="input input-bordered w-full rounded-2xl text-white"
                        />
                    </div>

                    <div className="mb-4">
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

                    <div className="mb-4">
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="your password"
                            className="input input-bordered w-full rounded-2xl text-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full rounded-2xl"
                    >
                        Register
                    </button>

                    <p className="mt-4 text-center">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-500">
                            Login
                        </Link>
                    </p>


                     <div className="flex items-center justify-center mt-4">
                    <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
                </div>

                </div>

               

            </form>

            

        </div>
    );
};

export default RegisterPage;