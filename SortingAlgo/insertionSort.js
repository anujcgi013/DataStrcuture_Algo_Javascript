// Time => O(n2)
// Space => O(n)
// Create an array with 1st element and then insert next items in sorting order
const insertionSort = (arr) => {
  const array = arr.slice();

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  return array;
};

console.log(insertionSort([1, 3, 5, 2, 1, 5, 8, 4]));
