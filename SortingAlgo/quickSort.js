// Time => O(nlogn)
// Space => O(n)
const quickSort = (array) => {
  if (array.length < 2) return array;
  const pivot = array[array.length - 1];
  let leftArray = [];
  let rightArray = [];

  // Longhand code
  // for (let i = 0; i < array.length - 1; i++) {
  //   if (array[i] > pivot) rightArray.push(array[i]);
  //   else leftArray.push(array[i]);
  // }
  // if (leftArray.length > 0 && rightArray.length > 0) {
  //   return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  // } else if (leftArray.length > 0) {
  //   return [...quickSort(leftArray), pivot];
  // } else {
  //   return [pivot, ...quickSort(rightArray)];
  // }

  // shorthand code
  for (let el of array.slice(0, array.length - 1)) {
    el > pivot ? rightArray.push(el) : leftArray.push(el);
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

console.log(quickSort([1, 3, 5, 2, 1, 5, 8, 4]));
