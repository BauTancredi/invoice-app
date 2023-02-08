import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar.jsx";

export default function Layout() {
  return (
    <div className="bg-light-100">
      <Navbar />
      <div className="ml-auto flex h-screen w-full items-center justify-center lg:w-[calc(100%-80px)]">
        <div className="h-full w-[730px] pt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
