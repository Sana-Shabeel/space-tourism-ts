import React, { useEffect, useState } from "react";
import data from "../data/data.json";
import { Root } from "../model";
import Navbar from "../components/Navbar";

const Technology = () => {
  const [techData, setTechData] = useState<Root["technology"]>(data.technology);
  const [tech, setTech] = useState(techData);
  const [IsActive, setIsActive] = useState("");

  const pickTechHandler = (rocket: string) => {
    setTech(techData.filter((item) => item.name === rocket));
    setIsActive(rocket);
  };

  const techNameArr = ["Launch vehicle", "Spaceport", "Space capsule"];

  useEffect(() => {
    pickTechHandler("Launch vehicle");
  }, []);

  return (
    <section className="grid min-h-screen grid-rows-home bg-technology-mobile">
      <Navbar />

      <div className="grid">
        <h2 className="my-8 text-center font-barlowCond text-fs300 font-light uppercase tracking-2xl text-white md:ml-8 md:text-left md:text-fs400">
          <span className="mr-2 font-bold text-line">03</span>
          SPACE LAUNCH 101
        </h2>
        <div>
          <div className="image">
            {tech.map((img) => (
              <img src={img.images.landscape} alt="" />
            ))}
          </div>
          <div className="mx-auto my-6 flex w-80 flex-col gap-6 text-white">
            {/* TABS */}
            <div className="mx-auto flex w-40 items-center justify-between text-white">
              {techNameArr.map((name, idx) => (
                <button
                  className={`${
                    IsActive === name ? "bg-white text-dark" : ""
                  } grid h-10 w-10 place-items-center rounded-full border border-line font-bellefair text-fs300`}
                  onClick={() => pickTechHandler(name)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            {/* INFO */}
            {tech.map((item) => (
              <div>
                <div className="text-center font-light uppercase tracking-wide lg:text-left">
                  <h3 className="my-2 font-barlowCond text-fs200 tracking-widest text-lightBlue">
                    THE TERMINOLOGY...
                  </h3>
                  <h2 className="font-bellefair text-fs450 md:text-fs600 lg:text-fs700">
                    {item.name}
                  </h2>
                </div>
                <p className="lg:h-fs600 my-6 text-center text-fs200 font-extralight leading-6 text-lightBlue lg:h-24 lg:w-[27.75rem] lg:text-left">
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
