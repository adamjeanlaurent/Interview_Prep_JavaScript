
/*
Write a function that, given a positive integer 0 < num < 2^32, returns the sum of all digits in num that are divisible by 2. 
For example, if num = 341238 the resulting sum is 14.
*/
function sumEven(num) {
    if(0 >= num) return 0;
    if(((num % 10) % 2) == 0) {
      return num % 10 + sumEven(Math.floor(num/10));
    }
    else {
      return sumEven(Math.floor(num/10));
    }
  }

  /*
Write a function that, given positive integers 1 <= n <= 10^4 and 1 <= s <= n as input, 
returns the sum of the last s elements in the sequence from 1 to n (inclusive).
  */
 function suffixSum(n,s) {
    if(s == 0) return 0;
  
    return n - s + 1 + suffixSum(n, s - 1);
  }
  
  console.log(suffixSum(10, 10));
  