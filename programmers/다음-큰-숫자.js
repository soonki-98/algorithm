function solution(n) {
  const a = n
    .toString(2)
    .split("")
    .filter((el) => el === "1").length;
  while (true) {
    n += 1;
    const b = n
      .toString(2)
      .split("")
      .filter((el) => el === "1").length;
    if (a === b) return n;
  }
}
