import Data from "./common/data.jsx";
export default function Content({ list }) {
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
