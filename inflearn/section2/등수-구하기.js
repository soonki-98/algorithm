function solution(arr) {
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted.map((el) => arr.indexOf(el) + 1);
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
