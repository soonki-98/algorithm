function solution(n) {
  const a = n
    .toString(2)
    .split("")
    .filter((el) => el === "1").length;
  let result = 0;
  while (true) {
    n += 1;
    const b = n
      .toString(2)
      .split("")
      .filter((el) => el === "1").length;
    result = n;
    if (a === b) break;
  }
  return result;
}
