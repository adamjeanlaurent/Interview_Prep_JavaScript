function sudoku_checker(board) {
  // check rows
  // check columns
  //check boxes

  for(let i = 0; i < board.length; i++) {
      if(!cols(board, i) || !rows(board, i)) {
          return false;
      }
  }
  // check boxes
  
}

function boxes(board) {
  let seen = new Array(10).fill(0);
  for(let i = 0; i < board.length; i++) {
      
  }
}

function cols(board, colIndex) {
  let seen = new Array(10).fill(0);
  for(let i = 0; i < board.length; i++) {
   let currentChar = board[i][colIndex];
    if(currentChar > 9 || currentChar < 1) {
      return false;
    }
    if(seen[currentChar + 1]) {
      return false;
    }
    else {
      seen[currentChar + 1] = 1;
    }
  }
  if(seen.includes(0)) {
    return false;
  }
  else {
    return true;
  }
}

function rows(board, rowIndex) {
  let seen = new Array(10).fill(0);
  for(let i = 0; i < board[rowIndex].length; i++) {
    let currentChar = board[rowIndex][i];
    if(currentChar > 9 || currentChar < 1) {
      return false;
    }
    if(seen[currentChar + 1]) {
      return false;
    }
    else {
      seen[currentChar + 1] = 1;
    }
  }
  if(seen.includes(0)) {
    return false;
  }
  else {
    return true;
  }
}