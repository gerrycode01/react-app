import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      className="TodoSearch"
      placeholder="Hola"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}
export { TodoSearch };
