const API_URL = "https://pokeapi.co/api/v2/";
export async function getPokemon(offset = 50) {
  let data = [];
  for (let i = 1; i <= offset; i++) {
    try {
      const response = await fetch(`${API_URL}/pokemon/${i}`);
      const pokemon = await response.json();
      console.log(pokemon.types);
      data.push(pokemon);

      // console.log(data);
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  return data;
}


export async function getPokemonByName(name) {
// let data = [];
   try {
      const response = await fetch(`${API_URL}/pokemon/${name}`);
      const pokemon = await response.json();
      console.log(pokemon.types);
      return pokemon

      // console.log(data);
    } catch (error) {
      console.error(error);
      return false;
    }
    
}