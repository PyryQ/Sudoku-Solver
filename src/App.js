import React, { useState } from 'react';
import './SudokuGrid.css';
import Solver from './SudokuSolver';
import './App.css';
import Grid from './Grid';

const App = () => {
  
  const [grid, setGrid] = useState([    
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
  ]);

  const [isSolvable, setIsSolvable] = useState(true);

  const handleChange = (event, rowIndex, colIndex) => {
    const updatedGrid = [...grid];
    updatedGrid[rowIndex][colIndex] = event.target.value;
    setGrid(updatedGrid);
  };

  const handleSquareClick = (row, col) => {
    const newGrid = [...grid];
    newGrid[row][col] = 1;
    setGrid(newGrid);
  };


  const solveGrid = () => {
    if (Solver.solveSudoku(grid, setGrid)) {
      setGrid(grid);
    } else {
      setIsSolvable(false);
      console.log("No solution exists");
    }
  };

  return (
    <div className="sudoku-grid">
      <div className="title-container">
        <h2 className='title'>Sudoku Solver</h2>
      </div>
      <br />
      <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((col, colIndex) => (
            <input 
              key={colIndex}
              type="text"
              value={col || ''}
              maxLength="1"
              onChange={event => handleChange(event, rowIndex, colIndex)}
              className="square"
            />
          ))}
        </div>
      ))}
    </div>
{/*         {Array.from({ length: 9 }, (_, rowIndex) => (
          <div key={rowIndex} className="row">
            {grid.slice(rowIndex * 9, rowIndex * 9 + 9).map((square, squareIndex) => (
              <input
                type="text"
                value={square || ""}
                onChange={(event) => handleChange(event, rowIndex * 9 + squareIndex)}
                className="square"
                key={squareIndex}
              />
            ))}
          </div>
        ))} */}
      <br />
      <button onClick={solveGrid}>Solve</button>
      {isSolvable ? (
        <p>This sudoku might be solvable.</p>
    ) : (
      <p>This sudoku is not solvable.</p>
    )}
    </div>
  );
};

export default App;

