import { useState } from "react";
import { fetchPokemonById } from "../../api/pokemonApi";
import "./style.css";
import PokemonCard from "../PokemonCard";

const SearchForm = () => {
  const [pokemon, setPokemon] = useState(null);

  // フォーム送信時の処理
  const handleSubmit = async (e) => {
    e.preventDefault(); // デフォルトの送信動作を防止
    try {
      // 検索タイプに応じてAPIを呼び分け（後で実装）
      const result = await fetchPokemonById(e.target[0].value);
      setPokemon(result);
      // データの構造を確認
      console.log("ID:", result.id);
      console.log("名前:", result.name);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <input type="text" placeholder="Enter ID or Name" />
        <button type="submit">Search</button>
      </form>
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </>
  );
};

export default SearchForm;
