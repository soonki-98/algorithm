const input = ["472", "385"];

function solution() {
  const a = input[1].split("").map((el) => Number(input[0]) * Number(el));
  a.reverse();
  a.push(Number(input[0]) * Number(input[1]));
  for (let i of a) {
    console.log(i);
  }
}

solution();
