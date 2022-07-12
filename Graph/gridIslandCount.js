const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (exploreSize(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }
  return count;
};

const exploreSize = (grid, r, c, visisted) => {
  const rowInbound = 0 <= r && r < grid.length;
  const colInbound = 0 <= c && c < grid[0].length;

  if (!rowInbound || !colInbound) return false;

  if (grid[r][c] === "W") return false;

  const pos = r + "," + c;
  if (visisted.has(pos)) return false;
  visisted.add(pos);

  exploreSize(grid, r - 1, c, visisted);
  exploreSize(grid, r + 1, c, visisted);
  exploreSize(grid, r, c - 1, visisted);
  exploreSize(grid, r, c + 1, visisted);

  return true;
};


console.log(islandCount([
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]));