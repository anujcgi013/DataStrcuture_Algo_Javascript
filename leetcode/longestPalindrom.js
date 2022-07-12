/**
 * @param {string} s
 * @return {string}
 */

// O(n2)
var longestPalindrome = function (s) {
  if (s.length < 1 || s === null) return s;

  let longestString = "";

  for (let c = 0; c < s.length; c++) {
    oddPal = findLongestString(s, c, c);
    evenPal = findLongestString(s, c - 1, c);

    // if (longestString.length < oddString.length) {
    //   longestString = oddString;
    // }
    // if (longestString.length < evenString.length) {
    //   longestString = evenString;
    // }
    evenPal.length > longestString.length ? longestString = evenPal : oddPal.length > longestString.length ? longestString = oddPal : "";
  }
  return longestString;
};

const findLongestString = (str, left, right) => {
  let i = 0;
  while (str[left - i] && str[left - i] === str[right + i]) {
    i++;
  }
  i--;
  return str.slice(left - i, right + i + 1);
};


// DP Solution

// const longestPalindrome = (str, memo = {}) => {

//   if(str.length < 1) return str;
//   if (str in memo) return memo[str];

//   while()
//   oddString = findLongestString(s, c, c);
//   evenString = findLongestString(s, c - 1, c);
  
// }

// const findLongestString = (str, left, right, memo = {}) => {

//   if(left < 0 || right > str.length) { 
//     return memo;
//   }

// }


console.log(longestPalindrome("babad"));
