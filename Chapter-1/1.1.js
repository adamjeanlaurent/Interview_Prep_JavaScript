/*
1.1
Is Unique: Implement an algorithm to determine if a string has all unique characters.
 What if you cannot use additional data structures?
*/

// with additional data structues, using a set here
// loop through str or arr, check if value is in a set, if so, then it's not unique, if you reach the end of the string, then all chars are unqiue

// O(N) time
// O(N) Space

function isUnique(str) {
  let set = new Set();
  for(let i = 0; i < str.length; i++) {
    if(set.has(str[i])) {
      return false;
    }
    else {
      set.add(str[i]);
    }
  }
  return true;
}


// O(N Log N) time
// O(1) space, no additional needed

// without additional data structues
// sort the original array, if two characters in a row are the same, then they are not unqie

function isUniqueNoDS(str) {
  str.sort();
  for(let i = 1; i < str.length; i++) {
    if(str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}
