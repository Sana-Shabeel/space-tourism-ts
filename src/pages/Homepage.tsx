import React, { useState } from "react";

const Landing = () => {
  return (
    <section className="h-screen flex flex-col text-lightBlue mt-6">
      <div>
        <h1 className="font-barlowCond text-fs300 text-center tracking-h1space">
          SO, YOU WANT TO TRAVEL TO{" "}
          <span className="text-fs800 block text-white font-bellefair">
            SPACE
          </span>
        </h1>
        <div className="mx-6">
          <p className="text-fs200 text-center leading-7	">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div className="w-40 h-40 rounded-full bg-white grid place-items-center mx-auto my-14">
        <span className="text-dark font-bellefair text-fs400 tracking-widest">
          EXPLORE
        </span>
      </div>
    </section>
  );
};

export default Landing;
