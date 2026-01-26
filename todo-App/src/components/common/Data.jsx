import Button from "./Button";
export default function Data({ text, date }) {
  return (
    <>
      <div className="data-container">
        <h2>{text}</h2>
        <h2>{date}</h2>
        <Button color="red" text="Delete"></Button>
      </div>
    </>
  );
}
