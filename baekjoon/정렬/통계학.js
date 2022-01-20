// 시간 초과 메모리 초과

const input = 5;
const arr = ["-1", "-2", "-3", "-1", "-2"];

const numbers = arr.map((el) => Number(el)).sort((a, b) => a - b);
const obj = {};
const result = [];
const avg = Math.round(numbers.reduce((a, b) => a + b, 0) / input);
const center = numbers[Math.floor(input / 2)];

for (let num of numbers) {
  if (obj[num]) obj[num] += 1;
  else obj[num] = 1;
}

const sorted = Object.keys(obj)
  .map((el) => Number(el))
  .sort((a, b) => a - b);

for (let i in sorted) {
  if (Object.values(obj)[i] === Math.max(...Object.values(obj))) {
    result.push(sorted[i]);
  }
}

console.log(avg);
console.log(center);
console.log(result.length > 1 ? result[1] : result[0]);
console.log(Math.max(...numbers) - Math.min(...numbers));
