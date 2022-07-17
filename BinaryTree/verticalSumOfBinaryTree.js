
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(4);
const d = new Node(3);
const e = new Node(6);
const f = new Node(5);
const g = new Node(7)

a.left = b;
a.right = d;
b.left = c;
b.right = f;
d.left = g;
d.right = e;

const traverseTree = (node) => {
if(node === null) return null;
if(node.left === null && node.right === null) return node.val;
const set = new Set();
if(set.has(node)) {
    set.set(node, )
}

}