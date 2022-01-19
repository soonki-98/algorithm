function solution(s, t) {
  const a = s
    .split("")
    .map((el, idx) => {
      if (el === t) return idx;
    })
    .filter((el) => el !== undefined);

  return s.split("").map((_, idx) => {
    return Math.min(...a.map((el) => Math.abs(el - idx)));
  });
}

let str = "teachermode";
console.log(solution(str, "e"));
