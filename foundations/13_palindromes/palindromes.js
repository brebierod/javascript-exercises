const palindromes = function (words) {
    const lettersArray = words.toLowerCase()
                                                    .split('');
    let newArray = lettersArray.filter((item) => /[a-z]/i.test(item) === true || /\d/.test(item) === true);
    let reverseArray = newArray.map((item) => item);
    reverseArray.reverse();
    if (reverseArray.join('') === newArray.join('')) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
