const input = [20, 7, 23, 19, 10, 15, 25, 8, 13];

const solution = () => {
  const sum = input.reduce((acc, cur) => acc + cur);
  const temp = [];

  for (let i = 0; i < input.length - 1; i++) {
    let isBreak = false;
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === sum - 100) {
        temp.push(input[i], input[j]);
        isBreak = true;
        break;
      }
    }
    if (isBreak) break;
  }
  input
    .filter((el) => el !== temp[0] && el !== temp[1])
    .sort((a, b) => a - b)
    .forEach((el) => console.log(el));
};

solution();
