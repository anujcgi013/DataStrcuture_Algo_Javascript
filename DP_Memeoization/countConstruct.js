const countConstruct = (targetString, wordBank, memo = {}) => {
  if (targetString in memo) return memo[targetString];
  if (targetString === '') return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const numWaysForRest = countConstruct(targetString.slice(word.length), wordBank, memo);
      totalCount += numWaysForRest;
    }
  }
  memo[targetString] = totalCount;
  return totalCount;
};

console.log(countConstruct('abcd', ['ab', 'cd', 'a', 'b']));
console.log(
    countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
    countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeeee",
  ])
);
