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

// iterative method
// const printLinkedList = (head) => {
//   let current = head;
//   while (current !== null) {
//     console.log(current.val);
//     current = current.next;
//   }
// };

// printLinkedList();

// recursive call
const printLinkedList_2 = (head) => {
  if (head === null) return;
  console.log(head.val);
  printLinkedList_2(head.next);
};

printLinkedList_2(a);
