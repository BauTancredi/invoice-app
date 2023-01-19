import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Drawer from "../Drawer.jsx";
import Header from "../Header.jsx";

export default function Layout() {
  const [drawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    if (!drawer) {
      setOpenDrawer(true);
    } else {
      setOpenDrawer(false);
    }
    console.log(drawer);
  };

  return (
    <div className=" bg-light-100">
      <Header handleClick={toggleDrawer} />
      {!drawer ? <Drawer /> : null}
      <div className="h-screen w-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
