'use client';

import { authClient } from '@/lib/auth-client';
import { Button, toast } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const RegisterPage = () => {
    const router = useRouter();

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const  userData = Object.fromEntries(formData.entries());

        console.log("Form Data :", userData);

        // const {name,email,photoURL,password}= data;

        
           const { data, error } = await authClient.signUp.email({
    name: userData?.name, 
    email: userData?.email, 
    password: userData?.password, 
    image: userData?.photoURL,
    // callbackURL: "https://example.com/callback",
});

        if(error){
            toast.error("Registration failed. Please try again.");
            return;
        }

        if(data){
            toast.success("Registration successful! Please login to your account.");
            router.push('/login')
        }

        
        
    };


   const GoogleSignIn = async () => {
    try {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

    } catch (error) {
        console.error(error);
        toast.error("Google login failed");
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
                    <Button onClick={GoogleSignIn}>
                        Login with Google
                            </Button>
                </div>

                </div>

               

            </form>

            

        </div>
    );
};

export default RegisterPage;









// const handleRegisterSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const userData = Object.fromEntries(formData.entries());

//     console.log("Form Data :", userData);

//     try {
//         const { data, error } = await authClient.signUp.email({
//             name: userData.name,
//             email: userData.email,
//             password: userData.password,
//             // এখানে userData.photoURL ব্যবহার করুন, কারণ আপনার ফর্মে নাম photoURL
//             image: userData.photoURL, 
//         });

//         if (error) {
//             // এরর হলে বিস্তারিত দেখুন
//             console.error("Auth Error:", error);
//             // এখানে toast.error ব্যবহার করবেন (সঠিকভাবে ইমপোর্ট নিশ্চিত করুন)
//             return;
//         }

//         if (data) {
//             // সফল হলে
//             router.push('/login');
//         }
//     } catch (err) {
//         console.error("Unexpected error:", err);
//     }
// };