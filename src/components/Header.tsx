import React from 'react';

export default function Header() {
  return (
    <header className="lg:hidden ">
      <div className=" w-full h-16 bg-gray-700 flex justify-between items-center">
        <div className=" w-20 h-full bg-indigo-600 flex justify-center items-center rounded-r-2xl">
          <object data="/src/assets/logo.svg"> </object>
        </div>

        <div className="w-32 flex justify-between items-center ">
          <object data="/src/assets/icon-moon.svg"> </object>
          <hr className="h-16  border-0 bg-gray-600 w-px" />
          <img
            src="/src/assets/image-avatar.jpg"
            alt="profile-avatar"
            className="rounded-full h-12  mr-2"
          />
        </div>
      </div>
    </header>
  );
}
