// Task #1
function randomArrayGenerator() {
    return Array.from({ length: parseInt(Math.random() * 100) }, () => Math.floor(Math.random() * 100));
}
const randomArray = randomArrayGenerator();
console.log(randomArray);

// Task #2
const array = [1, 2, 3, 4];
const copyOfArray = (ar) => [...ar];
const copiedArray = copyOfArray(array);
console.log(copiedArray);

// Task #3
const array = [1, 2, 3, 4];
const findElement = (ar, element) => ar.indexOf(element);
const result = findElement(array, 3);
console.log(result);

// Task #4
const array1 = [1, 2, 3, 4];
const array2 = [4, 5];
const concatArray = (ar1, ar2) => ar1.concat(ar2);
const concatedArray = concatArray(array1, array2);
console.log(concatedArray);

// Task #5
let array = [1, 2, 3, 4];
function changeArrayElemNotPure(ar, index) {
    ar[index] = 100;
    return ar;
}
changeArrayElemNotPure(array, 2);
console.log(array);
array = [1, 2, 3, 4];
function changeArrayElemPure(ar, index) {
    const copiedArr = [...ar];
    copiedArr[index] = 100;
    return copiedArr;
}
changeArrayElemPure(array, 2);
console.log(array);    