import {
  type Dispatch,
  type SetStateAction,
} from "react";

import type { Itechnology } from "./types/technologyType";
import "./technology.css";
import toast from "react-hot-toast";

interface TechnologyCardProps {
  technology: Itechnology;
  selectedTech: Itechnology[];
  setSelectedTech: Dispatch<SetStateAction<Itechnology[]>>;
}

const TechnologyCard = ({
  technology,
  selectedTech,
  setSelectedTech,
}: TechnologyCardProps) => {

  // Check if this technology is already in the stack
  const isSelected = selectedTech.some((tech) =>
    tech.technologyName === technology.technologyName
  );

  // Add technology to the stack
  const handleSelectTech = () => {
    // Prevent duplicate technology
    if (isSelected) {
      return;
    }

    setSelectedTech((previousTech) => [...previousTech, technology,]);

    toast.success(`${technology.technologyName} added to your stack!`);
  };

  return (
    <div className={`card w-96 bg-base-100 shadow-sm technology 
        ${isSelected ? "card-visited" : "card-not-visited"}`}>
      <div className="card-body">

        {/* Technology Logo & Speciality */}
        <div className="flex justify-between gap-3">
          <img className="w-20 h-auto"
            src={technology.technologyLogo}
            alt={`${technology.technologyName} logo`} />

          <span className="badge badge-xs badge-warning">
            {technology.speciality}
          </span>
        </div>

        {/* Technology Name */}
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">
            {technology.technologyName}
          </h2>
        </div>

        {/* Short Features */}
        <p>
          {technology.shortFeatures}
        </p>

        {/* Technology Information */}
        <ul className="flex justify-between items-center m-2">

          {/* Technology Type */}
          <li>
            <button
              type="button"
              className="btn btn-active h-6" >
              {technology.technologyType}
            </button>
          </li>

          {/* Skill Level */}
          <li>
            {technology.skillLevel}
          </li>

          {/* Rating */}
          <li className="flex items-center gap-1">
            <span>⭐</span>
            <span>{technology.rating}</span>
          </li>
        </ul>

        {/* Add to Stack Button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={handleSelectTech}
            disabled={isSelected}
            className={`technology 
            ${isSelected ? "btn-visited" : "btn-not-visited"}`}>
            {isSelected ? "Stack added" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;