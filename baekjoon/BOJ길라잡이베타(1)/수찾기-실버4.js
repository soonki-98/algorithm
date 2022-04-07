// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["5", "4 1 5 2 3", "5", "1 3 7 9 5"];

const [N, A, M, B] = input.map((v) => v.split(" "));

const array = new Set(A);

const result = B.map((v) => (array.has(v) ? 1 : 0));

console.log(result.join("\n"));
