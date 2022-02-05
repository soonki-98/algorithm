const input = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const solution = () => {
  const arr = input.map((el) => Number(el));
  const result = [...new Set(arr.map((el) => el % 42))];
  return result.length;
};

console.log(solution());
