//time => O(n^2)
// spcae => O(n)
// Traverse in array and find smallest element and swipe it with exisitng j
const selectionSort = (arr) => {
  const array = arr.slice();
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
};

console.log(selectionSort([1, 3, 5, 2, 1, 5, 8, 4]));
