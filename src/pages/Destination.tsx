import React, { useEffect, useState } from "react";
import data from "../data/data.json";
import { Root } from "../model";
import Navbar from "../components/Navbar";
import { Distance } from "../components/Distance";

const Destination = () => {
  const [destinationData, setDestinationData] = useState<Root["destinations"]>(
    data.destinations
  );

  const [destination, setDestination] =
    useState<Root["destinations"]>(destinationData);

  const [IsActive, setIsActive] = useState("Moon");

  const pickDestinationHandler = (planet: string) => {
    console.log("clicked");

    setDestination(destinationData.filter((obj) => obj.name === planet));
    setIsActive(planet);
  };

  useEffect(() => {
    pickDestinationHandler("Moon");
  }, []);

  return (
    <section className="min-h-screen bg-destination-mobile bg-cover bg-center sm:bg-destination-tablet  lg:bg-destination-desktop ">
      <Navbar />

      <h2 className="my-10 text-center font-barlowCond text-fs300 font-light uppercase tracking-2xl text-white md:ml-8 md:text-left md:text-fs400">
        <span className="mr-2 font-bold text-line">01</span>
        Pick your destination
      </h2>

      <div className="lg:flex lg:justify-evenly">
        <div className="mx-auto my-10 w-44 md:my-8 md:w-[18.75rem] lg:mx-0 lg:w-[27.8125rem]">
          {destination.map((img) => (
            <img src={img.images.png} alt={`a picture of ${img.name}`} />
          ))}
        </div>

        {/* TABS */}
        <div className="lg:w-[27.8125rem]">
          <div className="mx-auto flex h-8 w-60 justify-between text-lightBlue lg:mx-0">
            {["Moon", "Mars", "Europa", "Titan"].map((item, idx) => (
              <button
                className={`${
                  IsActive === item ? "border-b-2 text-white" : ""
                } tracking-2x box-border border-white pb-2 font-barlowCond text-fs300 font-light uppercase hover:border-b-2 hover:border-gray-600 `}
                onClick={() => pickDestinationHandler(item)}
                key={idx}
              >
                {item}
              </button>
            ))}
          </div>

          {/* NAME & DESCRIPTION */}
          {destination.map((item, idx) => (
            <div className="mx-auto w-80 md:w-3/4 lg:w-full" key={idx}>
              <h1 className="my-4 text-center font-bellefair text-fs700 font-light uppercase text-white md:text-fs750 lg:text-left lg:text-fs800">
                {item.name}
              </h1>
              <p className="lg:fs400 my-6 text-center text-fs300 font-extralight leading-6 text-lightBlue lg:text-left">
                {item.description}
              </p>
              <div className="my-12 h-[1px] bg-line lg:my-10"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:pr-0 md:justify-around lg:justify-between ">
                <Distance title={"AVG. DISTANCE"} description={item.distance} />
                <Distance
                  title={"Est. travel time"}
                  description={item.travel}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
