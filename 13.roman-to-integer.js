/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  const integers = s.split("").map((c) => roman[c]);
  return integers.reduce(
    (acc, x, i) => (x < integers[i + 1] ? acc - x : acc + x),
    0,
  ); //nếu số nhỏ hơn đứng trước số lớn hơn thì trừ đi, ngược lại thì cộng vào
};
// @lc code=end
