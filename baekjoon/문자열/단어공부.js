const input = "aabbccc";

function solution() {
  const result = input.toUpperCase().split("");
  const obj = {};

  for (let i of result) {
    if (obj[i]) obj[i] += 1;
    else obj[i] = 1;
  }

  const max = Math.max(...Object.values(obj));
  return Object.values(obj).filter((el) => el === max).length === 1
    ? Object.keys(obj).filter((el) => obj[el] === max)[0]
    : "?";
}

console.log(solution());
