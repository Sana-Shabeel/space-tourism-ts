import React, { useState } from "react";
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

  const pickDestinationHandler = (planet: string) => {
    console.log("clicked");

    setDestination(destinationData.filter((obj) => obj.name === planet));
  };

  return (
    <section className="bg-destination-mobile bg-cover bg-center pb-10 sm:bg-destination-tablet">
      <Navbar />

      <h2 className="text-center font-barlowCond text-fs300 font-light uppercase tracking-2xl text-white">
        <span className="mr-2 font-bold text-line">01</span>
        Pick your destination
      </h2>

      <div className="mx-auto my-6 w-44">
        <img src="/assets/destination/image-moon.png" alt="" />
      </div>

      <ul className="mx-auto flex w-60 justify-between text-lightBlue">
        {["Moon", "Mars", "Europa", "Titan"].map((item, idx) => (
          <li
            className="pb-2 font-barlowCond text-fs300 font-light uppercase tracking-2xl hover:border-gray-600"
            onClick={() => pickDestinationHandler(item)}
            key={idx}
          >
            {item}
          </li>
        ))}
      </ul>

      {destination.map((item, idx) => (
        <div className="mx-auto w-80" key={idx}>
          <h1 className="my-4 text-center font-bellefair text-fs700 font-light uppercase text-white">
            {item.name}
          </h1>
          <p className="my-6 text-center text-fs300 font-extralight leading-6 text-lightBlue">
            {item.description}
          </p>
          <div className="my-6 h-[1px] bg-line"></div>
          <div>
            <Distance title={"AVG. DISTANCE"} description={item.distance} />
            <Distance title={"Est. travel time"} description={item.travel} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Destination;
