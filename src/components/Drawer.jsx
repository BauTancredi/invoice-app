import React from "react";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";

const Drawer = () => {
  const [cookie, setCookie] = useCookies(["user"]);
  const { user } = jwtDecode(cookie.user);

  const checkUser = () => {
    console.log(user);

    if (user) {
      return true;
    } else {
      console.log("user not found");
    }
  };

  return (
    <div className=" max-w-3xl top-0 left-0 p-24 h-screen fixed w-full overflow-y-auto">
      <div> {checkUser() ? <p>{user.name}</p> : <p>Please Log In</p>} </div>
    </div>
  );
};

export default Drawer;
