const findTheOldest = function (arr) {
    let oldest = arr.sort((a, b) => {
        let personA = a.yearOfDeath - a.yearOfBirth;
        let personB = b.yearOfDeath - b.yearOfBirth;
        if (personB > personA || b.yearOfDeath === undefined && b.yearOfBirth < a.yearOfBirth) {
            return 1;
        } if (personB < personA || b.yearOfDeath === undefined && b.yearOfBirth > a.yearOfBirth) {
            return -1;
        } else {
            return 0;
        }
    });
    return oldest[0];
}

// Do not edit below this line
module.exports = findTheOldest;
