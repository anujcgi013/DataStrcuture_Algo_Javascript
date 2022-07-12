const howSum = (targetSum, number, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of number) {
    const reminder = targetSum - num;
    const reminderResult = howSum(reminder, number, memo);
    if (reminderResult !== null) {
      memo[targetSum] = [...reminderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return memo[targetSum];
};

console.log(howSum(7, [2,3,6,7]));
//console.log(howSum(8, [2, 3]));
//console.log(howSum(300, [7, 14]));
//console.log(howSum(500, [5, 2, 3]));
