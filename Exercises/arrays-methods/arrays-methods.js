// Task #1
const array = [1, 2, 3, 4];
function isElementPresent(ar, element) {
    return console.log(ar.includes(element));
}
isElementPresent(array, 5);

// Task #2
const array = [2, 4];
function isArrayEven(ar) {
    return console.log(Boolean(!ar.filter(item => item % 2 === 1).length));
}
isArrayEven(array);

// Task #3
const array = [];
function isArray(ar) {
    return console.log(Array.isArray(ar));
}
isArray(array);

// Task #4
const array = [1, 2, 3, 4];
function insertElemToArrayByIndex(ar, indexToInsert, element) {
    ar[indexToInsert] = element;
    return ar;
}
insertElemToArrayByIndex(array, 5, 100);
console.log(array);