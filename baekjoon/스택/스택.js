const N = 14;
// push X: 정수 X를 스택에 넣기
// pop: 스택에서 가장 위에 있는 정수를 빼고 그 수를 출력, 스택이 비어있으면 -1 출력
// size: 스택의 개수 출력
// empty: 비어있으면 1 아니면 0
// top: 스택의 가장 위에 있는 정수 출력, 스택이 비어있으면 -1
const arr = [
  "push 1",
  "push 2",
  "top",
  "size",
  "empty",
  "pop",
  "pop",
  "pop",
  "size",
  "empty",
  "pop",
  "push 3",
  "empty",
  "top",
];

const solution = () => {
  const a = arr.map((el) => el.split(" "));
  let answer = "";
  const result = [];
  for (let i = 0; i < N; i++) {
    switch (a[i][0]) {
      case "push":
        result.push(a[i][1]);
        continue;
      case "pop":
        result.length > 0
          ? (answer += `${result.pop()}\n`)
          : (answer += "-1\n");
        continue;
      case "size":
        answer += `${result.length}\n`;
        continue;
      case "empty":
        result.length === 0 ? (answer += "1\n") : (answer += "0\n");
        continue;
      case "top":
        result.length > 0
          ? (answer += `${result[result.length - 1]}\n`)
          : (answer += "-1\n");
        continue;
    }
  }
  console.log(answer);
};

solution();
