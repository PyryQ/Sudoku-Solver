const solveSudoku = (grid, setGrid) => {
  // Check if the number being placed at the current square is valid
  const isValid = (x, y, n) => {
    // Check the row
    for (let i = 0; i < 9; i++) {
      // Return false if the number already exists in the row
      if (grid[x][i] === n) {
        return false;
      }
    }

    // Check the column
    for (let i = 0; i < 9; i++) {
      // Return false if the number already exists in the column
      if (grid[i][y] === n) {
        return false;
      }
    }

    // Check the 3x3 subgrid
    const x0 = Math.floor(x / 3) * 3;
    const y0 = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Return false if the number already exists in the subgrid
        if (grid[x0 + i][y0 + j] === n) {
          return false;
        }
      }
    }

    // Return true if the number is valid for the current square
    return true;
  };

  // Recursively solve the sudoku puzzle
  const solve = (grid) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] === 0) {
          for (let n = 1; n <= 9; n++) {
            if (isValid(i, j, n)) {
              // Place the number and move on to the next square
              grid[i][j] = n;
              if (solve(grid)) {
                return true;
              }
              // Backtrack and try a different number if the current solution is incorrect
              grid[i][j] = 0;
            }
          }
          return false;
        }
      }
    }
    // Return true if a solution is found
    return true;
  };

  // Call the solve function and update the grid if a solution is found
  if (solve(grid)) {
    setGrid(grid);
  }
};

const isValidAddition = (x, y, value, grid) => {
  // Check the row
  for (let i = 0; i < 9; i++) {
    // Return false if the number already exists in the row
    if (grid[x][i] !== 0) {
      if (grid[x][i] === value) {
        return false;
      }
    }
  }

  // Check the column
  for (let i = 0; i < 9; i++) {
    // Return false if the number already exists in the column
    if (grid[i][y] !== 0) {
      if (grid[i][y] === value) {
        return false;
      }
    }
  }

  // Check the 3x3 subgrid
  const x0 = Math.floor(x / 3) * 3;
  const y0 = Math.floor(y / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // Return false if the number already exists in the subgrid
      if (grid[x0 + i][y0 + j] !== 0) {
        if (grid[x0 + i][y0 + j] === value) {
          return false;
        }
      }
    }
  }

  // Return true if the number is valid for the current square
  return true;
};


    export default {
      solveSudoku, isValidAddition
    }
  
  