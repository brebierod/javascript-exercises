const repeatString = function(str, num) {
    let newStr = "";
    if (num < 0) {
        return "ERROR"
;    } else {
  for (i = 0 ; i < num ; i++ ) {
    newStr = str + newStr ;
    }
    return newStr; }
};

repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("bye", -1);
// Do not edit below this line
module.exports = repeatString;
