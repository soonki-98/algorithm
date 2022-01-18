const sumColumn = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const a = [];
    for (let j = 0; j < arr.length; j++) {
      a.push(arr[j][i]);
    }
    result.push(a);
  }
  return Math.max(...result.map((el) => el.reduce((acc, sum) => acc + sum), 0));
};

const sumReverseCross = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][4 - i]);
  }
  return result.reduce((acc, sum) => acc + sum, 0);
};

function solution(arr) {
  const rowSum = Math.max(
    ...arr.map((el) => el.reduce((acc, sum) => acc + sum), 0)
  );
  const crossSum = Math.max(...arr.map((el, idx) => el[idx]));
  const colSum = sumColumn(arr);
  const reverseCrossSum = sumReverseCross(arr);
  return Math.max(...[rowSum, crossSum, colSum, reverseCrossSum]);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
