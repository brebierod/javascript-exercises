const fibonacci = function (num) {
    let fibonacciArray = [0, 1, 1];
    if (num < 0) {
        return "OOPS";
    } else {
        for (let i = 2; i <= num; i++) {
            fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1]
        }
        return fibonacciArray[num];
    }
};



// Do not edit below this line
module.exports = fibonacci;
