const input = "baekjoon";

function solution() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabet.map((el) => input.indexOf(el)).join(" ");
}

console.log(solution());
