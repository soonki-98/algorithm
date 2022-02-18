const N = 2;
const input = ["5 6", "0 0 1 0"];

const solution = () => {
  const operator = input[1].split(" ");
  const obj = {};
  for (let i in operator) {
    if (i === "0") obj["+"] = operator[i];
    else if (i === "1") obj["-"] = operator[i];
    else if (i === "2") obj["*"] = operator[i];
    else obj["/"] = operator[i];
  }
  return obj;
};

const oper = (a, b, o) => {
  if (o["/"] === 0) return;
};

console.log(solution());
