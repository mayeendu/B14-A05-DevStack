import React, { use } from "react";
import type { Itechnology } from "./types/technologyType.ts";
import AvailableTechnology from "./AvailableTechnology";
import YourStack from "./yourStack.tsx";

interface TechnologiesProps {
  technologyPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologyPromise }: TechnologiesProps) => {
  const technologies = use(technologyPromise);

  // console.log(technologies);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <AvailableTechnology technologies={technologies}> </AvailableTechnology>
        <YourStack></YourStack>
      </div>
    </div>
  );
};

export default Technologies;
