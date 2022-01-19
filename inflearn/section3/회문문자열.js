function solution(s) {
  const arr = s.toLowerCase().split("");
  const reverse = [...arr].reverse();
  return arr.join("") === reverse.join("") ? "YES" : "NO";
}

let str = "goo1G";
console.log(solution(str));
