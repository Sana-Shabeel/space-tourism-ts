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
    <nav className="py-6 px-4 flex justify-between items-center font-barlowCond md:h-24">
      <div className="w-10 md:w-12">
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>

      <div className="md:hidden">
        <div className="cursor-pointer" onClick={() => setToggleNavbar(true)}>
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

            <ul className="mt-12 sm:ml-8 sm:mt-16">
              {navbar.map(({ num, title }, idx) => (
                <li
                  key={idx}
                  className="text-white ml-4 my-10 text-xl tracking-linkSpace"
                >
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
