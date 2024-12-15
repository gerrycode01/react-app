import React from "react";
import { TodoContex } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContex);
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
