// Write a function which accepts a number in string format and returns a number.
// Example:
// stringToInt('123') -> 123

function stringToNum(numStr) {
  return parseInt(numStr);
}

//test:

console.log(typeof stringToNum("12"));
