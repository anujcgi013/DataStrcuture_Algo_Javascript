
var diameterOfBinaryTree = function(root) {
    let max = 0
    
    const maxDepth = (root) => {
        if (root === null) return 0
        const left = maxDepth(root.left)
        const right = maxDepth(root.right)
        max = Math.max(max, left + right)
        return Math.max(left, right) + 1
    }
    maxDepth(root)
    return max
};


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].