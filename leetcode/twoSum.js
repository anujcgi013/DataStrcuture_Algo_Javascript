// Brute force
var twoSum_1 = (nums, target) => {
  for (let index = 0; index < nums.length; index++) {
    for (
      let nestedIndex = index + 1;
      nestedIndex < nums.length;
      nestedIndex++
    ) {
      if (nums[index] + nums[nestedIndex] === target) {
        return [index, nestedIndex];
      }
    }
  }
};

console.log(twoSum_1([2, 7, 11, 15], 9));
console.log(twoSum_1([3, 2, 4], 6));
console.log(twoSum_1([3, 3], 6));
console.log(twoSum_1([null], 6));

// Data Structure => Map(), same as hashmap in Java
var twoSum_2 = (nums, target) => {
  var map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    if (map.has(complement)) {
      return [map.get(complement), index];
    }
    map.set(nums[index], index);
  }
};

console.log(twoSum_2([2, 7, 11, 15], 9));
console.log(twoSum_2([3, 2, 4], 6));
console.log(twoSum_2([3, 3], 6));
console.log(twoSum_2([null], 6));
