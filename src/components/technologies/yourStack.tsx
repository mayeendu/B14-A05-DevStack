import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../../../src/types/technologyType"
import toast from "react-hot-toast";

interface YourStackProps {
  selectedTech: Itechnology[];
  setSelectedTech: Dispatch<SetStateAction<Itechnology[]>>;
}

const YourStack = ({
  selectedTech,
  setSelectedTech,
}: YourStackProps) => {
  // Remove one technology
  const handleRemoveTech = (technologyId: number) => {
    setSelectedTech((previousTech) =>
      previousTech.filter(
        (tech) => tech.technologyId !== technologyId
      )
    );

    toast.error("Removed Tech!");
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedTech([]);
    toast.error("All Removed!");
  };

  // Number of selected technologies
  const countTech = selectedTech.length;

  return (
    <div>
      <div className="card w-85 bg-base-100 shadow-sm">
        <div className="card-body">

          {/* Heading */}
          <h2 className="card-title text-2xl font-bold">
            Your Stack
          </h2>

          {/* Count */}
          <p className="text-lg text-base-content/70">
            {countTech} Technology Count
          </p>

          {/* Selected Technologies */}
          <div className="mt-4 space-y-3">
            {selectedTech.map((technology) => (
              <div
                key={technology.technologyId}
                className="flex items-center justify-between gap-3 p-3 rounded-lg bg-base-200"
              >
                {/* Logo + Name */}
                <div className="flex items-center gap-3">
                  <img
                    src={technology.technologyLogo}
                    alt={technology.technologyName}
                    className="w-10 h-10 object-contain"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {technology.technologyName}
                    </h3>

                    <p className="text-xs opacity-70">
                      {technology.technologyType}
                    </p>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => handleRemoveTech(technology.technologyId)}
                  className="btn btn-circle btn-sm btn-error"
                  aria-label={`Remove ${technology.technologyName}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Empty Stack */}
          {selectedTech.length === 0 && (
            <p className="text-center text-base-content/50 py-5">
              Your stack is empty.
            </p>
          )}

          {/* Remove All Button */}
          <div className="card-actions justify-end mt-9">
            <button
              type="button"
              onClick={handleRemoveAll}
              disabled={countTech === 0}
              className="btn btn-outline btn-secondary w-full rounded-xl"
            >
              Remove All
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default YourStack;