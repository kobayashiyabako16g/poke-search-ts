import "./style.css";

const SearchToggle = () => {
  return (
    <div className="search-toggle">
      <button type="button" className="name">
        Search by Name
      </button>
      <button type="button" className="id">
        Search by ID
      </button>
    </div>
  );
};

export default SearchToggle;
