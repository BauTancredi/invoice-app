import React from "react";
import { Outlet } from "react-router-dom";

import Drawer from "../Drawer.jsx";
import Header from "../Header.jsx";

export default function Layout() {
  return (
    <div className=" bg-light-100">
      <Header />
      <Drawer />
      <div className="h-screen w-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
