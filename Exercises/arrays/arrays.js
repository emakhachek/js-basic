// Task #1
function randomArrayGenerator() {
    let arr = Array.from({ length: parseInt(Math.random() * 100) }, () => Math.floor(Math.random() * 100));
    console.log(arr)
}
randomArrayGenerator();

// Task #2
const array = [1, 2, 3, 4];
function copyOfArray(ar) {
    const result = ar.slice();
    return console.log(result);
}
copyOfArray(array);

// Task #3
const array = [1, 2, 3, 4];
function findElement(ar, element) {
    const result = ar.indexOf(element);
    return console.log(result);
}
findElement(array, 3);

// Task #4
const array1 = [1, 2, 3, 4];
const array2 = [4, 5];
function concatArray(ar1, ar2) {
    const result = ar1.concat(ar2);
    return console.log(result);
}
concatArray(array1, array2);

// Task #5
let array = [1, 2, 3, 4];
function changeArrayElemNotPure(ar, index) {
    ar[index] = 100;
    return console.log(ar);
}
changeArrayElemNotPure(array, 2);
console.log(array);
array = [1, 2, 3, 4];
function changeArrayElemPure(ar, index) {
    const copyArr = [...ar];
    copyArr[index] = 100;
    return console.log(copyArr);
}
changeArrayElemPure(array, 2);
console.log(array);    