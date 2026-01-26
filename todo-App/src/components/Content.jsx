import Data from "./common/data.jsx";
export default function Content() {
  var list = [
    { text: "TODO ITEM 0", date: "25/12/2020" },
    { text: "TODO ITEM 1", date: "25/12/2020" },
    { text: "TODO ITEM 2", date: "25/12/2020" },
    { text: "TODO ITEM 3", date: "25/12/2020" },
    { text: "TODO ITEM 4", date: "25/12/2020" },
    { text: "TODO ITEM 5", date: "25/12/2020" },
  ];
  return (
    <>
      {list.length ? (
        <div className="content-container">
          {list.map((item, index) => {
            return <Data text={item.text} date={item.date} key={index}></Data>;
          })}
        </div>
      ) : (
        <h2>No TODOs Available</h2>
      )}
    </>
  );
}
