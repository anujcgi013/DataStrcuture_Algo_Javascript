class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const getNodeValue = (head, index) => {
  let current = head;
  let count = 0;

  while (current !== null) {
    if (count === index) return current.val;
    count++;
    current = current.next;
  }
  return null;
};

console.log(getNodeValue(a, 7));