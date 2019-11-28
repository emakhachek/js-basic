// Task 1,2
let student = {
    name: "Kate",
    birthYear: 1987,
    age: function () {
        const currentYear = new Date().getFullYear()
        return currentYear - this.birthYear;
    },
}
console.log(student.age());
const defineAge = student.age;
console.log(defineAge());
console.log(defineAge.call(student));

// Task 3
let graduate = {
    name: "Alex",
    birthYear: 1979,
}
console.log(defineAge.call(graduate));

// Task 4
window.a = {
    name: "John",
}
let b = {
    name: "Peter",
    greeting: () => {
        console.log(`Hi, ${this.a.name}`);
    }
}
b.greeting();

// Task 5
let parentObj = {
    parentContext: 1,
    parentFunc: function () {
        let newObj = {
            newFunc: () => {
                console.log(`Hi, ${this.parentContext}`);
            },
        }
        return newObj;
    },
}
parentObj.parentFunc().newFunc();
