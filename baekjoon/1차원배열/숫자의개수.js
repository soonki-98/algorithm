const input = ["150", "266", "427"];

const solution = () => {
  const zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr = input
    .map((el) => Number(el))
    .reduce((acc, cur) => acc * cur)
    .toString()
    .split("");

  zeroToNine.forEach((el) =>
    console.log(arr.filter((le) => Number(le) === el).length)
  );
};

solution();
