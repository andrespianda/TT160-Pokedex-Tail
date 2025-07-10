// import { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonPage from "./components/PokemonPage";


function App() {
  // const [count, setCount] = useState(0);

  return (
    <>  
    <Routes>
      <Route path="/" element={<PokemonList/>}/>
      <Route path="/POKE/:name" element={<PokemonPage/>}/>
    </Routes>
    </>
    // <>
    //   <div className="flex justify-center ">
    //     <PokemonList />
    //   </div>
    // </>
  );
}

export default App;
