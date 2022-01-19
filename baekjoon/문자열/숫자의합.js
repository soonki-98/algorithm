const input = ["1", "12345"];

function solution() {
  const a = input[1].split("").map((el) => Number(el));
  let result = 0;
  for (let i of a) {
    result += i;
  }
  return result;
}
console.log(solution());
