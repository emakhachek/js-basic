// Task #1
const array = [1, 2, 3, 4];
const isElementPresent = (ar, element) => ar.includes(element);
console.log(isElementPresent(array, 3));

// Task #2
const array = [2, 4];
const isArrayEven = (ar) => !ar.some(item => item % 2 === 1).length;
console.log(isArrayEven(array));

// Task #3
const array = [];
const isArray = (ar) => Array.isArray(ar);
console.log(isArray(array));

// Task #4
// Task #4
const array = [1, 2, 3, 4]
function insertElemToArrayByIndexNotPure(ar, indexToInsert, element) {
    ar.splice(indexToInsert, 0, element);
    return ar;
}
insertElemToArrayByIndexNotPure(array, 1, 100);
console.log(array);