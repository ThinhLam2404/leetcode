/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = [];

  for (let i = 0; i <= rowIndex; i++) {
    res = res.map((val, index) => (res[index - 1] || 0) + (res[index] || 0));
    res.push(1);
  }
  return res;
};
// @lc code=end
