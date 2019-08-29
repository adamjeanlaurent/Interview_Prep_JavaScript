

function sumEven(num) {
    if(0 >= num) return 0;
    if(((num % 10) % 2) == 0) {
      return num % 10 + sumEven(Math.floor(num/10));
    }
    else {
      return sumEven(Math.floor(num/10));
    }
  }
  