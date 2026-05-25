/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const xString = x.toString();
  const evenLength = xString.length % 2 === 0; //chẵn
  const mid = Math.floor(xString.length / 2);
  const halfFirst = xString.substring(0, mid);
  let halfSecond = evenLength
    ? xString.substring(mid)
    : xString.substring(mid + 1);
  halfSecond = halfSecond.toString().split("").reverse().join("");

  return halfFirst == halfSecond ? true : false;
};
// @lc code=end
