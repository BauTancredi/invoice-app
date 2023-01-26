import React, { useState } from "react";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";

const Drawer = (props) => {
  // const [cookie, setCookie] = useCookies(["user"]);
  // const { user } = jwtDecode(cookie.user);

  const user = { name: "Ney" };

  const logOut = () => {
    // onClick
  }

  return (
    <div className={props.styles}>
      {/* profile details  or invoice details component */}
      <div alt="profile-component" className=" pt-10 px-12 font-bold text-3xl h-screen">
        <div>{user ? <p>{user.name}</p> : <p>Please Log In</p>}</div>
        <button
          className="w-50 mt-12 my-4 bg-primary-400 p-2 text-gray-100 font-bold rounded hover:bg-primary-500 cursor-pointer text-sm"
          onClick={logOut}
        >
          {user ? "Log Out" : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default Drawer;
