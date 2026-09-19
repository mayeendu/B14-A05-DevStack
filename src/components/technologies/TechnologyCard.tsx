import React, { useState } from "react";
import type { Itechnology } from "./types/technologyType";
import { IoIosStar, IoMdStar } from "react-icons/io";
import "./technology.css";

export interface technologyProps {
  technology: Itechnology;
  handleVisitedTechnology: (technology: Itechnology) => void;
  technologyPromise: Promise<Itechnology[]>;
}

const TechnologyCard = ({
  technology,
  handleVisitedTechnology,
}: {
  technology: Itechnology;
}) => {
  const [visited, setVisited] = useState<boolean>(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedTechnology(technology);
  };

  return (
    <div
      className={`card w-96 bg-base-100 shadow-sm ${visited ? "card-visited" : "card-not-visited"} technology`}
    >
      <div className="card-body">
        <div className="flex justify-between gap-3">
          <img className="w-20 h-auto" src={technology.technologyLogo} />

          <span className="badge badge-xs badge-warning ">
            {technology.speciality}
          </span>
        </div>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold"> {technology.technologyName} </h2>
        </div>
        <p> {technology.shortFeatures} </p>

        <ul className="flex justify-between m-2">
          <button className="btn btn-active h-6">
            {" "}
            {technology.technologyType}{" "}
          </button>
          <li> {technology.skillLevel} </li>
          <div className="flex justify-items-center">
            <li>
              {" "}
              <IoMdStar className="text-yellow-500" />{" "}
            </li>
            <li>{technology.rating}</li>
          </div>
        </ul>
        <div className="mt-6">
          <button
            onClick={handleVisited}
            className={`technology ${visited ? "btn-visited" : "btn-not-visited"}`}
          >
            {visited ? "Stack added" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
