// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// const n = input[0];
// const numbers = input[1].split(" ");
const n = 10;
const numbers = "1 4 2 3 1 4 2 3 1 2".split(" ");

const result = [...new Set(numbers)].sort((a, b) => Number(a) - Number(b));

console.log(result.join(" "));
