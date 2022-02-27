const N = 3;
const input = ["ab", "aa", "aca", "ba", "bb"];

function solution() {
  let result = 0;
  for (let str of input) {
    const obj = {};
    let temp = "";
    let isBreak = false;
    for (let s of str) {
      if (temp !== s && !obj[s]) {
        temp = s;
        obj[s] = true;
      } else if (temp !== s && obj[s]) {
        isBreak = true;
        break;
      }
    }
    !isBreak && result++;
  }
  return result;
}

console.log(solution());
