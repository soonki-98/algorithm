const input = [3, 29, 38, 12, 57, 74, 40, 85, 61].map((el) => el.toString());

const solution = () => {
  const arr = input.map((el) => Number(el));
  console.log(Math.max(...arr));
  console.log(arr.indexOf(Math.max(...arr)) + 1);
};

solution();
