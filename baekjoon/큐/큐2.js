const N = 15;
const arr = [
  "push 1",
  "push 2",
  "front",
  "back",
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
  "front",
];

function solution() {
  const queue = [];
  const list = arr.map((el) => el.split(" "));
  let result = "";

  for (let i of list) {
    switch (i[0]) {
      case "push":
        queue.push(i[1]);
        break;
      case "pop":
        result += queue.length > 0 ? `${queue.shift()}\n` : "-1\n";
        break;
      case "size":
        result += `${queue.length}\n`;
        break;
      case "empty":
        result += queue.length === 0 ? "1\n" : "0\n";
        break;
      case "front":
        result += queue.length === 0 ? "-1\n" : `${queue[0]}\n`;
        break;
      case "back":
        result += queue.length === 0 ? "-1\n" : `${queue[queue.length - 1]}\n`;
        break;
    }
  }
  return result;
}

console.log(solution());
