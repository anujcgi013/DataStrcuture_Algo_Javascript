
class Node {
    constructor(val) {
        this.val = val;
        this.left =null;
        this.right =null;
    }
}

const treeSum = (node) => {
    if(node === null) return 0;
    return node.val + treeSum(node.left) + treeSum(node.right)
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

console.log(treeSum(a));
