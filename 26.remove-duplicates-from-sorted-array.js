/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//nếu giá trị giống nhau thì bỏ qua, nếu khác nhau thì gán giá trị đó vào vị trí j
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      ++i;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
// @lc code=end
