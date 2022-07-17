// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.


// Solution 1 - BFS
// var connect = function(root) {
//     if(!root) return root;
//     const queue = [[root, 0]];
    
//     while(queue.length) {
//         const[node, gen] = queue.shift();

//         if(queue.length) {
//             const[nextNode, nextGen] = queue[0];
//             if(nextGen === gen) node.next = nextNode;
//         }
        
//         if(node.left) queue.push([node.left, gen+1]);
//         if(node.right) queue.push([node.right, gen+1]);
//     }
//     return root;
// };

//Solution 2 - BFS (optimized)
var connect = function(root) {
    if(!root) return root;
    let queue = [root];
    
    while(queue.length) {
        const next = []
        
        for(let i = 0; i < queue.length; i++) {
            const node = queue[i];
            const nextNode = queue[i+1] || null;
            
            node.next = nextNode;
            
            if(node.left) {
                next.push(node.left);
                next.push(node.right);
            }
        }
        queue = next;
    }
    return root;
};


// Solution 3 - DFS
// var connect = function(root) {
//     if(!root) return root;
    
//     function callDFS(node) {
//         if(!node.left) return;
        
//         node.left.next = node.right;
//         node.right.next = node.next ? node.next.left : null;
        
//         callDFS(node.left);
//         callDFS(node.right);
//     }
//     callDFS(root);
//     return root;
// };
