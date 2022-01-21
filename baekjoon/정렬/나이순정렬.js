const N = 3;
const arr = ["21 Junkyu", "21 Dohyun", "20 Sunyoung"];

function solution() {
  return arr
    .map((el) => el.split(" "))
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .join("\n")
    .replace(/,/g, " ");
}

console.log(solution());
