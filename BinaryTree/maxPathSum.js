
class Node {
    constructor(val) {
        this.val = val;
        this.left =null;
        this.right =null;
    }
}

const maxPathSum = (node) => {
    if(node === null) return -Infinity;
    if(node.left === null && node. right === null) return node.val;
    const max = Math.max(maxPathSum(node.left), maxPathSum(node.right));
    return node.val+max;
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(maxPathSum(a));
