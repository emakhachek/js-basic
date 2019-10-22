const codeToMissingComplexityElement = {
  0: 'length',
  1: 'capital letter',
  2: 'special character',
  3: 'cannot be empty'
};

function getMissingComplexityElementCode(password) {
  if (!password) {
    return 3;
  }

  if (password.length != 8) {
    return 0;
  }

  if (password.toLowerCase() === password) {
    return 1;
  }

  if (!password.match(/.*[^A-Za-z0-9]/)) {
    return 2;
  }

  return true;
}

function getErrorMessage(errorCode) {
  console.log(codeToMissingComplexityElement[errorCode]);
}

let errorCode = getMissingComplexityElementCode('123456A@');

(errorCode === true) ?
  console.log('Confirmed') : getErrorMessage(errorCode);