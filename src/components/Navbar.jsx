'use client';
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname=usePathname();


    return (
        <div className="navbar bg-base-100 shadow-sm max-w-11/12 mx-auto rounded-3xl p-5 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow z-10">
                        <li>
                            <a href="/" className={pathname==='/' ? 'bg-cyan-600' : ''}>Home</a>    
                        </li>
                        <li>
                            <a href='/all-courses' className={pathname==='/all-courses' ? 'bg-cyan-600' : ''}>Courses</a>  
                        </li>
                        <li>
                            <a href='/my-profile' className={pathname==='/my-profile' ? 'bg-cyan-600' : ''}>My Profile</a>
                        </li>
                        
                         
                            
                    </ul>
                </div>
               <h1 className="animate__animated animate__bounce">SkillSphere</h1>
                {/* <a className="btn btn-ghost text-xl">SkillSphere</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    <li>
                            <a href="/" className={pathname==='/' ? 'bg-cyan-600' : ''}>Home</a>    
                        </li>
                        <li>
                            <a href='/all-courses' className={pathname==='/all-courses' ? 'bg-cyan-600' : ''}>Courses</a>  
                        </li>
                        <li>
                            <a href='/my-profile' className={pathname==='/my-profile' ? 'bg-cyan-600' : ''}>My Profile</a>
                        </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
}