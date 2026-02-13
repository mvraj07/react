import { useState } from "react";
import SearchBar from "./Searchbar";
import Content from "./Content";
export default function Layout() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todo")) || [],
  );
  const addTodo = (data) => {
    const updatedList = [...list, data];
    localStorage.setItem("todo", JSON.stringify(updatedList));
    setList(updatedList);
  };
  return (
    <>
      <div className="layout-container">
        <SearchBar addTodo={addTodo} />
      </div>
      <div>
        <Content list={list}></Content>
      </div>
    </>
  );
}
