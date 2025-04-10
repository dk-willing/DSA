function reverseString(str) {
  return `${str} ----> ${str.split("").reverse().join("")}`;
}

//Test for ReverseString function
// console.log(reverseString("Hello"));
// console.log(reverseString("Apple"));

function palindrome(str) {
  return str === str.split("").reverse().join("")
    ? `This is a valid Palindrome`
    : `This is NOT a valid Palindrome`;
}

console.log(palindrome("hello"));
