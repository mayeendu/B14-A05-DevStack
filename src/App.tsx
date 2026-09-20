import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Body from "./components/Body";
import Nav from "./components/Nav";
import Technologies from "./components/technologies/Technologies";
import type { Itechnology } from "./types/technologyType";
import FooterCopy from "./components/footerCopy";
import { Toaster } from "react-hot-toast";

const technologyFetch = async (): Promise<Itechnology[]> => {
  const dataTech = await fetch("/data.json");

  if (!dataTech.ok) {
    throw new Error("Failed to fetch technology data");
  }

  return dataTech.json();
};


const technologyPromise = technologyFetch();

function App() {

  const [selectedTech, setSelectedTech] = useState<Itechnology[]>([]);

  const countTech = selectedTech.length;

  return (
    <>
      <Nav />

      <Banner />

      <Body />

      <Suspense fallback={<h2>Loading.....</h2>}>
        <Technologies
          technologyPromise={technologyPromise}
          countTech={countTech}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
      </Suspense>

      <FooterCopy />

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
}

export default App;
