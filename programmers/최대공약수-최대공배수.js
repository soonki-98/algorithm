function solution(n, m) {
  const nm = n * m;
  for (let i = n; i > 0; i--) {
    const a = nm / i;
    if (a % m === 0 && m % i === 0) {
      return [i, nm / i];
    }
  }
}
