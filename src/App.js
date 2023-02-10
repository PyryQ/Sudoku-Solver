import React, { useState } from "react";
import "./SudokuGrid.css";
import Solver from "./SudokuSolver";
import "./App.css";

const App = () => {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const resetGrid = () => {
    setGrid(Array.from({ length: 9 }, () => Array(9).fill(0)));
  };

  const handleChange = (event, rowIndex, colIndex) => {
    const updatedGrid = [...grid];
    const value = event.target.value;
    if (Solver.isValidAddition(rowIndex, colIndex, value, updatedGrid)) {
      updatedGrid[rowIndex][colIndex] = value;
      setGrid(updatedGrid);
    }
  };

  const solveGrid = () => {
    if (Solver.solveSudoku(grid, setGrid)) {
      setGrid(grid);
    } else {
      console.log("No solution exists");
    }
  };

  return (
    <div className="sudoku-grid">
      <div className="title-container">
        <h2 className="title">Sudoku Solver</h2>
      </div>
      <br />
      <div className="grid-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((col, colIndex) => (
              <input
                key={colIndex}
                type="text"
                value={col || ""}
                maxLength="1"
                onChange={(event) => {
                  if (/^\d$/.test(event.target.value)) {
                    handleChange(event, rowIndex, colIndex);
                  }
                }}
                className="square"
              />
            ))}
          </div>
        ))}
      </div>
      <br />
      <button onClick={solveGrid}>Solve</button>
      <br />
      <button onClick={resetGrid}>Reset Grid</button>
      <br />
    </div>
  );
};

export default App;
