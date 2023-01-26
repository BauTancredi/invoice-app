import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Drawer from "../Drawer.jsx";
import Header from "../Header.jsx";

export default function Layout() {
  const [drawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    if (!drawer) {
      setOpenDrawer(true);
    } else {
      setOpenDrawer(false);
    }
    console.log(drawer);
  };

  return (
    <div>
      <Header handleClick={toggleDrawer} />
      <div className={!drawer ? "opacity w-full" : ""}>
        {!drawer ? (
          <Drawer
            styles={
              "drawer-animation-toggle max-w-3xl top-0 left-0 h-screen fixed w-full overflow-y-auto rounded-r-3xl bg-white z-10 pl-20 shadow-sm"
            }
          />
        ) : (
          <Drawer
            styles={
              "drawer-animation max-w-3xl top-0 left-0 h-screen fixed w-full overflow-y-auto rounded-r-3xl bg-white z-10 pl-20 shadow-sm"
            }
          />
        )}
      </div>
      <div className="h-screen w-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
