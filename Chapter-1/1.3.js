/*
URLify: Write a method to replace all spaces in a string with '%20'.
You may assume that the string has sufficient space at the end to hold the additional characters,
and that you are given the "true" length of the string. (Note: If implementing in Java,
please use a character array so that you can perform this operation in place.)
*/

// my first solution

 /*
-loop through the the string
- if str[i] == ' '
- move every character over by two, and put % 2 0 in the space with a spot and the two ones after
 */

// Time: O(N), We do roughly N work (moving most of the charcters over), k times, where k is the number of spaces
// Space: O(N), The amount of extra space we need is number of spaces * N, because we make a new copy each time there is space

function URLify(str) {
  for(let i = 0; i < str.length; i++) {
    if(str[i] == ' ') {
      str = shiftChars(str, i);
    }
  }
  return str;
}

function shiftChars(str, index) {
  for(let i = str.length - 1; i > index; i--) {
    str[i + 2] = str[i];
  }
  str[index] = '%'
  str[index + 1] = '2';
  str[index + 2] = '0';
  return str;
}


// solution found

// Time: O(N), for same reasons
// additional space O(1), because they moved everything over without needing an extra function to take up space

// takeaways here, I don't know exactly how their algorithm works, but a takeaway is that additonal methods take up extra space, so avoid
// those if not needed
function encodeSpaces(url) {
  if (!url || url.length === 0) {
    return url;
  }

  let spaceCount = 0;
  for (let i = 0; i < url.length; ++i) {
    if (url[i] === ' ') {
      ++spaceCount;
    }
  }
  // add an extra 2 characters for each space
  let newLength = url.length - 1 + 2 * spaceCount;
  for (let i = url.length - 1, j = newLength; i >= 0 && j > i; --i, --j) {
    if (url[i] === ' ') {
      url[j] = '0';
      url[--j] = '2';
      url[--j] = '%';
    }
    else {
      url[j] = url[i];
    }
  }
  return url;
}
