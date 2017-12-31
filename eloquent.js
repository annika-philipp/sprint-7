Minimum

function min(a, b) {
    if (a > b) {
      return b;
    } else {
      return a;
    }
  };

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


Recursion

function isEven (num) {
    if (num == 0) {
      return true;  //even = true
    } else if (num == 1) {
       return false;  //odd = false
    } else if (num > 1) {
          return isEven (num-2); // recursive part for pos number
    } else if (num < 0) {
      return isEven (num+2);  // recursive part for neg number
    }
   };

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-8));
// → true