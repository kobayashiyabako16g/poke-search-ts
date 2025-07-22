import axios from "axios";

// 入力バリデーション用の正規表現
const NUMERIC_REGEX = /^\d+$/;
const NAME_REGEX = /^[a-zA-Z-]+$/;
const BASE_URL = "https://pokeapi.co/api/v2";

// PokeAPIからポケモンデータを取得する関数
export const fetchPokemonByName = async (name: string) => {
  // 名前は英字とハイフンのみ許可
  if (!NAME_REGEX.test(name)) {
    throw new Error(
      "Invalid name format. Only letters and hyphens are allowed.",
    );
  }
  try {
    const response = await axios.get(
      `${BASE_URL}/pokemon/${name.toLowerCase()}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchPokemonById = async (id: string) => {
  // IDは数字のみ許可
  if (!NUMERIC_REGEX.test(id)) {
    throw new Error("Invalid ID format. Only numbers are allowed.");
  }

  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
