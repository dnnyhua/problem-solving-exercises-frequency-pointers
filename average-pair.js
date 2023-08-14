// Write a function called averagePair. Given a sorted array of integers and a target average, determine 
// if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.
// Time Complexity: O(N)


// add whatever parameters you deem necessary
// function averagePair(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = 0; j < nums.length; j++) {
//         if ((nums[i] + nums[j + 1] / 2) === target) {
//           return true
//         }
//       }
//       return false
//     }
//   }
  


// REFACTORED

// This function works assuming the list of numbers are sorted. We can then use multiple pointers.
// At each point, if the average is less than the target num, we have to
// move the left pointer up, while the right can stay put. Otherwise if
// the average is greater than the sum, we move the right pointer down.

// The function ends either when we've found the correct average, or
// the pointers have crossed paths (i.e. when the start is greater than the end),
// at which point we can conclude there is no truthy answer.

function averagePair(nums, target){
    let start = 0;
    let end = nums.length - 1

    while(start < end){
        let avg = (nums[start] + nums[end]) / 2;
        if(avg === target) {
            return true;
        } else if (avg < target) {
            start++;
        } else {
            end--
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3, 4], 10.5)); // false
console.log(averagePair([1, 2, 3, 4], 2.5)); // true
console.log(averagePair([1, 2, 3, 4], 3.5)); // true
