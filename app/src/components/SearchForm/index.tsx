import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { fetchPokemonById, fetchPokemonByName } from "../../api/pokemonApi";
import type { Pokemon, SearchType } from "../../types/pokemon";
import PokemonCard from "../PokemonCard";
import "./style.css";

type SearchFormProps = {
  searchTerm: string;
  searchType: SearchType;
  onSearchTermChange: (term: string) => void;
  onSubmit: (e: FormEvent) => void;
};

const SearchForm = ({
  searchTerm,
  searchType,
  onSearchTermChange,
  onSubmit,
}: SearchFormProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  // フォーム送信時の処理
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトの送信動作を防止
    try {
      // 検索タイプに応じてAPIを呼び分け
      const searchKey = e.target[0].value;
      const result =
        searchType === "id"
          ? await fetchPokemonById(searchKey)
          : await fetchPokemonByName(searchKey);
      setPokemon(result);
      // データの構造を確認
      console.log("ID:", result.id);
      console.log("名前:", result.name);
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchTermChange(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="search-form">
        <input
          type={searchType === "id" ? "number" : "text"}
          placeholder={
            searchType === "name"
              ? "Enter name (e.g. pikachu)"
              : "Enter ID (e.g. 25)"
          }
          value={searchTerm}
          onChange={handleTermChange}
          min={searchType === "id" ? 1 : undefined}
        />
        <button type="submit">Search</button>
      </form>
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </>
  );
};

export default SearchForm;
