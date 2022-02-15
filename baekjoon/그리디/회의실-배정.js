const n = 11;
const input = [
  "1 4",
  "3 5",
  "0 6",
  "5 7",
  "3 8",
  "5 9",
  "6 10",
  "8 11",
  "8 12",
  "2 13",
  "12 14",
];

const solution = () => {
  const arr = input
    .map((el) => el.split(" "))
    .sort((a, b) => {
      const time = a[1] - a[0] - (b[1] - b[0]);
      if (a[0] === b[0]) return time;
      else return a[0] - b[0];
    });
  const result = [arr.shift()];

  for (let a of arr) {
    const n = result.length - 1;
    if (result[n][1] - result[n][0] > a[1] - a[0]) {
      console.log(a);
      console.log(result[n]);
      console.log("----------------");
    }
  }
};

console.log(solution());
