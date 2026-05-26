import {Avatar, Button, Card} from "@heroui/react";
import Link from "next/link";
import BackButton from "./BackButton";

const ProfileCard = ({ user }) => {
    // const {name,email,image} = user ;
    return (
        <div className="flex items-center justify-center h-[60vh] my-10">
            <div className="card bg-base-100 w-96 shadow-sm rounded-4xl">
  <figure>
    <img
      src={user?.image}
      alt={user?.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user?.name}</h2>
    <p>{user?.email}</p>
    <div className="card-actions justify-between p-2">
      <Link href="/edit-profile">
        <button className="btn btn-primary">Edit Profile</button>
      </Link>

      <BackButton></BackButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProfileCard;