
var isValid = function(s) {
    
    var complement = {
           ')': '(',
           '}': '{' ,
           ']': '['
       }
       var stack = []
       for (bracket of s) {
        const stackV = stack[stack.length - 1];
        const complementV = complement[bracket];
           if (stack.length === 0 || stackV !== complementV) {
               stack.push(bracket)
           } else {
               stack.pop()
           }
       }
       return stack.length === 0
   };

   console.log(isValid("(({[]})"));