import { useCallback, useState } from "react";
import { fetchPokemonById, fetchPokemonByName } from "../api/pokemonApi";
import type { Pokemon, SearchType } from "../types/pokemon";

type UsePokemonSearchReturn = {
  pokemon: Pokemon | null;
  error: string | null;
  searchPokemon: (query: string, type: SearchType) => Promise<void>;
  clearResults: () => void;
  isLoading: boolean;
};

export const usePokemonSearch = (): UsePokemonSearchReturn => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchPokemon = useCallback(
    async (query: string, type: SearchType): Promise<void> => {
      clearResults();
      try {
        setIsLoading(true);
        const result =
          type === "id"
            ? await fetchPokemonById(query)
            : await fetchPokemonByName(query);

        setPokemon(result);
      } catch (error: any) {
        setError(error.message || "ポケモンが見つかりませんでした");
        return;
      } finally {
        setIsLoading(false);
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
    isLoading,
    searchPokemon,
    clearResults,
  };
};
