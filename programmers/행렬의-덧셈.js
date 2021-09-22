function solution(arr1, arr2) {
  return arr1.map((el, i) => el.map((e, j) => (e += arr2[i][j])));
}
