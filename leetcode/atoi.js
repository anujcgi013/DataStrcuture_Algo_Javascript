var myAtoi = function (s) {
    s = s.trim();
  
    let sign = 1;
    let answer = 0;
  
    let i = 0;
    if (s[i] == "-") {
      sign = -1;
      i++;
    }
      else if (s[i] == "+") {
      i++;
    }
  
    for (; i < s.length; i++) {
      const temp = s.charCodeAt(i) - 48;
      if (temp > 9 || temp < 0) break;
      if (answer > 2147483647 / 10 || answer > (2147483647 - temp) / 10)
        return sign == 1 ? 2147483647 : -2147483648;
      else answer = answer * 10 + temp;
    }
    return answer * sign;
  };

console.log(myAtoi("+1"));

// "42"
// "   -42"
// "4193 with words"
