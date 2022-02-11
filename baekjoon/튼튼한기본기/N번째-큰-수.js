const n = 4;
const input = [
  "1 2 3 4 5 6 7 8 9 1000",
  "338 304 619 95 343 496 489 116 98 127",
  "931 240 986 894 826 640 965 833 136 138",
  "940 955 364 188 133 254 501 122 768 408",
];

const solution = () => {
  const arr = input
    .map((el) => el.split(" "))
    .map((el) => el.sort((a, b) => Number(b) - Number(a)));
  for (let i of arr) {
    console.log(i[2]);
  }
};

solution();
