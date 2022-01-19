const input = ["zZa"];

function solution() {
  const result = input[0].split("").map((el) => el.toUpperCase());
  const obj = {};
  for (let i of result) {
    obj[i] ? (obj[i] += 1) : (obj[i] = 1);
  }
  return Object.values(obj).filter(
    (el) => el === Math.max(...Object.values(obj))
  ).length > 1
    ? "?"
    : Object.keys(obj).filter(
        (el) => obj[el] === Math.max(...Object.values(obj))
      )[0];
}

console.log(solution());
