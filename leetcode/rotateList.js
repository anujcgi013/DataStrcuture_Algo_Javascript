
var rotateRight = function(head, k) {
  // Start tail as head
  let tail = head;
  if (head === null) return head;
  let len = 1;
  while (tail.next) {
    len++;
    // Travelser till last element of head and make it as tail
    tail = tail.next;
  }
  // make head as start element for tail
  tail.next = head;
  const mod = (k % len);
  let count = len - (k % len);

  while (count > 0) {
    // Move head to next
    head = head.next;
    // move tail also to next
    tail = tail.next;
    count--;
  }
  tail.next = null;
  return head;
};

// var rotateRight = function(head, k) {
//     let tail = head;
//     if (head === null) return head;
//     let len = 1;
//     while (tail.next) {
//       tail = tail.next;
//       len++;
//     }
//     tail.next = head;
//     let count = len - (k % len);
//     while (count > 0) {
//       head = head.next;
//       tail = tail.next;
//       count--;
//     }
//     tail.next = null;
//     return head;
//   };

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

  console.log(rotateRight(a, 2))