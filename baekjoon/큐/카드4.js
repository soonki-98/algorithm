const N = "6";

function solution() {
  const cards = Array.from({ length: Number(N) }, (_, idx) => idx + 1);

  while (true) {
    if (cards.length === 1) break;
    cards.shift();
    cards.push(cards.shift());
  }
  return cards[0];
}

console.log(solution());
