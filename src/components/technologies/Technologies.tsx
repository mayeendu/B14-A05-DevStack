import { use } from "react";
import type {
  Dispatch,
  SetStateAction,
} from "react";

import type { Itechnology } from "./types/technologyType";
import AvailableTechnology from "./AvailableTechnology";
import YourStack from "./yourStack";

export interface TechnologyProps {
  technologyPromise: Promise<Itechnology[]>;
  countTech: number;
  selectedTech: Itechnology[];
  setSelectedTech: Dispatch<SetStateAction<Itechnology[]>>;
}

const Technologies = ({
  technologyPromise,
  countTech,
  selectedTech,
  setSelectedTech,
}: TechnologyProps) => {

  // Resolve the technology promise
  const technologies = use(technologyPromise);

  return (
    <div className="container mx-auto">

      <div className="flex justify-between">

        {/* Available Technologies */}
        <AvailableTechnology
          technologies={technologies}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />

        {/* Your Stack */}
        <YourStack
          countTech={countTech}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />

      </div>

    </div>
  );
};

export default Technologies;
