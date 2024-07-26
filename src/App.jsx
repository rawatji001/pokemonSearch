import PokemonList from "./components/PokemonList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-center  font-arial bg-gradient-to-t from-purple-950 to-black">
      <h1 className="text-4xl font-bold py-[20px] text-sky-200 drop-shadow-5xl">
        Pokémon List
      </h1>
      <PokemonList />
      <Footer />
    </div>
  );
}

export default App;
