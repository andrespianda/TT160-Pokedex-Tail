const API_URL = "https://pokeapi.co/api/v2/";
export async function getPokemon(offset = 50) {
  let data = [];
  for (let i = 1; i <= offset; i++) {
    try {
      const response = await fetch(`${API_URL}/pokemon/${i}`);
      const resTipo = await fetch(`${API_URL}/berry/${i}`);
      const pokemon = await response.json();
      const pokemontipo = await resTipo.json();
      console.log(pokemontipo.natural_gift_type.name);
      data.push({ pokemon, pokemontipo });

      console.log(data);
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  return data;
}
