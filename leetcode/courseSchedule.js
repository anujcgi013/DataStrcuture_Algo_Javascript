var canFinish = function (numCourses, prerequisites) {
  const done = new Set();
  const seeing = new Set();
  const adj = buildGraph(numCourses, prerequisites);

  for (course in adj) {
    if (!checkCycle(course)) return false;
  }

  function checkCycle(crs) {
    if (done.has(crs)) return true;
    if (seeing.has(crs)) return false;
    seeing.add(crs);

    for (pre of adj[crs]) {
      if (!checkCycle(pre)) return false;
    }
    seeing.delete(crs);
    done.add(crs);
    return true;
  }

  return true;
};

function buildGraph(n, edges) {
  // const graph = [];
  // for(let edge of edges) {
  //     const [a, b] = edge;
  //     if(!(a in graph)) graph[a] = [];
  //     if(!(b in graph)) graph[b] = [];
  //     graph[a].push(b);
  //     graph[b].push(a);
  // }
  // return graph;
  // If numbers then this way of building graph will work
  const arr = Array.from({ length: n}, () => []);
  for (let [src, dest] of edges) {
    arr[src].push(dest);
  }
  return arr;
}

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
