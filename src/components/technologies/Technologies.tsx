import { use } from "react";
import type {
  Dispatch,
  SetStateAction,
} from "react";

import type { Itechnology } from "../../../src/types/technologyType"
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
  selectedTech,
  setSelectedTech,
}: TechnologyProps) => {

  // Resolve the technology promise
  const technologies = use(technologyPromise);

  return (
    <div className="container mx-auto">

      <div className="flex flex-col lg:flex-row gap-6">

        {/* Available Technologies */}
        <AvailableTechnology
          technologies={technologies}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />

        {/* Your Stack */}
        <YourStack
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />

      </div>

    </div>
  );
};

export default Technologies;
