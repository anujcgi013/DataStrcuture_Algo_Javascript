// Finding the shortest path(s)

// Construct an adjancency list to represent the graph and its edges.
// Run a BFS to find distances from each node to the node representing beginWord.
// For each node, maintain an array of prev nodes (nodes that were used to arrive at current node). Skip adding a prev node, if it has a greater distance to beginWord than any other prev node.
// Use prev nodes of endWord and construct paths till beginWord. You can use DFS for this.
// Solution
// Here is my solution in JavaScript. It's accepted and 1200 ms faster than 28.14% of JavaScript submissions, and consumes 41.3 MB less than 100% of JavaScript submissions.

const diff = (a, b) => {
    let i = 0;
    let c = 0;
    while ( i < a.length ) {
        if (a.charAt(i) !== b.charAt(i)) {
            c++;
        }

        i++;
    }
    return c;
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    wordList.unshift(beginWord);
    const beginWordIndex = 0;
    const endWordIndex = wordList.indexOf(endWord);
    
    if ( endWordIndex < 0 ) {
        return [];
    }
    
    const adjList = Array(wordList.length).fill().map(() => []);
    const distList = Array(wordList.length).fill(-1);
    const prevList = Array(wordList.length).fill().map(() => []);
    
    // setup adjList
    for ( let i = 0; i < wordList.length; i++ ) {
        for ( let j = 0; j < wordList.length; j++) {
            if ( j === i ) {
                continue;
            }
            
            if ( diff(wordList[i], wordList[j]) === 1 ) {
                adjList[i].push(j);
            }
        }
    }
    
    const q = [beginWordIndex];
    distList[beginWordIndex] = 0;
    
	// fill prevList with BFS
    while ( q.length ) {
        const q_length = q.length;
        
        for (let i = 0; i < q_length; i++) {
            const idx = q.shift();
            
            for (let j = 0; j < adjList[idx].length; j++) {
                const neighbor = adjList[idx][j];
                
                if (distList[neighbor] > -1) {
                    if (distList[neighbor] === distList[idx] + 1) {
                        prevList[neighbor].push(idx);
                    }
                    
                    continue;
                }
                
                prevList[neighbor].push(idx);
                distList[neighbor] = distList[idx] + 1;
                q.push(neighbor);
            }
        }
        
    }
    
    if ( !prevList[endWordIndex].length ) {
        return [];
    }
    
    const dfs = (i) => {
        const prevNodes = prevList[i];
        
        if ( i === beginWordIndex ) {
            return [[beginWordIndex]];
        }
        
        const childPaths = [];
        
        prevNodes.forEach(n => {
            const grandChildPaths = dfs(n);
            
            grandChildPaths.forEach(p => {
                p.push(i);
                childPaths.push(p);
            })
        });
        
        return childPaths;
    };
    
    const paths = dfs(endWordIndex);
    const result = paths.map(p => p.map(idx => wordList[idx]));
    
    return result;
};