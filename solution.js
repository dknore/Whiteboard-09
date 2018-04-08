'use strict';

function reverse(int) {
  let result = 0;
  let num;

  while(int !== 0) {
    num = int % 10;
    result = (result * 10) + num;
    int = Math.floor(int/10);
  }
  return result;
} 
reverse();