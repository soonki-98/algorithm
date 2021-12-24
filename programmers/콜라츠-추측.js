function solution(num) {
  let repeat = 0;
  while (num !== 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    repeat += 1;
    if (repeat === 500) break;
  }
  return repeat === 500 ? -1 : repeat;
}
