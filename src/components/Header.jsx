import React from 'react';
import DarkModeIcon from './icons/DarkModeIcon';
import Avatar from './icons/Avatar';
import Logo from './icons/Logo';

export default function Header() {
  return (
    <header className="fixed w-screen h-20 top-0 bg-gray-700 flex items-center justify-between lg:h-screen lg:left-0 lg:w-20 lg:rounded-r-2xl lg:flex-col">
      <div className="w-20 h-20 bg-indigo-600 flex justify-center items-center rounded-r-2xl relative overflow-hidden cursor-pointer lg:w-full lg:h-20">
        <Logo />
      </div>

      <div className="flex h-full w-32 lg:flex-col lg:w-full lg:h-auto ">
        <div className="flex items-center justify-center w-3/6 border-r border-gray-600 h-full lg:w-full lg:h-20 lg:border-0 lg:border-b">
          <div type="button">
            <DarkModeIcon />
          </div>
        </div>
        <div className="flex w-3/6 items-center justify-center h-full lg:w-full lg:h-20">
          <Avatar />
        </div>
      </div>
    </header>
  );
}
