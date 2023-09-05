import { useState } from "react";
import "./App.css";

const numberOfRows = 10;
const numberOfColumns = 15;
const numberOfMines = (numberOfRows * numberOfColumns) / 5;

const generateRandomBoard = (startRow, startColumn) => {
  const mines = Array(numberOfRows * numberOfColumns - numberOfMines - 1).fill(
    "hidden"
  );
  const blanks = Array(numberOfMines).fill("mine");
  const boardArray = [...mines, ...blanks]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  boardArray.splice(startRow * numberOfColumns + startColumn, 0, "hidden");
  const board = [];
  let i = 0;
  let n = boardArray.length;
  while (i < n) {
    board.push(boardArray.slice(i, (i += numberOfColumns)));
  }
  return board;
};

const App = () => {
  const [board, setBoard] = useState();

  const handleCellClick = (event) => {
    const clickedRow = +event.target.dataset.row;
    const clickedColumn = +event.target.dataset.column;
    console.log(clickedRow, clickedColumn);
    if (board === undefined) {
      setBoard(generateRandomBoard(clickedRow, clickedColumn));
    } else {
    }
  };

  console.log(board && board[3][5]);

  return (
    <div
      className="gameBoard"
      style={{ aspectRatio: `${numberOfColumns} / ${numberOfRows}` }}
    >
      {Array(numberOfRows)
        .fill()
        .map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array(numberOfColumns)
              .fill()
              .map((_, columnIndex) => (
                <div className="cell" key={columnIndex}>
                  <button
                    data-row={rowIndex}
                    data-column={columnIndex}
                    onClick={handleCellClick}
                  ></button>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default App;
