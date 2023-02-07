import React, { useEffect, useState } from "react";
import data from "../data/data.json";
import { Root } from "../model";
import Navbar from "../components/Navbar";

const Technology = () => {
  const [techData, setTechData] = useState<Root["technology"]>(data.technology);
  const [tech, setTech] = useState(techData);
  const [IsActive, setIsActive] = useState("");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const pickTechHandler = (rocket: string) => {
    setTech(techData.filter((item) => item.name === rocket));
    setIsActive(rocket);
  };

  const techNameArr = ["Launch vehicle", "Spaceport", "Space capsule"];

  useEffect(() => {
    pickTechHandler("Launch vehicle");
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
      console.log(windowSize);
    });

    return () => {
      window.removeEventListener("resize", () => {
        console.log("removed");
      });
    };
  }, [windowSize]);

  return (
    <section className="min-h-screen bg-technology-mobile bg-cover bg-center md:bg-technology-tablet lg:bg-technology-desktop">
      <Navbar />

      <div className="grid">
        <h2 className="my-8 text-center font-barlowCond text-fs300 font-light uppercase tracking-2xl text-white md:ml-8 md:text-left md:text-fs450">
          <span className="mr-2 font-bold text-line">03</span>
          SPACE LAUNCH 101
        </h2>
        <div className="flex-row-reverse lg:flex">
          <div className="">
            {tech.map((img, idx) => (
              <img
                className="w-screen object-cover object-center lg:w-[32.5rem]"
                src={
                  windowSize >= 1024
                    ? img.images.portrait
                    : img.images.landscape
                }
                key={idx}
                alt={`a picture of ${img.name}`}
              />
            ))}
          </div>

          <div className="mx-auto my-6 flex w-80 flex-col gap-6 self-center text-white md:w-3/5 lg:flex-row lg:pl-14">
            {/* TABS */}
            <div className="mx-auto mt-8 flex w-40 items-center justify-between text-white md:w-56 lg:mx-0 lg:h-1/2 lg:w-16 lg:flex-col lg:gap-8">
              {techNameArr.map((name, idx) => (
                <button
                  className={`${
                    IsActive === name ? "bg-white text-dark" : ""
                  } grid h-10 w-10 place-items-center gap-4 rounded-full border border-line font-bellefair text-fs300 md:h-16 md:w-16                  `}
                  onClick={() => pickTechHandler(name)}
                  key={idx}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            {/* INFO */}
            {tech.map((item, idx) => (
              <div key={idx}>
                <div className="text-center font-light uppercase tracking-wide lg:text-left">
                  <h3 className="my-2 font-barlowCond text-fs200 tracking-widest text-lightBlue md:text-fs300">
                    THE TERMINOLOGY...
                  </h3>
                  <h2 className="font-bellefair text-fs450 md:text-fs650 lg:text-fs700">
                    {item.name}
                  </h2>
                </div>
                <p className="my-6 text-center text-fs200 font-extralight leading-6 text-lightBlue lg:h-24 lg:w-[27.75rem] lg:text-left">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
