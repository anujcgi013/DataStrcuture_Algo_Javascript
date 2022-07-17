const levelOrder = (root) => {
    const result = [];

    if(!root) return result;

    const dfs = (node, level) => {
        result[level] = [...dfs(result[level] || []), node.val];
        if(node.left) dfs(node.left, level+1);
        if(node.right) dfs(node.right, level+1);
    }

    dfs(root, 0);
    return result;
}

// iterative solution
// var levelOrder = function(root) {
//     if (!root) return []
//     const arr = [root], result = []
//     while (arr.length) {
//         const size = arr.length, values = []
//         for (let i = 0; i < size; i++) {
//             const node = arr.shift()
//             values.push(node.val)
//             if (node.left) arr.push(node.left) 
//             if (node.right) arr.push(node.right) 
//         }
//         result.push(values)
//     }
//     return result
// };