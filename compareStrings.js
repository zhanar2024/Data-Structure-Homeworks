// Write a function which accepts two strings and compares by their length.
// Example:
// compare('ABC', 'abc') -> true
// compare('abcd', 'abcde') -> false
// Explanation: length of 'ABC' and 'abc are equal so return true, whereas 'abcd' length and 'abcde' length are not equal.

function compareStrings(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return true;
  } else return false;
}

//test

console.log(compareStrings("apple", "APPLE"));
console.log(compareStrings("apple1", "APPLE"));
console.log(compareStrings("abcd", "abcde"));
console.log(compareStrings("ABC", "abc"));
