const largestComponent = (graph) => {
  const visited = new Set();
  let largestIsland = 0;
  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > largestIsland) {
      largestIsland = size;
    }
  }
  return largestIsland;
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(node) === true) return 0;

  visited.add(node);
  let size = 1;
  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }
  return size;
};

console.log(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  })
);


console.log(largestComponent({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}))