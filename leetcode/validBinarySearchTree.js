var isValidBST = function (
  root,
  upperBound = Infinity,
  lowerBound = -Infinity
) {
  if (root === null) return true;
  if (root.val >= upperBound || root.val <= lowerBound) return false;

  return (
    isValidBST(root.left, Math.min(upperBound, root.val), lowerBound) &&
    isValidBST(root.right, upperBound, Math.max(lowerBound, root.val))
  );
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node(5);
const b = new Node(1);
const c = new Node(4);
const d = new Node(3);
const e = new Node(6);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log(isValidBST(a));
