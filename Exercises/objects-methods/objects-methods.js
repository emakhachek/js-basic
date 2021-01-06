const testObj = {
    a: 1,
    b: 2,
};
function a(obj) {
    Object.getOwnPropertyNames(obj).forEach(function (element) {
        console.log(`${element} : ${obj[element]}`);
    });
}
a(testObj);