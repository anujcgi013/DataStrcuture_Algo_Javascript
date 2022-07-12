var combinations = (elements) => {
  if (elements.length === 0) return [[]];
  const firstEl = elements[0];
  const rest = elements.slice(1);

  const combinationWithoutFirst = combinations(rest);

  const combsWithFirst = [];

  combinationWithoutFirst.forEach(comb => {
    const combWithFirst = [...comb, firstEl];
    combsWithFirst.push(combWithFirst);
  })

  return [...combinationWithoutFirst, ...combsWithFirst]
};

console.log(combinations(["a", "b", "c"]));
