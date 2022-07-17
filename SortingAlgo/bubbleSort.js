
// Time => O(n^2)
// Space => O(n)

// Bubble on each iteration and swipe
const bubbleSort = (arr) => {
  const array = arr.slice();
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length - 1; i++) {
    // why array.length - 1 - i
    // In first iteration itself last element will be sorted and highest
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

console.log(bubbleSort([1, 3, 5, 2, 1, 5, 8, 4]));
