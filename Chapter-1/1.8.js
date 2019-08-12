

function newMxNMatrix(m,n) {
    let result = [];
    for(let i = 0; i < m; i++) {
      result[i] = new Array(n);
    }
    return result;
  }

function printMatrix(matrix) {
    for(let i = 0; i < matrix.length; i++) {
      console.log(matrix[i]);
    }
  }


function setToZero(m) {
    // find the zero
    let numOfArrays = m.length;
    let i = 0;
    let j = 0;
    while(m[i][j]) {
        // console.log(m[i][j]);
        if(m[i][j] == 0) {
            break;
        }
        j++
        if(!m[i][j]) {
            i++;
            j=0;
        }
    }
}

let matrix = newMxNMatrix(5,4);

for(let i = 0 ; i < 5; i++) {
    for(let j = 0; j < 4; j++) {
      matrix[i][j] = i + 1;
    }
  }
  matrix[3][1] = 0;
  setToZero(matrix);

printMatrix(matrix);