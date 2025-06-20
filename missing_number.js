// Brute-force with sorting and comparison

var missingNumber = function(nums) {
      nums.sort((a, b) => a - b);
  
      if (nums[0] !== 0) return 0;
  
      for (let i = 1; i < nums.length; i++) {
          if (nums[i] !== nums[i - 1] + 1) {
              return nums[i - 1] + 1;
          }
      }
  
      return nums.length;
  };

// Optimal

var missingNumber = function(nums) {
      let n = nums.length;
      let total_sum = (n * (n + 1)) / 2;
      let sum_of_array = 0;
  
      for (let num of nums) {
          sum_of_array += num;
      }
  
      return total_sum - sum_of_array;
  };
      
