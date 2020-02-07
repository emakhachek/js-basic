// Task #1
const objectWithDefinedProperties = {};
Object.defineProperties(objectWithDefinedProperties, {
    eyeColor: { value: "blue", writable: false },
    height: { value: 180, enumerable: false },
    hasCat: { value: true, configurable: false }
});

// Task #2
function deleteObjKey(obj, key) {
    delete obj[key];
    return obj;
}
deleteObjKey(objectWithDefinedProperties, "eyeColor");

function deleteObjKeyPure(obj, key) {
    const copyObj = Object.assign({}, obj);
    delete copyObj[key];
    return copyObj;
}
deleteObjKeyPure(objectWithDefinedProperties, "hasCat");

// Task #3
function showInfo({ height = 167, hasCat }) {
    console.log(`She/he is ${height} height. Has she/he a cat? ${hasCat}`);
}
showInfo(objectWithDefinedProperties);

// Task #4
const person = 'name';
objectWithDefinedProperties[person] = 'Kate';
console.log(objectWithDefinedProperties);

// Additional task:
const keys = ["name", "age", "happy"];
const values = ["Andy", 31, true];
let obj = {};
keys.forEach((item, index) => obj[item] = values[index]);
console.log(obj);