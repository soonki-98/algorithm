function solution(n) {
  const arr = new Array(n).fill(true);
  for (let i = 2; i ** 2 <= n; i++) {
    if (arr[i - 1] === true) {
      for (let j = i ** 2; j <= n; j += i) {
        arr[j - 1] = false;
      }
    }
  }
  return arr.filter((e) => e === true).length - 1;
}
