import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <section className="grid min-h-screen grid-rows-home  bg-home-page-mobile bg-cover bg-center text-lightBlue sm:bg-home-page-tablet lg:bg-home-page-desktop ">
      <Navbar />
      <div className="flex h-full flex-col pt-6 ">
        <div className="m-auto w-80 md:w-3/5">
          <h1 className="text-center font-barlowCond text-fs400 tracking-h1space">
            SO, YOU WANT TO TRAVEL TO{" "}
            <span className="block font-bellefair text-fs750 text-white md:text-fs900">
              SPACE
            </span>
          </h1>
          <div>
            <p className="text-center text-fs200 font-extralight	leading-7 tracking-wide">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="mx-auto my-14 grid h-40 w-40 place-items-center rounded-full bg-white md:h-60 md:w-60 ">
          <span className="font-bellefair text-fs400 tracking-widest text-dark md:text-fs600">
            EXPLORE
          </span>
        </div>
      </div>
    </section>
  );
};

export default Landing;
