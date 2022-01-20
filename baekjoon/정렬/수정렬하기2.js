const input = 5;
const arr = ["5", "2", "3", "1", "4", "2", "3", "5", "1", "7"];

function solution() {
  return arr.sort((a, b) => a - b).join("\n");
}

console.log(solution());
