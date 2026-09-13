import heroimage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <>
      <div className="flex items-center justify-center container mx-auto">
        <div className="flex flex-col items-start space-y-6">
          <div className="flex flex-col justify-between gap-4 container mx-auto">
            <div>
              <h2 className="text-7xl font-bold "> Build Your Ideal </h2>
              <h2 className="bg-gradient-to-r from-[#da5e39] from-50 to-[#6f02dc] bg-clip-text text-transparent text-7xl font-bold ">
                {" "}
                Development Stack{" "}
              </h2>
            </div>
            <p className="font-sans text-2xl text-slate-600 ">
              Explore forntend, Baackend, database, and tooling Options, compare
              them, and put together the stack that fits your next project
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-[#da5e39] to-[#e911cc] hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-2.5 rounded-lg shadow-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400">
              Explore Technologies
            </button>

            <button className="bg-transparent text-gray-700 font-medium px-6 py-2.5 border border-gray-300 hover:bg-gray-100 hover:border-gray-400 rounded-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <img src={heroimage} alt="Hero" />
        </div>
      </div>
    </>
  );
};

export default Banner;
