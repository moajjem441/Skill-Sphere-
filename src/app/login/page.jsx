import React from 'react';

const LogInPage = () => {
     const router =useRouter();

    const handleLogInSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log("Form Data :", data);

        router.push('/login')
        tost.success("Login successful!");
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
                            className="input input-bordered w-full rounded-2xl"
                        />
                    </div>

                    <div className="mb-4">
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="your password"
                            className="input input-bordered w-full rounded-2xl"
                        />
                    </div>

                    

                    <button
                        type="submit"
                        className="btn btn-primary w-full rounded-2xl"
                    >
                        Log In
                    </button>

                    

                </div>

            </form>

        </div>
    );
};

export default LogInPage;