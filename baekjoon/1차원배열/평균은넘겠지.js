const N = 5;
const input = [
  "5 50 50 70 80 100",
  "7 100 95 90 80 70 60 50",
  "3 70 90 80",
  "3 70 90 81",
  "9 100 99 98 97 96 95 94 93 91",
];

const solution = () => {
  const arr = input
    .map((el) => el.split(" "))
    .map((el) => el.map((le) => Number(le)));

  const percentage = arr
    .map((el) => {
      const n = el.shift();
      const avg = el.reduce((acc, cur) => acc + cur) / n;
      return el.map((le) => le > avg);
    })
    .map(
      (el) =>
        ((el.filter((le) => le === true).length / el.length) * 100).toFixed(3) +
        "%"
    );
  percentage.forEach((el) => console.log(el));
};

solution();
