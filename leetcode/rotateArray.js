var rotate = function (nums, k) {
  const indexToShift = nums.length - (k % nums.length);

  let array1 = nums.slice(0, indexToShift);
  let array2 = nums.slice(indexToShift);
  const result = [...array2, ...array1];
  return result;
};


// function rotate(nums,k) {
//     for(var i = 0, j = nums.length - 1; i < k; i++) {
//         var x = nums[j];
//         nums.pop();
//         nums.unshift(x);
//     }
//     return nums;
// }

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
