function solution(x) {
  const a = x.toString();
  let temp = 0;
  for (let i of a) {
    temp += parseInt(i);
  }
  return x % temp ? false : true;
}
