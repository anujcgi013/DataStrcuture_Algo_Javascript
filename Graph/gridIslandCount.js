// Time - O(rc)
// spcae = O(rc)

const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;

  const exploreSize = (grid, r, c) => {
    const rowInbound = 0 <= r && r < grid.length;
    const colInbound = 0 <= c && c < grid[0].length;

    if (!rowInbound || !colInbound) return false;

    if (grid[r][c] === "W") return false;

    const pos = r + "," + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    exploreSize(grid, r - 1, c);
    exploreSize(grid, r + 1, c);
    exploreSize(grid, r, c - 1);
    exploreSize(grid, r, c + 1);

    return true;
  };

  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (exploreSize(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }
  return count;
};

// console.log(islandCount([
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'W', 'W', 'L', 'W'],
//     ['W', 'W', 'L', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['L', 'L', 'W', 'W', 'W'],
// ]));

console.log(
  islandCount([
    ["L", "L", "W", "W", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "L", "W", "W"],
    ["W", "W", "W", "L", "L"],
  ])
);
