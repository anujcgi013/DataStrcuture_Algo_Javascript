class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const hasMatchingSubTree = (tree, target) => {
  if (tree === null) return false;
  else if (isSameTree(tree, target)) {
    return true;
  } else {
    return (
      hasMatchingSubTree(tree.left, target) ||
      hasMatchingSubTree(tree.right, target)
    );
  }
};

const isSameTree = (tree, target) => {
  if (tree === null || target === null) {
    return tree === null && target === null;
  } else if (tree.val == target.val) {
    return (
      isSameTree(tree.left, target.left) && isSameTree(tree.right, target.right)
    );
  } else return false;
};


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node(10);
const b = new Node(4);
const c = new Node(3);
const d = new Node(5);
const e = new Node(6);
const f = new Node(8);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

const g = new Node(3);
g.left =a;

console.log(g);
console.log(hasMatchingSubTree(a, g));
