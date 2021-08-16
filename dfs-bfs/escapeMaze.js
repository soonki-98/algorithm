function solution(n, m, maze) {
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  const visitCount = [...maze].map((r) => r.map((c) => 1));

  const queue = [[0, 0]];

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny >= 0 && ny < n && nx >= 0 && nx < m) {
        if (maze[ny][nx] === 1 && visitCount[ny][nx] === 1) {
          visitCount[ny][nx] = visitCount[y][x] + 1;
          queue.push([ny, nx]);
        }
      }
    }
  }
  return visitCount[n - 1][m - 1];
}

const maze = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];
const N = maze.length;
const M = maze[0].length;

console.log(solution(N, M, maze));
