const input = "3 7";

const solution = () => {
  let result = 0;
  let str = "";
  for (let i = 1; i < 50; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${i} `;
    }
  }

  for (let i = Number(input[0]) - 1; i < Number(input[2]); i++) {
    result += Number(str.split(" ")[i]);
  }
  return result;
};

console.log(solution());
