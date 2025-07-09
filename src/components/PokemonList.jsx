import { useState, useEffect } from "react";
import { getPokemon } from "../services/pokeapi";
import PokeCard from "./PokeCard";
export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemon(10);
      setPokemons(data);
    }
    fetchData();
  }, []);
  console.log(pokemons);
  return (
    <>
      <h3 className="text-4xl text-orange-800 flex ">Pokedex</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
