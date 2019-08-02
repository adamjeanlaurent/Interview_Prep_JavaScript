/*
Check Permutation: Given two strings,write a method to decide if one is a permutation of the
other.
*/

// first check if the lengths are equal, because if they;'re not, they can't be perms of eachother
// Sort each string by storing a char array version, using .sort on them, and returning them as sorted strings
// at this point, if the lengths are equal, and the strings are equal, then they're permutations of each other

// O(N Log N) Time, for sorting the strings, everthing else is a constant comparison or O(N) (like Array.From, or .join)
// Space Complexity O(N), array .from is probably O(N), as .join probably is as well, and .sort probably runs merge sort with requires O(N) additonal space
// So that's something like O(3N), or O(N)
function sort(s) {
  let stringAsCharArray = Array.from(s);
  stringAsCharArray.sort();
  return stringAsCharArray.join('');
}

function isPerm(s1, s2) {
  if(s1.length != s2.length) return false;

  if(sort(s1) != sort(s2)) {
    return false;
  }
  return true;
}

// first check if the lengths are equal, because if they;'re not, they can't be perms of eachother
// create a new array of 128 0's, because there are 128 ascii characters (assuming for this problems there's only ascii chars)
// loop through str1, convert each character to ascii and add 1 to the index of the array of the ascii num
// loop through str2, do the same, but decrease the index by 1
// if an index gets to below 0, then they don't have the same letters and therefore cannot be permuatations of eachtohers

// O(N) Time
// O(1) Space, the only extra space needed is the arr of 128 elements, which is constant
function isPerms2(s1, s2) {
  if(s1.length != s2.length) return false;
  let arr = new Array(128).fill(0);
  let val;
  for(let i = 0; i < s1.length; i++) {
    val = s1.charCodeAt(i);
    arr[val]++;
  }

  for(let i = 0; i < s2.length; i++) {
    val = s2.charCodeAt(i);
    arr[val]--;
    if(arr[val] < 0) return false;
  }

  return true;
}
