import React, { useEffect, useState } from "react";
import { crew } from "../data/data.json";
import { Root } from "../model";
import Navbar from "../components/Navbar";

const Crew = () => {
  const [crewData, setCrewData] = useState<Root["crew"]>(crew);

  const [crewMember, setCrewMember] = useState<Root["crew"]>(crew);
  const [IsActive, setIsActive] = useState("Douglas Hurley");

  const pickCrewMembers = (crewName: string) => {
    setIsActive(crewName);
    setCrewMember(crewData.filter((crew) => crew.name === crewName));
  };

  useEffect(() => {
    pickCrewMembers("Douglas Hurley");
  }, []);

  return (
    <section className="grid min-h-screen grid-rows-home bg-crew-mobile bg-cover bg-center text-white md:h-max md:bg-crew-tablet">
      <Navbar />
      <h1 className="my-2 text-center font-barlowCond text-fs300 font-light uppercase tracking-2xl text-white md:ml-8 md:text-left md:text-fs400">
        <span className="mr-2 font-bold text-line">02</span>
        Meet your crew
      </h1>

      <div className="md:flex md:flex-col-reverse">
        {/* IMAGE */}
        {crewMember.map((img) => (
          <div className="my-4 mx-auto w-80 md:w-auto md:self-end">
            <img
              className="mx-auto h-56 w-80 object-contain object-center md:h-[33.25rem] md:w-auto md:object-cover"
              src={img.images.png}
              alt={`a picture of ${img.name}`}
            />
            <div className="h-[1px] w-full bg-line md:hidden"></div>
          </div>
        ))}

        {/* BIO AND NAME */}
        <div className="mx-auto mt-2 flex w-80 flex-col-reverse md:w-3/5 md:flex-col">
          {crewMember.map((data) => (
            <div>
              <div className="text-center font-bellefair font-light uppercase tracking-wide">
                <h3 className="mb-2 text-fs300 text-line">{data.role}</h3>
                <h2 className="text-[1.5rem] md:text-fs600">{data.name}</h2>
              </div>
              <p className="my-6 text-center text-fs200 font-extralight leading-6 text-lightBlue">
                {data.bio}
              </p>
            </div>
          ))}
          <div className="mx-auto my-6 flex w-20 justify-between">
            {[
              "Douglas Hurley",
              "Mark Shuttleworth",
              "Victor Glover",
              "Anousheh Ansari",
            ].map((member) => (
              <button
                className={`${
                  IsActive === member ? "bg-white" : "bg-line"
                } h-[10px] w-[10px] rounded`}
                onClick={() => pickCrewMembers(member)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;