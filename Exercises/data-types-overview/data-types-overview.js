// Task #1 #2
let a = 1;
console.log(typeof a); // expected output: number
let aNumber = new Number (1);
console.log(typeof aNumber); // expected output: object
let b = 'abc';
console.log(typeof b); // expected output: string
let bString = new String ('abc');
console.log(typeof bString); // expected output: object
let c = true;
console.log(typeof c); // expected output: boolean
let cBoolean = new Boolean (true);
console.log(typeof cBoolean); // expected output: object
let d = { da: 1, db: 2 };
console.log(typeof d); // expected output: object
let dObject = new Object ('{ da: 1, db: 2 }');
console.log(typeof dObject); // expected output: object
let e = Symbol("some_description");
console.log(typeof e); // expected output: "symbol"
let f = null;
console.log(typeof f); // expected output (well-known js bug): object
let g;
console.log(typeof g); // expected output: undefined
let h = 1n;
console.log(typeof h); // expected output: bigint

// Task #3
let objectDemonstration = {
    name: "Kate",
    age = 30,
    sizes: {
        height: 167,
        width: 53
    },
    "trying to learn js": true,
};
objectDemonstration.name = "Max";
objectDemonstration["trying to learn js"] = false; 
let a = age;
objectDemonstration[a] = 20; // objectDemonstration = { name : "Max", age : 20, "trying to learn js" : false, ... }
alert( "fullName" in objectDemonstration ); //false
alert( a in objectDemonstration ); //true


// Task #4
let a = 2;
console.log(`результат: ${a * 5}`); // результат: 10