import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header.jsx";

export default function Layout() {
  return (
    <div className=" bg-light-100">
      <Header />
      <div className="h-screen w-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
