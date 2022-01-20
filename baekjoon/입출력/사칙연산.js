const input = ["7", "3"];

function solution() {
  return `${Number(input[0]) + Number(input[1])}\n${
    Number(input[0]) - Number(input[1])
  }\n${Number(input[0]) * Number(input[1])}\n${Math.floor(
    Number(input[0]) / Number(input[1])
  )}\n${Number(input[0]) % Number(input[1])}`;
}

console.log(solution());
