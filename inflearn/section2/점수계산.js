function solution(arr) {
  let result = 0;
  let temp = 0;
  for (let a of arr) {
    if (a === 0) temp = 0;
    else {
      temp += 1;
      result += temp;
    }
  }
  return result;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
