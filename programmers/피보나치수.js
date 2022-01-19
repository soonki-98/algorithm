function solution(n) {
  const a = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    a.push(((a[i - 2] % 1234567) + (a[i - 1] % 1234567)) % 1234567);
  }

  return a[n];
}
