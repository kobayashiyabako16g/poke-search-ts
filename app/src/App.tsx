import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchToggle from "./components/SearchToggle";
import type { SearchType } from "./types/pokemon";

function App() {
  const [searchType, setSearchType] = useState<SearchType>("name");
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <>
      <h1>Poké Search</h1>
      <p className="description">Search for a Pokémon by name or ID</p>
      <SearchToggle searchType={searchType} onTypeChange={setSearchType} />
      <SearchForm
        searchType={searchType}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />
    </>
  );
}

export default App;
