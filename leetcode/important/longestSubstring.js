const longestSubString = (str) => {
  let seenCharMap = {};
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    let lastChar = str[end];
    if (lastChar in seenCharMap) {
      start = Math.max(start, seenCharMap[lastChar] + 1);
    }
    seenCharMap[lastChar] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};


console.log(longestSubString("abcabcbb"));