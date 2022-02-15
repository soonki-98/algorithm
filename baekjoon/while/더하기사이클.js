const input = 99;

const solution = () => {
  let a = input < 10 ? "0" + input.toString() : input.toString();
  let i = 0;
  while (true) {
    if (i > 0 && Number(a) === input) break;
    const temp = String(Number(a[0]) + Number(a[1]));
    a = a[a.length - 1] + temp[temp.length - 1];
    i += 1;
  }
  return i;
};

console.log(solution());
