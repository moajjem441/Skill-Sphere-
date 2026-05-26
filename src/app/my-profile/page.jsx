'use client';
import ProfileCard from "@/components/ProfileCard";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const MyProfilePage = () => {
    const router = useRouter();
    const {data:session,isPending}=authClient.useSession();
    const user=session?.user;
    // console.log("Session Data in My Profile:", session);

    useEffect(()=>{
        if(!isPending && !session){
            router.push("/login")
        }
    } ,[session,router,isPending]);
    return (
        <div>
            <ProfileCard user={user} key={user?.id} />
        </div>
    );
};

export default MyProfilePage;