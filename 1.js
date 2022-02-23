function solution(input) {
  console.time();
  const obj = {};
  const result = [];
  const len = input.length;

  input.forEach((el, index) => {
    if (obj[el]) obj[el].push(index);
    else obj[el] = [index];
  });

  for (let i = 0; i < len; i++) {
    obj[input[0]].shift();
    if (!obj[input[0]][0]) delete obj[input[0]];
    let temp = 9999999;
    for (let j in obj) {
      if (j > input[0] && temp > obj[j][0]) temp = obj[j][0];
    }
    result.push(temp === 9999999 ? -1 : Math.abs(i - temp));
    input.shift();
  }
  console.timeEnd();
  return result;
}

const arr = [4, 1, 4, 7, 6];
console.log(solution([...arr.join("").repeat(10000)]));
console.log(solution([13, 7, 3, 7, 5, 16, 12]));
console.log(solution([7, 6, 1, 4, 1]));
