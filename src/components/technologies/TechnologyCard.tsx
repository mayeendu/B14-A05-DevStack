import {
  type Dispatch,
  type SetStateAction,
} from "react";

import type { Itechnology } from "../../../src/types/technologyType"
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
    // Prevent duplicate added technology
    if (isSelected) {
      toast.error("Cannot be added twice!");
      return;
    }

    setSelectedTech((previousTech) => [...previousTech, technology,]);

    toast.success("Added to Stack!");
  };

  return (
    <div className={`card w-full bg-base-100 shadow-sm technology 
        ${isSelected ? "card-visited" : "card-not-visited"}`}>
      <div className="card-body p-4 sm:p-5">

        {/* Technology Logo & Speciality */}
        <div className="flex items-start justify-between gap-3">
          <img className="w-14 sm:w-16 md:w-20 h-auto object-contain"
            src={technology.technologyLogo}
            alt={`${technology.technologyName} logo`} />

          <span className="badge badge-xs sm:badge-sm badge-warning text-xs">
            {technology.speciality}
          </span>
        </div>

        {/* Technology Name */}
        <div className="mt-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold break-words">
            {technology.technologyName}
          </h2>
        </div>

        {/* Short Features */}
        <p className="text-sm sm:text-base text-base-content/80 leading-relaxed mt-2">
          {technology.shortFeatures}
        </p>

        {/* Technology Information */}
        <ul className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4">

          {/* Technology Type */}
          <li>
            <button
              type="button" className="btn btn-active btn-xs sm:btn-sm">
              {technology.technologyType}
            </button>
          </li>

          {/* Skill Level */}
          <li className="text-sm sm:text-base">
            {technology.skillLevel}
          </li>

          {/* Rating */}
          <li className="flex items-center gap-1 text-sm sm:text-base">
            <span>⭐</span>
            <span>{technology.rating}</span>
          </li>
        </ul>

        {/* Add to Stack Button */}
        <div className="mt-5">
          <button
            type="button"
            onClick={handleSelectTech}

            className={`technology w-full sm:w-auto
            ${isSelected ? "btn-visited" : "btn-not-visited"}`}>
            {isSelected ? "Stack added" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;