
import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "./types/technologyType";
import TechnologyCard from "./TechnologyCard";

export interface AvailableTechnologyProps {
  technologies: Itechnology[];
  selectedTech: Itechnology[];
  setSelectedTech: Dispatch<
    SetStateAction<Itechnology[]>>;
}

const AvailableTechnology = ({
  technologies,
  selectedTech,
  setSelectedTech,
}: AvailableTechnologyProps) => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {technologies.map((technology) => (
            <TechnologyCard
              key={
                technology.technologyName
              }
              technology={technology}
              selectedTech={selectedTech}
              setSelectedTech={setSelectedTech}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default AvailableTechnology;
