const leapYears = function(year) {
//if statement
    if (year % 4 === 0
        && year % 100 !== 0
        || year % 400 === 0
     ) {
        return true;
     }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
