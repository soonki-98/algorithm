const N = 3;
const input = ["((", "))", "())(()"];

function solution() {
  const arr = input.map((el) => el.split(""));
  const arrLen = arr.length;
  let result = "";
  for (let j = 0; j < arrLen; j++) {
    const temp = [];
    const len = arr[j].length;
    temp.push(arr[j].shift());
    for (let i = 0; i < len; i++) {
      temp.push(arr[j].shift());
      if (temp[temp.length - 1] === ")" && temp[temp.length - 2] === "(") {
        temp.pop();
        temp.pop();
      }
    }
    temp.filter((el) => el !== undefined).length > 0
      ? (result += "NO\n")
      : (result += "YES\n");
  }
  return result;
}

console.log(solution());
