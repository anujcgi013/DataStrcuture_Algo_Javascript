// var isValidSudoku = function(board) {
//     // create an empty set for each row/col/square
//     const rowRules = new Array(9).fill().map(() => new Set())
//     const colRules = new Array(9).fill().map(() => new Set())
//     const mixedRules = new Array(9).fill().map(() => new Set())
    
//     // iterate through each cell on the board
//     for (let row = 0; row < 9; row++) {
//       for (let col = 0; col < 9; col++) {
//         const curr = board[row][col]
        
//         // some tricky math to get the index of the 3x3 squares
//         const mixedIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3)
  
//         if (curr === ".") continue  // ignore dots
        
//         // if the current number already exists in the set, board is invalid
//         const a = rowRules[row].has(curr)
//         const b = colRules[col].has(curr)
//         const c = mixedRules[mixedIdx].has(curr)
//         if (a || b || c) return false
        
//         // add the number to the appropriate set
//         rowRules[row].add(curr)
//         colRules[col].add(curr)
//         mixedRules[mixedIdx].add(curr)
//       }
//     }
    
//     // all checks out
//     return true
//   };


  var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (value !== '.') {
                if (!isValidRow(board, i, j, value) || !isValidCol(board, i, j, value) | !isValidBox(board, i, j, value)) {
                    return false;
                }
            }
        }
    }
    return true;
};

function isValidRow(board, row, col, value) {
    // j represents on col
    for (let j = 0; j < 8; j++) {
        // check first to see if the current col matches the passed in col
        if (j !== col) {
            if (board[row][j] === value) {
                return false; 
            }
        }
    }
    
    return true;
}

function isValidCol(board, row, col, value) {
     // j represents on row
    for (let i = 0; i < 8; i++) {
        // check first to see if the current row matches the passed in row
        if (i !== row) {
            if (board[i][col] === value) {
                return false; 
            }
        }
    }
    
    return true;
}

function isValidBox(board, row, col, value) {
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (i !== row && j !== col) {
                if (board[i][j] === value) {
                    return false;
                }
            }
        }
    }
    
    return true;
}


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true