var combinationSum3 = function (k, n) {
  // Global Result
  const result = [];
  const tempData = [];

  //backtracking method

  const backtracking = (index, num, target) => {
    
    // Base Case
    if (target === 0 && tempData.length === num) {
      result.push([...tempData]);
      return;
    }

    // backtracking cases
    else if (target < 0) return;
    else if (target > 0 && tempData.length === num) return;

    //recursion case
    for (let i = index; i < 10; i++) {
      tempData.push(i);
      backtracking(i + 1, num, target - i);
      tempData.pop(i);
    }
  };

  backtracking(1, k, n);
  return result;
};
console.log(combinationSum_III(3, 9));
// Input: k = 3, n = 7
// Output: [[1,2,4]]
