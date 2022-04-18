const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbers = input[1].split(" ");

const result = [...new Set(numbers)].sort((a, b) => Number(a) - Number(b));

console.log(result.join(" "));
