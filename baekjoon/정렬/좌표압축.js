// 결론은 현 배열 내에서 본인보다 작은거의 개수를 반환해야 한다.
const N = 5;
// const arr = [`2`, `4`, `-10`, `4`, `-9`];
const arr = [`1000`, `999`, `1000`, `999`, `1000`, "999"];

function solution() {
  const sortedArr = [...new Set(arr)].sort((a, b) => Number(a) - Number(b));
  const obj = {};
  sortedArr.forEach((el, idx) => (obj[el] = idx));
  return arr.map((el) => obj[el]).join(" ");
}

console.log(solution());
