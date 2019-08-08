
/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words.
*/


/*
My Solution, for something to be a palindrome, it needs to either be of odd length, and have 2 of each letter and 1 of 1 letter,
or event length and have two of every letter. So, I create a hashtable, and map the occureneces of each letter.
then I loop through again and check how Many are odd
*/

// Time O(N)
// Additonal Space O(1)

function isPermOfPalindrome(str) {

  let arr = new Array(128).fill(0);
  let strlen = str.length;
  if(strlen <= 1) return false;
  let val;
  for(let i = 0; i < strlen; i++) {
    val = str.charCodeAt(i);
    arr[val]++;
  }

  let hasOdd = false;
  for(let i = 0; i < strlen; i++) {
    // this is bad, repeated work?
    val = str.charCodeAt(i);
    if(arr[val] % 2 != 0) {
      if(hasOdd) {
        return false;
      }
      else {
        hasOdd = true;
      }
    }
  }
  return true;
}

let str = 'racecar';
let str2 = 'rracecar'
let str3 = 'dad';
let str4 = 'daad';

console.log(isPermOfPalindrome(str));
console.log(isPermOfPalindrome(str2));
console.log(isPermOfPalindrome(str3));
console.log(isPermOfPalindrome(str4));


// github solution
function isPalindromePermutationsSet(str) {
  if (!str) {
    return false;
  }

  let chars = new Set();
  for (let char of str) {
    if (char !== ' ') { // ignore spaces
      if (chars.has(char)) {
        chars.delete(char);
      }
      else {
        chars.add(char);
      }
    }
  }

  return chars.size <= 1;
}
