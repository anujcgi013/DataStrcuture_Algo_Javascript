// Parent Node initialization
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const hasValueInTree = (node, target) => {
  if (node === null) return false;
  if (node.val === target) return true;

  return (
    hasValueInTree(node.left, target) || hasValueInTree(node.right, target)
  );
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
a.right = f;

console.log(hasValueInTree(a, "e"));
