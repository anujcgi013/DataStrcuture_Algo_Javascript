//Time => O(logn)
// Spcae => O(1)

const binarySearch = (val, arr) => {
  return binarySearchHelper(arr, val, 0, arr.length - 1);
};

// recursive helper
// Space complexity will increase to O(n)
const binarySearchHelper = (arr, val, left, right) => {
  if (left > right) return -1;

  let mid = Math.floor(left + right / 2);

  if ((val = arr[mid])) {
    return mid;
  } else if (val < arr[mid]) {
    return binarySearchHelper(arr, val, left, mid - 1);
  } else {
    return binarySearchHelper(arr, val, mid + 1, right);
  }
};

// iterative solution
// const binarySearch = (val, arr) => {
//   let lower = 0;
//   let upper = arr.length -1;

//   while (lower <= upper) {
//     let middle = Math.floor(lower + upper / 2);
//     if (val === arr[middle]) {
//       return middle;
//     }
//     if (val < arr[middle]) {
//       upper = middle - 1;
//     } else {
//       lower = middle + 1;
//     }
//   }
//   return -1;
// };

console.log(binarySearch(7, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
