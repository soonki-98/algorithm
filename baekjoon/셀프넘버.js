let arr = [];

const selfNumber = (n) => {
  const str = n.toString();
  let result = n;
  if (n >= 10000) return result;
  for (let i of str) {
    result += Number(i);
  }
  arr.push(result);
  selfNumber(result);
};

for (let i = 1; i <= 10000; i++) {
  selfNumber(i);
}

arr = [...new Set(arr)];

for (let i = 1; i <= 10000; i++) {
  if (arr.includes(i)) continue;
  console.log(i);
}
