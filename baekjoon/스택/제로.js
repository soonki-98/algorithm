const N = 10;
// const arr = ["1", "3", "5", "4", "0", "0", "7", "0", "0", "6"];
const arr = ["3", "0", "4", "0"];

function solution() {
  const result = [];
  for (const i of arr.map((el) => Number(el))) {
    if (i === 0) result.pop();
    else result.push(i);
  }
  return result.reduce((acc, sum) => acc + sum, 0);
}

console.log(solution());
