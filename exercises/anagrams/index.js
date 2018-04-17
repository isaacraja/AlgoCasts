// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let strA = stringA.replace(/[^\w]/g, "").toLowerCase();
  let strB = stringB.replace(/[^\w]/g, "").toLowerCase();

  if (strA.length !== strB.length) {
    return false;
  }

  const strMapA = buildStrMap(strA);
  const strMapB = buildStrMap(strB);

  for (let i = 0; i < Object.keys(strMapA).length; i++) {
    if (strMapA[strA[i]] !== strMapB[strA[i]]) {
      return false;
    }
  }
  return true;
}

function buildStrMap(str) {
  let strMap = {};
  for (let i = 0; i < str.length; i++) {
    strMap[str[i]] = strMap[str[i]] + 1 || 1;
  }
  return strMap;
}

module.exports = anagrams;
