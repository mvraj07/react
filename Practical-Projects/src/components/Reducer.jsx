import { useReducer } from "react";
const initState = {
  count: 0,
  inc: 2,
  dec: 2,
};
const ReducerFn = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.inc };
    case "decrement":
      return { ...state, count: state.count - state.dec };
    case "reset":
      return { ...state, count: 0 };
  }
};
export function ReducerComp() {
  const [stateData, dispatch] = useReducer(ReducerFn, initState);
  return (
    <>
      <h1>{stateData.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
