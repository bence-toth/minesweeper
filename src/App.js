import "./App.css";

const numberOfRows = 10;
const numberOfColumns = 15;
const numberOfMines = (numberOfRows * numberOfColumns) / 5;

const App = () => {
  return (
    <div
      className="gameBoard"
      style={{ aspectRatio: `${numberOfColumns} / ${numberOfRows}` }}
    >
      {Array(numberOfRows)
        .fill()
        .map((_, rowIndex) => (
          <div class="row">
            {Array(numberOfColumns)
              .fill()
              .map((_, columnIndex) => (
                <div class="cell">
                  <button
                    data-row={rowIndex}
                    data-column={columnIndex}
                  ></button>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default App;
