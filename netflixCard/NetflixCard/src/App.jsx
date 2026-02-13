import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="image"></div>
        <div className="content">
          <h1 className="heading">STRANGER THINGS</h1>
          <div className="dynamicDetails">
            <div className="stars">* * * * *</div>
            <div className="views">(3,526)</div>
            <div className="year">2016</div>
            <div className="duration">2h 13m</div>
          </div>
          <div className="description">
            <p>
              Stranger Things is an American science fiction horror television
              series created by The Duffer Brothers for Netflix. The show
              premiered on July 15, 2016, and concluded with its fifth and final
              season on December 31, 2025, after five seasons and 42 episodes.
              Set in the 1980s in the fictional town of Hawkins, Indiana, the
              series blends supernatural horror, government conspiracy, and
              coming-of-age drama, drawing heavy inspiration from the works of
              Steven Spielberg, Stephen King, and John Carpenter.{" "}
            </p>
          </div>
          <div className="starring">
            <p>
              <span>Starring: </span>Steven Spielberg, Stephen King, and John
              Carpenter
            </p>
          </div>

          <div className="directedBy">
            <p>
              <span>Directed By: </span>John Carpenter
            </p>
          </div>
          <div className="buttons">
            <div className="play-button">
              <button>Play Now</button>
            </div>
            <div className="add-to-cart-button">
              <button>Add to Watch List</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
