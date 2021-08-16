function solution(n, m, square) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (DFS(i, j) === true) {
        result += 1;
      }
    }
  }
  return result;

  function DFS(x, y) {
    if (x <= -1 || x >= n || y <= -1 || y >= m) {
      return false;
    }
    if (square[x][y] === 0) {
      square[x][y] = 1;
      DFS(x - 1, y);
      DFS(x, y - 1);
      DFS(x + 1, y);
      DFS(x, y + 1);
      return true;
    }
    return false;
  }
}

const array = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

console.log(solution(4, 5, array));
