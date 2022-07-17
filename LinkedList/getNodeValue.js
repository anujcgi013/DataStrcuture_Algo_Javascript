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

//   const getNodeValue = (head, index) => {
//     if(head === null) return null;
//     if(index === 0) return head.val;
//     return getNodeValue(head.next, index-1);
//   }

console.log(getNodeValue(a, 7));
