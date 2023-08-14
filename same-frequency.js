// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Time Complexity - O(N + M)

function sameFrequency(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();
    if (str1.length !== str2.length) return false;
  
    let nums1 = {};
    let nums2 = {};
  
    for (el of str1) {
      nums1[el] = (nums1[el] + 1) || 1;
    }
  
    for (el of str2) {
      nums2[el] = (nums2[el] + 1) || 1;
    }
  
    for (let key in nums1) {
      if (nums1[key] !== nums2[key]) {
        return false;
      }
    }
    return true;
  }
  


console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
