class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const invertTree = (tree) => {
  if (tree === null) return null;

  const temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
  invertTree(tree.left);
  invertTree(tree.right);
  return tree;
};

const a = new Node(10);
const b = new Node(20);
const c = new Node(30);
const d = new Node(40);
const e = new Node(50);
const f = new Node(60);

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;

console.log(invertTree(a));
