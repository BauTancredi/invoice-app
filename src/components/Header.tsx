import React from 'react';

export default function Header() {
  return (
    // posibles estilos "absolute w-10 h-screen left-0"
    <header className="fixed w-screen h-20 top-0 bg-gray-700 flex items-center justify-between lg:h-screen lg:left-0 lg:w-20 lg:rounded-r-2xl lg:flex-col">
      <div className="w-20 h-20 bg-indigo-600 flex justify-center items-center rounded-r-2xl relative overflow-hidden cursor-pointer after: after:h-24 after:absolute  after:rounded-l-2xl lg:w-full lg:h-20">
        <object data="/src/assets/logo.svg"> </object>
      </div>

      <div className="flex h-full w-32 lg:flex-col lg:w-full lg:h-auto ">
        <div className="flex items-center justify-center w-3/6 border-r border-gray-600 h-full lg:w-full lg:h-20 lg:border-0 lg:border-b">
          <button type="submit">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.502 11.342a.703.703 0 00-.588.128 7.499 7.499 0 01-2.275 1.33 7.123 7.123 0 01-2.581.46A7.516 7.516 0 018.74 11.06a7.516 7.516 0 01-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 00-.102-.92.703.703 0 00-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 000 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 007.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 003.579-5.597.62.62 0 00-.46-.793z"
                fill="#7E88C3"
                fillRule="nonzero"
              />
            </svg>
          </button>
        </div>

        <div className="flex w-3/6 items-center justify-center h-full lg:w-full lg:h-20">
          <img
            src="/src/assets/image-avatar.jpg"
            alt="profile-avatar"
            className="rounded-full h-7"
          />
        </div>
      </div>
    </header>
  );
}
