const permutations = (elements) => {
    // base case 
  if (elements.length === 0) return [[]];

// Start from [[]] array
  const firstEl = elements[0];
  const rest = elements.slice(1);

  const permutationWithoutFirst = permutations(rest);

  //for all stack traces, execute keep on adding items to last and before first
  const allPermutations = [];
  permutationWithoutFirst.forEach(perm => {
    for(let i=0; i<=perm.length; i++) {
        const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
        allPermutations.push(permWithFirst);
    }
  })
return allPermutations;
};

console.log(permutations(["a", "b", "c", "d"]));
