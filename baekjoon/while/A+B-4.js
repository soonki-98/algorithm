const input = ["1 1", "2 3", "3 4", "9 8", "5 2"];

const solution = () => {
  const arr = input
    .map((el) => el.split(" "))
    .map((el) => el.map((le) => parseInt(le)));
  let i = 0;

  while (true) {
    if (i === arr.length) break;
    console.log(arr[i][0] + arr[i][1]);
    i += 1;
  }
};

solution();
