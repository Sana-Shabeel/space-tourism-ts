import React from "react";

interface Props {
  title: string;
  description: string;
}

export const Distance = ({ title, description }: Props) => {
  return (
    <div className="py-3">
      <p className="mb-3 text-center font-barlowCond text-fs300 font-light uppercase tracking-2xl text-lightBlue lg:text-left lg:text-fs200">
        {title}
      </p>
      <h3 className="text-center font-bellefair text-fs500 font-light uppercase text-white lg:text-left">
        {description}
      </h3>
    </div>
  );
};
