import React, { use } from "react";
import type { Itechnology } from "./types/technologyType.ts";
import AvailableTechnology from "./AvailableTechnology";

interface TechnologiesProps {
  technologyPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologyPromise }: TechnologiesProps) => {
  const technologies = use(technologyPromise);

  console.log(technologies, "technologies");

  return (
    <div>
      <AvailableTechnology />
    </div>
  );
};

export default Technologies;
