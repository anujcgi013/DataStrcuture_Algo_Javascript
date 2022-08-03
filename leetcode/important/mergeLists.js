function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeLists(a, b) {
  const dummy = new ListNode(0);
  let current = dummy;
  while (a !== null && b !== null) {
    if (a.val < b.val) {
      current.next = a;
      a = a.next;
    } else {
      current.next = b;
      b = b.next;
    }
    current = current.next;
  }
  // Which ever is big list and items are left in that list, put them in last
  current.next = a || b;
  return dummy.next;
}

var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  // two two
  // priority queue
  while (lists.length > 1) {
    let a = lists.shift(); // the head will contains the "less" length list
    let b = lists.shift(); // acturally, we can use the linkedlist to replace it, the while loop will be the while( list.header.next !== null || lists.length > 0)
    const h = mergeLists(a, b);
    lists.push(h);
  }
  return lists[0];
};

// Divide and Concur

// function merge (left, right) {
//     if (!left) {
//         return right;
//     } else if (!right) {
//         return left;
//     } else if (left.val < right.val){
//         left.next = merge(left.next, right);
//         return left;
//     } else {
//         right.next = merge(left, right.next);
//         return right;
//     }
// }

// function helper(lists, start, end) {
//     if (start === end) {
//         return lists[start];
//     } else if (start < end) {
//         const mid = parseInt((start + end) / 2);
//         const left = helper(lists, start, mid);
//         const right = helper(lists, mid + 1, end);
//         return merge(left, right);
//     } else {
//         return null;
//     }

// }

// var mergeKLists = function(lists) {
//     return helper(lists, 0, lists.length - 1);
// };

console.log(mergeKLists(['a', 'x', 'i']));

const a = new Node("1");
const b = new Node("4");
const c = new Node("5");

const x = new Node("1");
const y = new Node("3");
const z = new Node("4");

const i = new Node("2");
const j = new Node("6");

a.next = b;
b.next = c;

x.next = y;
y.next = z;

i.next = j;
