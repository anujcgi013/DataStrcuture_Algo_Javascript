// Deapth First

// const hasPath = (graph, src, dest) => {
//     if(src === dest) return true;

//     for(let neighbor of graph[src]) {
//         if(hasPath(graph, neighbor, dest) === true){
//             return true;
//         };
//     }
//     return false;
// }

// // const graph = {
// //     f:['g', 'i'],
// //     g: ['h'],
// //     h: [],
// //     i: ['g', 'k'],
// //     j: ['i'],
// //     k: []
// // }; // true

// const graph = {
//     f:['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// }; //false

// console.log(hasPath(graph, 'j', 'f'));

// Breath First

const hasPath = (graph, src, dest) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dest) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

// const graph = {
//     f:['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// }; // true

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
}; //false

console.log(hasPath(graph, "j", "f"));
