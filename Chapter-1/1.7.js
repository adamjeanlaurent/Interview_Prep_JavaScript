function rotate90Deg(matrix1) {
  let matrixSize = matrix1.length;

  let matrix2 = newNxNMatrix(matrixSize);

  for(let i = 0; i < matrixSize; i++) {
    for(let j = 0; j < matrixSize; j++) {
      matrix2[j][i] = matrix1[i][j];
    }
  }
  return matrix2;
}

let matrix = newNxNMatrix(6);
for(let i = 0 ; i < matrix.length; i++) {
  for(let j = 0; j < matrix.length; j++) {
    matrix[i][j] = i;
  }
}

console.log(matrix);

function newNxNMatrix(n) {
  let result = [];
  for(let i = 0; i < n; i++) {
    result[i] = new Array(n);
  }
  return result;
}
