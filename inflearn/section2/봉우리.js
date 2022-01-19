function solution(arr, l) {
  // 현재 : arr[i][j];
  // 오른쪽 : arr[i][j + 1]; // if (j !== arr[i].length)
  // 왼쪽 : arr[i][j - 1];   // if (j !== 0)
  // 위 : arr[i - 1][j];     // if (i !== 0)
  // 아래 : arr[i + 1][j];   // if (i !== arr.length)

  // 현재가 자신의 오른쪽 왼쪽 위 아래보다 크면 봉우리
  // 1. 배열을 0으로 감싼다.
  arr.unshift(Array.from({ length: l }, () => 0));
  arr.push(Array.from({ length: l }, () => 0));
  arr.map((el) => {
    el.push(0);
    el.unshift(0);
  });

  let result = 0;

  // 2. 1번 인덱스부터 말전 인덱스까지 비교하며 탐색
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      const [now, up, down, left, right] = [
        arr[i][j],
        arr[i - 1][j],
        arr[i + 1][j],
        arr[i][j - 1],
        arr[i][j + 1],
      ];
      if (now > up && now > down && now > left && now > right) result += 1;
    }
  }
  return result;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr, arr[0].length));
