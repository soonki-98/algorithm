function solution(s) {
  const a = [...s.toLowerCase().replace(/[^a-z]/gi, "")];
  const b = [...a].reverse();
  return a.join("") === b.join("") ? "YES" : "NO";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
