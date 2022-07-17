var findOrder = function(numCourses, prerequisites) {
	const visited = new Set()
	const result = new Set()
	const adjList = constructAdjList(numCourses, prerequisites)

	for(let i=0; i< numCourses; i++){
		if(!dfs(i)) return []
	}

	function dfs(node){
		if(visited.has(node)) return false
		visited.add(node)
		if(adjList[node] === []) return true

		for(let nei of adjList[node]){
			if(!dfs(nei)) return false
		}
		visited.delete(node)
		adjList[node] = []
		result.add(node)
		return true
	}

	return [...result]
};

function constructAdjList(n,edges){
	const arr = Array.from({length:n}, ()=>[])
	for(let [src,dest] of edges){
		arr[src].push(dest)
	}
	return arr
}


//Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

