/* eslint-disable react-hooks/refs */
import React from "react";
import { useRef, useState } from "react";

export default function ReactMemo() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <Child></Child>
    </>
  );
}

const Child = React.memo(() => {
  let counter = useRef(0);
  return (
    <>
      <h1 style={{ color: "white" }}>
        i rendered {counter.current++} times now
      </h1>
    </>
  );
});
