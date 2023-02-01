const solveSudoku = (grid, setGrid) => {
  const isValid = (board, row, col, k) => {
    for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
        return false;
      }
    }
    return true;
  };

  const solve = (grid) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] === 0) {
          for (let n = 1; n <= 9; n++) {
            if (isValid(grid, i, j, n)) {
              grid[i][j] = n;
              if (solve(grid)) {
                return true;
              }
              grid[i][j] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  if (solve(grid)) {
    setGrid(grid);
  }
};




const isValidAddition = (x, y, value, grid) => {
  for (let i = 0; i < 9; i++) {
    // Check the row
    if (grid[x][i] === value) {
      return false;
    }
    // Check the column
    if (grid[i][y] === value) {
      return false;
    }
  }

  // Check the 3x3 subgrid
  const x0 = Math.floor(x / 3) * 3;
  const y0 = Math.floor(y / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[x0 + i][y0 + j] === value) {
        return false;
      }
    }
  }

  // Return true if the number is valid for the current square
  return true;
};

export default {
  solveSudoku, isValidAddition
};
