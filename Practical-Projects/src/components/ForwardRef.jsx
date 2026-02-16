import { useBioDetailsContext } from "./ContextApi";

export default function ForwardRefParent() {
  return (
    <>
      <ForwardRefChild></ForwardRefChild>
    </>
  );
}

const ForwardRefChild = () => {
  const { myName, myAge, output } = useBioDetailsContext();
  output();
  return (
    <>
      {/* <input type="text" ref={ref} name={prop} /> */}
      <h1>{myName}</h1>
      <h1>{myAge}</h1>
    </>
  );
};
