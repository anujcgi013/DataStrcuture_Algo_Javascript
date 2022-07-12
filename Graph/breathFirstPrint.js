
// Iterable solution
const breathFirstPrint = (graph, source) => {

    const queue = [source];

    while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for(let neighbor of graph[current])
    {
        queue.push(neighbor);
    }
    }
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}; // acbedf

// No Recussrive solution because QUEUE will be changed to STACK

breathFirstPrint(graph, 'a');