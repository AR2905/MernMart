import React from "react";
import Navbar from "../Navbar/Navbar";
import UserOrder from "../User/Comp/UserOrders";

const UserOrderPage = () => {
  return (
    <div>
      <Navbar>
      <h1 className="mx-auto text-3xl text-center" >My Orders</h1>
        <UserOrder></UserOrder>
      </Navbar>
    </div>
  );
};

export default UserOrderPage;
