import { useCallback, useState } from "react";
import { fetchPokemon } from "@/api/pokemonApi";
import type { AppError, Pokemon, SearchType } from "@/types/pokemon";

type UsePokemonSearchReturn = {
  pokemon: Pokemon | null;
  error: AppError | null;
  searchPokemon: (query: string, type: SearchType) => Promise<void>;
  clearResults: () => void;
  isLoading: boolean;
};

export const usePokemonSearch = (): UsePokemonSearchReturn => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<AppError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchPokemon = useCallback(
    async (query: string, type: SearchType): Promise<void> => {
      clearResults();
      try {
        setIsLoading(true);
        const result = await fetchPokemon(query, type);

        if ("status" in result && "message" in result) {
          setError(result);
        } else {
          setPokemon(result);
        }
      } catch (error: any) {
        const appErr = error as AppError;
        setError({
          message: appErr.message || "予期しないエラーが発生しました",
          status: appErr.status || 500,
        });
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
