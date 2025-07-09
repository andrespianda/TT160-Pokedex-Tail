import { useState } from "react";

import PokemonList from "./components/PokemonList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center ">
        <PokemonList />
      </div>
    </>
  );
}

export default App;
