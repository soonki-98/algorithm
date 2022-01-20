const input = ["839", "237"];

function solution() {
  const a = input.map((el) => Number(el.split("").reverse().join("")));
  return Math.max(...a);
}

console.log(solution());
