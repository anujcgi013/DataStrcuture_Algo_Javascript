// O(n^2) - n for iteration and n for slice
const slowSum = (array) => {
  if (array.length === 0) return 0;

  const rest = array.slice(1);
  return array[0] + slowSum(rest);
};

// O(n)
const fastSum = (array) => {
   return _fastSum(array, 0);
}

const _fastSum =(array, idx) => {
if(idx === array.length) return 0;

return array[idx] + _fastSum(array, idx+1);
}

//const input = new Array(9000).fill(1);

// const slowStart = Date.now();
console.log(slowSum([1, 2, -2, 5]));
// console.log(slowSum(input))
// const slowEnd = Date.now();
// console.log(`n^2 finished in ${slowEnd - slowStart}`);


// const fastStart = Date.now();
// console.log(fastSum([1, 2, -2, 5]));
// //console.log(fastSum(input))
// const fastEnd = Date.now();
// console.log(`n^2 finished in ${fastEnd - fastStart}`);