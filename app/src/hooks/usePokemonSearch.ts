import { useCallback, useState } from "react";
import { fetchPokemonById, fetchPokemonByName } from "../api/pokemonApi";
import type { Pokemon, SearchType } from "../types/pokemon";

type UsePokemonSearchReturn = {
  pokemon: Pokemon | null;
  error: string | null;
  searchPokemon: (query: string, type: SearchType) => Promise<void>;
  clearResults: () => void;
};

export const usePokemonSearch = (): UsePokemonSearchReturn => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);

  const searchPokemon = useCallback(
    async (query: string, type: SearchType): Promise<void> => {
      clearResults();
      try {
        const result =
          type === "id"
            ? await fetchPokemonById(query)
            : await fetchPokemonByName(query);

        setPokemon(result);
      } catch (error) {
        setError(error.message || "ポケモンが見つかりませんでした");
        return null;
      }
    },
    [],
  );

  const clearResults = () => {
    setPokemon(null);
    setError(null);
  };

  return {
    pokemon,
    error,
    searchPokemon,
    clearResults,
  };
};
