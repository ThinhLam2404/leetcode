/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const res = new Map();
  for (let i = 0; i < nums.length; i++) {
    const neededValue = target - nums[i];
    if (res.has(neededValue)) {
      return [i, res.get(neededValue)];
    }
    res.set(nums[i], i);
  }
};
// @lc code=end
