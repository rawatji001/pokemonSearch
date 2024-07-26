import { useState, useEffect } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=150"
      );
      setPokemon(response.data.results);
    };
    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-center w-full min-h-[100vh]">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-2 p-1 px-2 w-80 bg-transparent border-2  border-sky-200 rounded-md placeholder:text-sky-200 text-sky-200 outline-none hover:drop-shadow-5xl transition-all"
      />
      {filteredPokemon.length <= 0 ? (
        <div className="mt-12">
          <h1 className="md:text-[12rem] text-9xl font-extrabold text-red-600 drop-shadow-6xl">
            404
          </h1>
          <span className="md:text-7xl text-4xl tracking-wide text-sky-200 drop-shadow-6xl ">
            Item Not Found!!
          </span>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center p-5 gap-5">
          {filteredPokemon.map((poke, index) => (
            <div
              key={index}
              className="border-2 border-sky-200 p-2 rounded-xl transition-all hover:drop-shadow-6xl "
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt={poke.name}
                className="w-32 transition-all hover:scale-110"
              />
              <h3 className="text-lg text-sky-200">{poke.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
