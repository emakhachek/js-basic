// Task #1
function functionDeclaration(a, b, ...rest) {
  return null;
}

const functionExpression = function (a, b, ...rest) { return null; };

const functionObject = new Function ('a', 'b', 'return null');

const arrowFunction = (a, b, ...rest) => null;

// Task #2
function takeMyParametersAmount() {
  let i = 0;
  for (let arg of arguments)
    i += 1;
  console.log(i);
  return null;
}
takeMyParametersAmount('a','b','c');

// Task #3
function logPassedParams() {
  return arguments.length;
}

let count = logPassedParams(1, 2, 3);
console.log(count);

// Task #4
(function () { })();