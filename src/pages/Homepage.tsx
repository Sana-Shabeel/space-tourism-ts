import React, { useState } from "react";

const Landing = () => {
  return (
    <section className="h-screen flex flex-col text-lightBlue">
      <div>
        <h1 className="font-barlowCond text-fs300 text-center tracking-widest">
          SO, YOU WANT TO TRAVEL TO{" "}
          <span className="text-fs800 block">SPACE</span>
        </h1>
        <div>
          <p className="text-fs200">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div>
        <span>EXPLORE</span>
      </div>
    </section>
  );
};

export default Landing;
