import { Suspense } from "react";
import Banner from "./components/Banner";
import Body from "./components/Body";
import Nav from "./components/Nav";
import Technologies from "./components/technologies/Technologies";
import type { Itechnology } from "./types/technologyType";

const technologyFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  return res.json();
};

// Initiate the promise once outside the component render cycle
const technologyPromise = technologyFetch();

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Body />
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Technologies technologyPromise={technologyPromise} />
      </Suspense>
    </>
  );
}

export default App;
