import React from "react";

import DarkModeIcon from "./icons/DarkModeIcon";
import Avatar from "./icons/Avatar";
import Logo from "./icons/Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 flex h-20 w-screen items-center justify-between bg-gray-700 lg:left-0 lg:h-screen lg:w-20 lg:flex-col lg:rounded-r-2xl">
      <div className=" bg-primary-500 after:bg-primary-400 relative flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-r-2xl after:absolute after:top-2/4 after:left-0 after:h-full after:w-full after:rounded-l-2xl after:transition-all after:duration-300 hover:after:top-1/4 lg:h-20 lg:w-full">
        <Logo />
      </div>

      <div className="flex h-full w-32 lg:h-auto lg:w-full lg:flex-col ">
        <div className="flex h-full w-3/6 items-center justify-center border-r border-gray-600 lg:h-20 lg:w-full lg:border-0 lg:border-b">
          <div type="button">
            <DarkModeIcon />
          </div>
        </div>
        <div className="flex h-full w-3/6 items-center justify-center lg:h-20 lg:w-full">
          <Avatar />
        </div>
      </div>
    </header>
  );
}
