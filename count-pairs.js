// Given an array of integers, and a number, find the number of pairs 
// of integers in the array whose sum is equal to the second parameter. 
// You can assume that there will be no duplicate values in the array.


// // O(n) / O(n)
function countPairs(arr, num) {
    let s = new Set(arr);
    let count = 0;
    for (let val of arr) {
      s.delete(val);
      if (s.has(num - val)) {
        count++;
      }
    }
    return count;
  }
  
// //   O(n log n) / O(1)
  
//   function countPairs(arr, num) {
//       arr.sort((a, b) => a - b);
//       let count = 0;
//       let start = 0;
//       let end = arr.length - 1;
//       while (start < end) {
//           let sum = arr[start] + arr[end];
//           if (sum === num) {
//               count++;
//               start++;
//               end--;
//           } else if (sum < num) {
//               start++;
//           } else {
//               end--;
//           }
//       }
//       return count;
//   }