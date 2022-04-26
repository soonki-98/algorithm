// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
const input = ["5 0", "-7 -3 -2 5 8"];

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let result = 0;

for (let i = 0; i < N; i++) {
  let j = i + 1;
  let temp = arr[i];
  while (true) {
    if (j === N || temp >= S) break;
    temp += arr[j];
    j += 1;
  }
  if (temp === S) result += 1;
}

console.log(result);
