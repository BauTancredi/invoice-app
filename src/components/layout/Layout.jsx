import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header.jsx";

export default function Layout() {
  return (
    <div className="bg-light-100">
      <Header />
      <div className="ml-auto flex h-screen w-full items-center justify-center lg:w-[calc(100%-80px)]">
        <div className="h-full w-[730px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
