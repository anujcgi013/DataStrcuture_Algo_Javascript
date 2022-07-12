var findMedianSortedArrays = function (nums1, nums2) {
  const combinedArray = [...nums1, ...nums2];
  const nweArray = combinedArray.sort((a, b) => {return (a-b)});
  //const newArray = quickSort(combinedArray);

  if (newArray.length % 2 === 0) {
    return (
      (newArray[newArray.length / 2] + newArray[newArray.length / 2 - 1]) / 2
    );
  }

  return newArray[Math.floor(newArray.length / 2)];
}; 

const quickSort = (arr) => {
  if (arr <= 1) return arr;

  let leftArr = [];
  let rightArr = [];

  const pivot = arr[arr.length - 1];

  for (const el of arr.slice(0, arr.length - 1)) {
    el > pivot ? rightArr.push(el) : leftArr.push(el);
  }

  return [...leftArr, pivot, ...rightArr];
};

console.log(findMedianSortedArrays([1, 3], [2]));

console.log(findMedianSortedArrays([1, 3, 3], [2]));

console.log(findMedianSortedArrays([3], [-2, -1]));
