/*
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are one edit
(or zero edits) away.
*/

/*
My Solution:

If Trying to check if str1 and str2 are one change away, they must have the same length,
so, I loop through them at the same time, keeping track of the amount of differences I see.
When I see more than one difference, I know that they are more than one change away and return false

The condition for adding one letter or deleting one letter is really the same.
That condition is that one of the
*/

// TIME: O(N)
// SPACE O(1)

function oneAway(str1, str2) {
  let strLen1 = str1.length;
  let strLen2 = str2.length;

  if(strLen1 == 0 && strLen2 == 0) return true;

  // checking if one change away
  if(strLen1 == strLen2) {
    return checkEqualLengths(str1,str2);
  }
  // checking if one addition or deletion away
  else if(strLen1 - strLen2 == 1 || strLen2 - strLen1 == 1) {
    return oneDifferentLengths(str1, str2);
  }
  else {
    return false;
  }
}

function oneDifferentLengths(str1, str2) {
  let hashTable = new Array(128).fill(0);
  let biggerString;
  let smallerString;
  // determine which string is bigger
  if(str1.length > str2.length) {
    biggerString = str1;
    smallerString = str2;
  }
  else {
    biggerString = str2;
    smallerString = str1;
  }

  // mapping bigger string into the hash table
  let val;
  for(let i = 0; i < biggerString.length; i++) {
    val = biggerString.charCodeAt(i);
    hashTable[val]++;
  }

  // un mapping in the hashtable for the smaller string
  // if we reach a negative, that means the smaller string has more of a letter than the bigger string and is 1 smaller, so it's impossible to make them equal with one operation
  for(let i = 0; i < smallerString.length; i++) {
    val = smallerString.charCodeAt(i);
    hashTable[val]--;
    if(hashTable[val] < 0) {
      return false;
    }
  }

  // loop back through the bigger string, if multiple ones are left, then the strings can't be made equal with one operation
  let hasOnlyOneOne = false;
  for(let i = 0; i < biggerString.length; i++) {
    val = biggerString.charCodeAt(i);
    if(hashTable[val] == 1) {
      if(hasOnlyOneOne) {
        return false;
      }
      hasOnlyOneOne = true;
    }
  }
  return true;
}

function checkEqualLengths(str1,str2) {
  let strLen1 = str1.length;
  let strLen2 = str2.length;
  let notSameLetter = false;
  for(let i = 0; i < strLen1; i++) {
    if(str1[i] != str2[i]) {
      if(notSameLetter) {
        return false;
      }
      notSameLetter = true;
    }
  }
  return true;
}

console.log(oneAway('pale','ple'));
console.log(oneAway('pales','pale'));
console.log(oneAway('pale','bale'));
console.log(oneAway('pale','bake'));
