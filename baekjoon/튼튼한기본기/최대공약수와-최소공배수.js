const input = "24 18";

const solution = () => {
  const numbers = input
    .split(" ")
    .map((el) => Number(el))
    .sort((a, b) => a - b);

  const AB = numbers[0] * numbers[1];
  let G = 0;

  while (true) {
    const n = numbers[1] % numbers[0];
    if (n === 0) {
      G = numbers[0];
      break;
    } else {
      numbers[1] = numbers[0];
      numbers[0] = n;
    }
  }

  console.log(G);
  console.log(AB / G);
};
solution();
