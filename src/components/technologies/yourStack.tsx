const YourStack = () => {
  return (
    <div>
      <div className="card w-85 bg-base-100 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Your Stack</h2>
          <p className="text-lg text-base-content/70"></p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-outline btn-secondary w-full rounded-xl">
              Remove All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourStack;
