// Time => O(n^2)
// Space => O(n)

// Recursively split the input array in half until a sub-array with only one element is produced
//Merge each sorted sub arrays together to produce the final sorted array
const mergeSort = (array) => {
  if (array.length <= 1) return array;
  const arr = array.slice();

  // divide into small arrays, one array for each element
  const middleIndex = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middleIndex);
  const rightArray = arr.slice(middleIndex);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

// Merge two sortest arrays
const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];
    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }

  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

console.log(mergeSort([1, 3, 5, 2, 1, 5, 8, 4]));
