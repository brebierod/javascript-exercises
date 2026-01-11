const removeFromArray = (arr, a, b, c, d) => {
    for (let i = 0; i < arr.length;) {
        if (arr[i] === a || arr[i] == b || arr[i] == c 
            || arr[i] == d 
        ) {
            arr.splice(i, 1);
        }
        else {
            i++;
        }
    }      
  return arr;
};
let test = [1, 2, 3, 3, 4];
let test2 = ["hey", 2, 3, "ho"];
removeFromArray(test, 3);
removeFromArray(test, 3, 2);
removeFromArray(test, 7, "tacos");
removeFromArray(test, 7, 2, 3, 4);
removeFromArray(test2,"hey", 3 );
removeFromArray(test, "1"), 3;
// Do not edit below this line
module.exports = removeFromArray;
