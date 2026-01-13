function isInt(num) {
    if (typeof num !== "number"
        || num.toString().indexOf(".") > -1) {
            return false;
        }
    return true;
}

const sumAll = function (index, num) {
    if ( isInt(index) == false 
        || index < 0 
        || isInt(num) == false
        || index < 0) {
        return "ERROR";
    }
    if (index > num) {
        [index, num] = [num, index];
    }
 let sumNums = [];
for (let i = index; i <= num; i++) {
    sumNums.push(+i);
}
//Javascript.info gave me the below reduce formula to add
    return +sumNums.reduce((sum, current) => sum + current, 0);
};

// Do not edit below this line
module.exports = sumAll;
