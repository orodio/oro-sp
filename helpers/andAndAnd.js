"use strict";

// String -> String -> String
function and(a, b) {
  return a + " and " + b;
}

// [String] -> String
function andAndAnd(a) {
  // ["a", "b", "c", "d"] -> "a, b, c and d"
  if (a.length === 0) return "";
  if (a.length === 1) return a[0];
  if (a.length === 2) return and(a[0], a[1]);
  var last = a.pop();
  return and(a.join(", "), last);
}

module.exports = andAndAnd;
