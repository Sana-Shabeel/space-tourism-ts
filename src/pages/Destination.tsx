import React, { useState } from "react";
import data from "../data/data.json";
import { Root } from "../model";
import Navbar from "../components/Navbar";

const Destination = () => {
  const [destination, setDestination] = useState<Root["destinations"]>(
    data.destinations
  );

  const pickDestinationHandler = (planet: string) => {
    console.log("clicked");

    setDestination(destination.filter((obj) => obj.name === planet));
  };

  console.log(destination);

  return (
    <section className="min-h-screen bg-destination-mobile bg-cover bg-center sm:bg-destination-tablet">
      <Navbar />

      <h2 className="text-center font-barlowCond text-fs300 font-light uppercase tracking-2xl text-white">
        <span className="mr-2 font-bold text-line">01</span>
        Pick your destination
      </h2>

      <div className="mx-auto my-6 w-44">
        <img src="/public/assets/destination/image-moon.png" alt="" />
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
    </section>
  );
};

export default Destination;
