const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;
  for (let num of numbers) {
    const reminder = targetSum - num;
    const reminderCombination = bestSum(reminder, numbers, memo);
    if (reminderCombination !== null) {
      const combination = [...reminderCombination, num];
      // if the combination is shorter than the current "shortest", update it
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(9, [6, 5, 4, 3, 2, 2, 1]));
console.log(bestSum(500, [1, 2, 5, 25]));
