/*
Rotate Matrix: Given an image represented by an NxN matrix, 
where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. 
Can you do this in place?
*/

/*
My solution is to create a new matrix,
then insert elements in the matrix in rotated order
*/

// space O(N)
// Time O(N)

// can do this in place but it's very difficult !!

function rotate90Deg(matrix1) {
  let matrixSize = matrix1.length;
  let newMatrix = newNxNMatrix(matrixSize);

  for(let i = 0; i < matrixSize; i++) {
    for(let j = matrixSize - 1; j >= 0; j--) {
      newMatrix[i][matrixSize - j - 1] = matrix1[j][i];
    }
  }
  return newMatrix;
}

let matrix = newNxNMatrix(4);
for(let i = 0 ; i < matrix.length; i++) {
  for(let j = 0; j < matrix.length; j++) {
    matrix[i][j] = i;
  }
}

console.log('ORIGINAL MATRIX');
printMatrix(matrix);
let newMatrix = rotate90Deg(matrix);
console.log('---------------------');
console.log('NEW MATRIX');
printMatrix(newMatrix);


function newNxNMatrix(n) {
  let result = [];
  for(let i = 0; i < n; i++) {
    result[i] = new Array(n);
  }
  return result;
}

function printMatrix(matrix) {
  for(let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
}
