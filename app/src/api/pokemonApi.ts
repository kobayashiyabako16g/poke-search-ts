import axios, { AxiosError } from "axios";
import type { AppError, Pokemon, SearchType } from "../types/pokemon";

type ValidationResult = {
  isValid: boolean;
  errorMessage: string;
};

const validateInput = (query: string, type: SearchType): ValidationResult => {
  if (!query) {
    return {
      isValid: false,
      errorMessage:
        type === "name"
          ? "ポケモン名を入力してください"
          : "ポケモン ID を入力してください",
    };
  }

  if (type === "name") {
    if (query.length < 2) {
      return { isValid: false, errorMessage: "2文字以上で入力してください" };
    }
    if (!NAME_REGEX.test(query)) {
      return { isValid: false, errorMessage: "英字のみ入力可能です" };
    }
  } else {
    if (!NUMERIC_REGEX.test(query) || parseInt(query, 10) < 1) {
      return { isValid: false, errorMessage: "1以上の数値を入力してください" };
    }
  }

  return { isValid: true, errorMessage: "" };
};

const createAppError = (message: string, status: number): AppError => ({
  message,
  status,
});

// 入力バリデーション用の正規表現
const NUMERIC_REGEX = /^\d+$/;
const NAME_REGEX = /^[a-zA-Z-]+$/;
const BASE_URL = "https://pokeapi.co/api/v2";

// PokeAPIからポケモンデータを取得する関数
export const fetchPokemon = async (
  query: string,
  type: SearchType,
): Promise<Pokemon | AppError> => {
  // API 呼び出し前のバリデーション
  const trimmedQuery = query.trim();
  const validation = validateInput(trimmedQuery, type);

  if (!validation.isValid) {
    return createAppError(validation.errorMessage, 400);
  }
  try {
    const response = await axios.get<Pokemon>(
      `${BASE_URL}/pokemon/${trimmedQuery.toLowerCase()}`,
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return createAppError(
        error.response?.status === 404
          ? `ポケモン "${query}" が見つかりません`
          : `APIエラーが発生しました (${error.response?.status})`,
        error.response?.status || 500,
      );
    }
    return createAppError("予期しないエラーが発生しました", 500);
  }
};
