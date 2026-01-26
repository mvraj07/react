import Button from "./common/Button";
export default function SearchBar({ color, text }) {
  return (
    <>
      <form action="#" method="post">
        <div className="Searchbarcontainer">
          <input type="text" />
          <input type="date" />
          <Button type="submit" color={color} text={text} />
        </div>
      </form>
    </>
  );
}
