// Task #1
function functionDeclaration(a, b, ...rest) {
  return null;
}

const functionExpression = function (a, b, ...rest) { return null; };

const functionObject = new Function('a', 'b', 'return null');

const arrowFunction = (a, b, ...rest) => null;

// Task #2
function takeMyParametersAmount(a, b, c) {
  return console.log(takeMyParametersAmount.length);
}

// Task #3
function logPassedParams(...theArgs) {
  return console.log(theArgs);
}
logPassedParams(1, 2, 3);
console.log(logPassedParams.length);

// Task #4

(function () {
  alert('An anonymous function');
})();