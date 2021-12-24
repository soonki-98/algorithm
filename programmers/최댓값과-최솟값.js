function solution(s) {
  const arr = s.split(" ").map((el) => parseInt(el));
  return `${Math.min.apply(null, arr)} ${Math.max.apply(null, arr)}`;
}
