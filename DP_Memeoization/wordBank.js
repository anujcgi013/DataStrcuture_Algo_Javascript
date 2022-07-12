const getWords = (targetString, wordBank) => {
  if (targetString === '') return [[]];

  let result = [];

  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const suffix = targetString.slice(word.length);
      const suffixWays = getWords(suffix, wordBank);
      const ways = suffixWays.map(i=> [word, ...i])
      result.push(...ways);
    }
  }
  return result;
};

var result = getWords("catsanddog", ["cats", "cat", "and", "sand", "dog"]);
//var result = getWords("catsandog", ["cats", "cat", "and", "sand", "dog"])
if(result.length === 0) console.log('Empty');
for(let string of result) {
console.log('(' + string.join(" ") + ')');
}
//console.log(getWords("catsandog", ["cats", "cat", "and", "sand", "dog"]));
    