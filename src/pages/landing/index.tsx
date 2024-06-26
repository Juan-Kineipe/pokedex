import { useEffect, useState } from "react";
import { PokemonData } from "../../utils/pokemon-data";
import { api } from "../../services/api";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Card } from "../../components/card";
import "./styles.scss";
import { CardSkeleton } from "../../components/card-skeleton";

export const Landing = () => {
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonData(0, 40);
  }, []);

  useEffect(() => {
    getPokemonData(offset, 40);
  }, [offset]);

  const getPokemonData = async (offset: number, limit: number) => {
    try {
      setLoading(true);
      // get list of pokemon names
      const pokemonList = await api.listPokemons(offset, limit);
      // get unique data of each pokemon
      const promise = pokemonList.results.map(async (pokemon: any) => {
        const pokemonData = await api.getPokemonByName(pokemon.name);
        const speciesData = await api.getPokemonSpeciesById(pokemonData.id);
        let completeData: PokemonData = {
          pokemon: pokemonData,
          species: speciesData,
        };
        return completeData;
      });
      let pokemons = await Promise.all(promise);
      setPokemonList(pokemons);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          {loading && <CardSkeleton cards={40} />}
          {!loading &&
            pokemonList.map((data) => (
              <Card key={data.pokemon.id} data={data} />
            ))}
        </div>
      </main>
      <Footer handleOffset={setOffset} />
    </>
  );
};
