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
    <nav className="flex justify-between items-center font-barlowCond md:h-24 pl-10">
      <div className="">
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>

      <ul className="hidden md:flex w-3/5 gap-6 text-white h-full items-center justify-around backdrop-blur-2xl lg:mt-12 px-12 border lg:w-3/4	">
        {navbar.map(({ num, title }) => (
          <li className="text-lg tracking-widest font-extralight ">
            <a href="">
              <span className="md:hidden lg:inline-block font-bold mr-3 ">
                {num}
              </span>
              {title}
            </a>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <div
          className="grid place-items-center cursor-pointer"
          onClick={() => setToggleNavbar(true)}
        >
          <img src="/assets/shared/icon-hamburger.svg" alt="burger menu" />
        </div>
        {toggleNavbar && (
          <div className="fixed inset-y-0	right-0 left-1/3 bg-alphaWhite backdrop-blur-lg px-8">
            <div
              className="my-8 flex justify-end"
              onClick={() => setToggleNavbar(false)}
            >
              <img src="/assets/shared/icon-close.svg" alt="logo" />
            </div>

            <ul className="my-10">
              {navbar.map(({ num, title }, idx) => (
                <li
                  key={idx}
                  className="text-white my-6 text-xl tracking-linkSpace"
                >
                  <a href={`#${title}`} className="font-light">
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
