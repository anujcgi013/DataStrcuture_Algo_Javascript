class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = new Node(val);
  }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");

console.log(list.head)