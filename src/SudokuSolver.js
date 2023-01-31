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



/* 
    function solveSudoku(grid, setGrid) {
      if (!grid) return;
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (grid[row][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isSafe(grid, row, col, num)) {
                grid[row][col] = num;
    
                if (solveSudoku(grid, setGrid)) {
                  return true;
                }
    
                grid[row][col] = 0;
              }
            }
            return false;
          }
        }
      }
      setGrid(grid);
      return true;
    } */

/*     const solveSudoku = (grid, setGrid) => {
      let _grid = [...grid];
    
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          let currentSquare = _grid[row * 9 + col];
          if (currentSquare === 0) {
            for (let i = 1; i <= 9; i++) {
              if (isSafe(row, col, i, _grid)) {
                _grid[row * 9 + col] = i;
                if (solveSudoku(_grid, setGrid)) {
                  return true;
                } else {
                  _grid[row * 9 + col] = null;
                }
              }
            }
            return false;
          }
        }
      }
      setGrid(_grid);
      return true;
    }; */
    
    function isSafe(grid, row, col, num) {
      if (!grid[row][col]) return true;

      for (let i = 0; i < 9; i++) {
        if (grid[row][i] === num || grid[i][col] === num) return false;
      }

      // Check if current square is undefined
      for (let i = 0; i < 9; i++) {
        if (grid[row][i] === undefined) {
          continue;
        }
        if (grid[row][i] === num) {
          return false;
        }
      }
        
      // Check if 'num' is not already present in the current column
      for (let i = 0; i < 9; i++) {
        if (grid[i][col] === undefined) {
          continue;
        }
        if (grid[i][col] === num) {
          return false;
        }
      }
    
      // Check if 'num' is not already present in the current 3x3 box
      let boxStartRow = row - row % 3;
      let boxStartCol = col - col % 3;
    
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[i + boxStartRow][j + boxStartCol] === undefined) {
            continue;
          }
          if (grid[i + boxStartRow][j + boxStartCol] === num) {
            return false;
          }
        }
      }
    
      return true;
    }
    
    function UsedInRow(grid, row, num) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === num) {
          return true;
        }
      }
      return false;
    }
    
    function UsedInCol(grid, col, num) {
      for (let row = 0; row < 9; row++) {
        if (grid[row][col] === num) {
          return true;
        }
      }
      return false;
    }
    
    function UsedInBox(grid, boxStartRow, boxStartCol, num) {
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (grid[row + boxStartRow][col + boxStartCol] === num) {
            return true;
          }
        }
      }
      return false;
    }

    export default {
      solveSudoku: solveSudoku
    }
  
  