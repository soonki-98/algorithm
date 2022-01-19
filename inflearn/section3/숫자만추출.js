function solution(str) {
  return parseInt(str.replace(/[a-z]/gi, ""));
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
