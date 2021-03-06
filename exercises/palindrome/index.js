// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  var arr = str.split('');
  var arrLength = arr.length-1;
  var i = 0;
  for(var i = 0; i<= arrLength; i++) {
    if(!(arr[i] === arr[arrLength-i]))
      return false;
  }
  return true;
}

// function palindrome(str) {
// return str.split('').every((char, i) => {
//     return char === str[str.length-i-1];
//   })
// }

// function palindrome(str) {
//   const reversed = str.split('')
//         .reduce((reversed, char) => {
//           return char + reversed;
//         });
//   return str === reversed;
// }
module.exports = palindrome;
