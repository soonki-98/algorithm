const input = [
  "0 32",
  "3 13",
  "28 25",
  "17 5",
  "21 20",
  "11 0",
  "12 12",
  "4 2",
  "0 8",
  "21 0",
];

const solution = () => {
  const arr = input
    .map((el) => el.split(" "))
    .map((el) => el.map((le) => Number(le)));
  let result = 0;
  let temp = 0;
  for (let a of arr) {
    temp = temp - a[0] + a[1];
    if (temp > result) result = temp;
  }
  return result;
};

console.log(solution());
