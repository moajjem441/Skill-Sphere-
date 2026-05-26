'use client';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


const LogInPage = () => {
     const router =useRouter();

    const handleLogInSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        // console.log("Form Data :", data);

        

         const { data, error } = await authClient.signIn.email({
            email: userData?.email, // required
            password: userData?.password, // required
           
        });

        if(data){
          router.push('/')
        toast.success("Login successful!");
        }

        if(error){
            toast.error("Login failed. Please try again.");
        
                router.push('/login')
            }



            const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

  if(data){
          router.push('/')
        toast.success("Login successful!");
        }

    };



    const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });
};

    return (
        <div className="flex items-center justify-center h-screen">

            <form onSubmit={handleLogInSubmit}>
                
                <div className="card bg-base-100 max-w-full shadow-sm p-18 rounded-2xl">

                    <h1 className="text-2xl font-bold mb-6 text-center text-cyan-100">
                        Log In to Your Account
                    </h1>

                    <div className="mb-4">
                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="your email"
                            className="input input-bordered text-white w-full rounded-2xl"
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
                        Log In
                    </button>

                    <div className="flex items-center justify-center mt-4">
                    <button onClick={signIn} className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
                </div>

                </div>

                

            </form>

        </div>
    );
};

export default LogInPage;