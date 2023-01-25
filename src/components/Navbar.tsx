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
    <nav className="flex justify-between items-center py-4 px-8 font-barlowCond">
      <div>
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>

      <div>
        <div
          className="grid place-items-center cursor-pointer"
          onClick={() => setToggleNavbar(true)}
        >
          <img src="/assets/shared/icon-hamburger.svg" alt="burger menu" />
        </div>
        {toggleNavbar && (
          <div className="w-2/3 h-screen backdrop-blur-lg fixed top-0 right-0 flex flex-col px-8">
            <div
              className="self-end my-10"
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
