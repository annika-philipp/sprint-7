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


Bean Counting

//counting Bs on its own

function countBs (string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
      if (string[i] == "B")
        count++;
    }
      return count;
  }
  console.log(countBs("BBC"));
  // → 2

  //countChar and countBs

  // Your code here.

  function countChar (string, char) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
      if (string[i] == char)
        count++;
    }
      return count;
  }
  
  function countBs (string) {
    return countChar (string, "B");
  };
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4