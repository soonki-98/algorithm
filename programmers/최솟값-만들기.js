function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.map((el, idx) => {
    return el * B[idx];
  }).reduce((cur, val) => {
    return cur + val;
  }, 0);
}
