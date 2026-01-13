function decimalRound(num) {
  const numStr = num.toString();
  let rounded;
  //numStr = "0.6234";
  if (numStr.indexOf(".") === -1){
    return num;
  }
  else {
    let decimalPos = numStr.indexOf(".");
    if (numStr[decimalPos + 2] >= 5) {
      let rounded = numStr.slice(0,decimalPos + 1) + (+(numStr[decimalPos + 1]) + 1);
      return rounded;
    }
    else if (numStr[decimalPos + 2] < 5) {
      let rounded = numStr.slice(0,decimalPos + 1) + (+(numStr[decimalPos + 1]));
      return rounded;
     }
    
  }
    return rounded;
}

const convertToCelsius = function(num) {
//°C = (°F − 32) × 5/9
let answer = (num - 32) * (5/9);
if (answer >= 0)
return Math.abs(decimalRound(answer));
else {
  return +decimalRound(answer);
}
};

const convertToFahrenheit = function(num) {
  // °F = °C × 9/5 + 32
  let answer = num * (9/5) + 32;
if (answer >= 0)
return Math.abs(decimalRound(answer));
else {
  return +decimalRound(answer);
}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
