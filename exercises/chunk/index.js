// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  let last = [];
  for (let i = 0; i < array.length; i++) {
    last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunked;
}

// function chunk(array, size) {
//   const chunked = [];
//   for (let i = 0; i < array.length; i = i + size) {
//     chunked.push(array.slice(i, i + size));
//   }
//   return chunked;
// }

// function chunk(array, size) {
//   var times = Math.ceil(array.length / size);
//   var chunkedArr = [],
//       tempArr = [];
//   for (let i = 1; i <= times; i++) {
//     tempArr[i] = array.splice(0, size);
//     chunkedArr.push(tempArr[i]);
//   }
//   return chunkedArr;
// }
module.exports = chunk;
