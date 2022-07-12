const canSum = (targetSum, number, memo = {}) => {
  if(targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of number) {
    const reminder = targetSum - num;
    if (canSum(reminder, number, memo) === true) {
      memo[targetSum]  = true;
      return true;
    }
  }
  memo[targetSum] =  false;
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(8, [5, 3, 4, 7, 8]));
console.log(canSum(8, [5, 5]));
console.log(canSum(4781, [4, 8]));
