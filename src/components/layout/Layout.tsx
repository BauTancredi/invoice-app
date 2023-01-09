import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex bg-light-100">
      <aside
        style={{
          backgroundColor: "lightblue",
          height: "100vh",
          width: "10vw",
        }}
      />
      <div className="w-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
