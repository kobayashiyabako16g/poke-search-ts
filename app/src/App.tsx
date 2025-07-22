import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchToggle from "./components/SearchToggle";

function App() {
  return (
    <>
      <h1>Poké Search</h1>
      <p className="description">Search for a Pokémon by name or ID</p>
      <SearchToggle />
      <SearchForm />
    </>
  );
}

export default App;
