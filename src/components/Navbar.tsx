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
    <nav className="text-white flex justify-between items-center font-barlowCond p-6 md:p-0 md:h-24 md:pl-4">
      <div className="w-10 md:w-12">
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>

      <div className=" hidden lg:block w-1/3 bg-line h-1px relative left-6  z-40 "></div>

      <ul className="hidden md:flex w-3/5 gap-6 h-full items-center justify-around bg-alphaWhite backdrop-blur-lg  px-12 lg:w-2/3	">
        {navbar.map(({ num, title }) => (
          <li className="text-lg tracking-widest font-extralight h-full flex justify-center items-center hover:border-b-2">
            <a href="">
              <span className="md:hidden lg:inline-block font-bold mr-3">
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
            className={`fixed inset-y-0 right-0 left-1/3 bg-alphaWhite backdrop-blur-lg px-4 transition-all	 duration-500 ease-in-out`}
          >
            <div
              className="my-8 flex justify-end"
              onClick={() => setToggleNavbar(false)}
            >
              <img src="/assets/shared/icon-close.svg" alt="logo" />
            </div>

            <ul className="mt-12 sm:ml-8 sm:mt-16">
              {navbar.map(({ num, title }, idx) => (
                <li key={idx} className="ml-4 my-10 text-xl tracking-linkSpace">
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
