import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      <h1>Poké Search</h1>
      <p className="description">Search for a Pokémon by name or ID</p>
      <SearchForm />
    </>
  );
}

export default App;
