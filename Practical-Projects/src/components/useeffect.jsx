import { useEffect, useState } from "react";

export default function Practice() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);
  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <>
      <h2>Counter:{count}</h2>
      <button
        onClick={() => {
          setCount((ct) => ct + 1);
        }}
      >
        Increment
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
}
