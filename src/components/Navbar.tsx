import React, { useState } from "react";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);

  const navbar = [
    { num: "00", title: "HOME" },
    { num: "01", title: "DESTINATION" },
    { num: "02", title: "CREW" },
    { num: "03", title: "TECHNOLOGY" },
  ];
  return (
    <nav className="flex items-center justify-between p-6 font-barlowCond text-white md:h-24 md:p-0 md:pl-4 lg:mt-6">
      <div className="w-10 md:w-12">
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>

      <div className="relative left-6 z-40 hidden h-[1px] w-1/3 bg-line lg:block"></div>

      <ul className="hidden h-full w-3/5 items-center justify-around gap-6 bg-alphaWhite px-12 backdrop-blur-lg  md:flex lg:w-2/3	">
        {navbar.map(({ num, title }, idx) => (
          <li
            className="hover:border-box flex h-full items-center justify-center border-stone-400 text-lg font-extralight tracking-widest hover:border-b-2"
            key={idx}
          >
            <a href="">
              <span className="mr-3 font-bold md:hidden lg:inline-block">
                {num}
              </span>
              {title}
            </a>
          </li>
        ))}
      </ul>

      {/* mobile navbar */}
      <div className="md:hidden">
        <div className="cursor-pointer" onClick={() => setToggleNavbar(true)}>
          <img src="/assets/shared/icon-hamburger.svg" alt="burger menu" />
        </div>
        {toggleNavbar && (
          <div
            className={`fixed inset-y-0 right-0 left-1/3 bg-alphaWhite px-4 backdrop-blur-lg transition-all	 duration-500 ease-in-out`}
          >
            <div
              className="my-8 flex justify-end"
              onClick={() => setToggleNavbar(false)}
            >
              <img src="/assets/shared/icon-close.svg" alt="logo" />
            </div>

            <ul className="mt-12 sm:ml-8 sm:mt-16">
              {navbar.map(({ num, title }, idx) => (
                <li key={idx} className="my-10 ml-4 text-xl tracking-3px">
                  <a href={`#${title}`} className="font-extralight">
                    <span className="mr-4 font-semibold">{num}</span>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
