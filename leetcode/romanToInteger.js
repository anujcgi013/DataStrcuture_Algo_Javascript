var romanToInt = function(s) {
    const legend = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current =legend[s[i]];
    const next =legend[s[i+1]];

    // for the case of iv, ix etc, where 1st is less than 2nd
    if (legend[s[i]] < legend[s[i+1]]) {
      total += legend[s[i+1]] - legend[s[i]];
      i++;
    } 
    // direct convert from Roman to number
    else {
      total += legend[s[i]];
    }
  }
  return total;
};

console.log(romanToInt("XIV"));