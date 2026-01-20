const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, para) => total + para, 0);
}

const multiply = function (arr) {
  let multiplyArray = arr;
  return multiplyArray.reduce((total, para) => total * para);
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    num *= i;
  }
  return num; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
