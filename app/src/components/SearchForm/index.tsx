import "./style.css";

const SearchForm = () => {
  // フォーム送信時の処理
  const handleSubmit = (e) => {
    e.preventDefault(); // デフォルトの送信動作を防止
    console.log("submit");
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input type="text" placeholder="Enter ID or Name" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
