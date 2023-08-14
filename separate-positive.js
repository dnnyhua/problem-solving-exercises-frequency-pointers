// Write a function called separatePositive which accepts an array of non-zero integers. 
// Separate the positive integers to the left and the negative integers to the right. 
// The positive numbers and negative numbers need not be in sorted order. 
// The problem should be done in place (in other words, do not build a copy of the input array).
// Time Complexity: O(N)



function separatePositive(nums) {
    let start = 0;
    let end = nums.length - 1;
  
    while (start < end) {
      if (nums[start] < 0 && nums[end] > 0) {
    
        var temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
  
        start += 1;
        end -= 1;
      } else {
        if (nums[start] > 0) start += 1;
        else end -= 1;
      }
    }
    return nums;
  }
  
  console.log(separatePositive([2, -1, -3, 6, -8, 10]))