const n = 4;
const input = ["1 2 3 5 7"];

const solution = () => {
  const arr = input[0].split(" ").map((el) => Number(el));
  let result = arr.filter((el) => el === 2).length;

  for (let num of arr) {
    let temp = false;
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        temp = false;
        break;
      } else temp = true;
    }
    if (temp === true) result += 1;
  }

  return result;
};

console.log(solution());
