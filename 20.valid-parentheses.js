/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");
  if (s.length % 2 === 1) {
    return false;
  }

  let slow = 0;
  let fast = 1;
  while (s !== "" && fast < s.length) {
    if (map.get(s[slow]) === s[fast]) {
      s = s.slice(0, slow) + s.slice(fast + 1);
      slow = 0;
      fast = 1;
    } else {
      slow += 1;
      fast += 1;
    }
  }
  if (s === "") {
    return true;
  }
  return false;
};
// @lc code=end
