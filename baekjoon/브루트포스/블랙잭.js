const input = ["10 500", "93 181 245 214 315 36 185 138 216 295"];

function solution() {
  const M = Number(input[0].split(" ")[1]);
  const cards = input[1].split(" ").map((el) => Number(el));
  let result = 0;
  for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        if (
          cards[i] + cards[j] + cards[k] > result &&
          cards[i] + cards[j] + cards[k] <= M
        ) {
          result = cards[i] + cards[j] + cards[k];
        }
      }
    }
  }
  return result;
}

console.log(solution());
