import { Link } from "react-router-dom";

export default function PokeCard({ pokemon }) {
  return (
    <>
    <Link to={"/POKE/" + pokemon.name}>
     <div className="max-w-sm rounded-4xl border border-red-900 overflow-hidden shadow-lg gap-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-2 mt-2">
          {pokemon.id}
        </span>
        <img
          className="w-1/2 justify-self-center"
          src={pokemon.sprites.front_default}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{pokemon.name}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <h3 className="text-red-900">Tipos</h3>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {pokemon.types.map((tipo) => {
              return tipo.type.name;
            })}
          </span>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </Link>
     
    </>
  );
}
