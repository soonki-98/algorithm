// const input = 3;
const arr = ["-1", "-2", "-3", "-1", "-2 "].join(" ").repeat(100000).split(" ");
arr.pop();
// const arr = ["4000"];
// const arr = [1, 3, 8, -2, 2];
// const arr = [0, 0, -1];

console.time();

const obj = {};
const numbers = arr
  .map((el) => {
    if (obj[el]) obj[el] += 1;
    else obj[el] = 1;
    return Number(el);
  })
  .sort((a, b) => a - b);

const modeTimes = Math.max(...Object.values(obj));
const modeArr = [
  ...new Set(
    Object.keys(obj)
      .sort((a, b) => a - b)
      .filter((el) => obj[el] === modeTimes)
  ),
];
const avg = Math.round(
  numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length
);

console.log(avg === -0 ? 0 : avg);
console.log(numbers[Math.floor(numbers.length / 2)]);
console.log(modeArr[1] || modeArr[0]);
console.log(numbers[numbers.length - 1] - numbers[0]);

console.timeEnd();
