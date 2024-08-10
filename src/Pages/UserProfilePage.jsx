import React from "react";
import Navbar from "../Navbar/Navbar";
import UserProfile from "../User/Comp/UserProfile";

const UserProfilePage = () => {
  return (
    <div>
      <Navbar>
      <h1 className="mx-auto text-3xl text-center underline " >My Profile</h1>
        <UserProfile></UserProfile>
      </Navbar>
    </div>
  );
};

export default UserProfilePage;
