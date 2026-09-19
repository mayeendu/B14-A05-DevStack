import type { Itechnology } from "./types/technologyType";
import TechnologyCard from "./TechnologyCard";
import { useState } from "react";

export interface technologyProps {
  technologyPromise: Promise<Itechnology[]>;
}

const AvailableTechnology = ({ technologies }) => {
  const [visitedTechnology, setVisitedTechnology] = useState<Itechnology>([]);
  //   console.log(technologies, "technologies from available technologies");

  const handleVisitedTechnology = (technology: Itechnology): void => {
    const newVisitedTechnology = [...visitedTechnology, technology];
    setVisitedTechnology(newVisitedTechnology);
  };

  return (
    <div>
      <div>
        <div className="grid grid-cols-3 gap-2">
          {technologies.map((technology: Itechnology) => {
            return (
              <TechnologyCard
                key={technology.technologyId || technology.id}
                technology={technology}
                handleVisitedTechnology={handleVisitedTechnology}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AvailableTechnology;
