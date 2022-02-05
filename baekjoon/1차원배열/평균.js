const N = 3;
const input = ["10", "20", "30"];

const solution = () => {
  const arr = input.map((el) => Number(el));
  const max = Math.max(...arr);
  return arr.map((el) => (el / max) * 100).reduce((acc, cur) => acc + cur) / N;
};

console.log(solution());
