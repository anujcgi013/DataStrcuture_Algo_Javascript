// var minPathSum = function (grid) {
//   const gridTraveler = (m, n) => {
//     if (m === 1 && n === 1) return grid[m][n];
//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
//   };

//   const m = grid.length;
//   const n = grid[0].length;

//   if (m === 1 && n === 1) return grid[i][0];

//   return gridTraveler(m, n);
// };

var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let i = 1; i < m; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[m - 1][n - 1];
};


// var minPathSum = function(grid) {
//     var m = grid.length;
//     var n = grid[0].length;
    
//     for(var i = 0; i < m; i++) {
//         for(var j = 0; j < n; j++) {
//             if(i == 0 && j != 0) {
//                 grid[i][j] = grid[i][j] + grid[i][j - 1];
//             }
//             else if(i != 0 && j == 0) {
//                 grid[i][j] = grid[i][j] + grid[i - 1][j];
//             }
//             else if(i == 0 && j == 0) {
//                grid[i][j] = grid[i][j]; 
//             } else {
//                 grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j];
//             }
//         }
       
//     }
//     return grid[m - 1][n - 1];
    
// };

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
