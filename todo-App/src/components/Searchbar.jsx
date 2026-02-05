import { useState } from "react";
import Button from "./common/Button";
export default function SearchBar({ addTodo }) {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo || !date) return;
    addTodo({ text: todo, date });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="Searchbarcontainer">
          <input
            type="text"
            placeholder="Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <Button type="submit" color="green" text="Add ToDo" />
        </div>
      </form>
    </>
  );
}
