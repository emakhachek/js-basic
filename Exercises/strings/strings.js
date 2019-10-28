// Task #1
const a = "\u2764";
console.log(a);

// Task #2
const b = "This is a backslash \\";
console.log(b);

// Task #3
const c = 'Cat';

// Task #4
console.log(`My favorite animal is ${c}`);

// Task #5
function сapitalizeFirstLetters(text) {
    let temp = '';
    let res = '';
    for (let i = 0; i < text.length; i += 1) {
        temp += text[i];
        if (text[i] == ' ' || i == text.length - 1) {
            res += temp[0].toUpperCase() + temp.slice(1);
            temp = '';
        }
    }
    return res;
}
console.log(сapitalizeFirstLetters('erich maria remarque'));