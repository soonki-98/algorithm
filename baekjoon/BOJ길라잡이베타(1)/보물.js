// const [n, ...arr] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const n = 5;
const arr = ["1 1 1 6 0", "2 7 8 3 1"];

const A = arr[0].split(" ").sort((a, b) => a - b);
const B = arr[1].split(" ").sort((a, b) => b - a);

const result = A.reduce((acc, cur, index) => {
  const sum = Number(cur) * Number(B[index]);
  acc += sum;
  return acc;
}, 0);

console.log(result);
