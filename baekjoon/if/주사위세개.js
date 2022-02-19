const input = "3 3 6";

function solution() {
  const dices = input.split(" ").map((el) => Number(el));
  const set = [...new Set(dices)];

  switch (set.length) {
    case 3:
      return Math.max(...set) * 100;
    case 2:
      return (
        1000 +
        set.filter((el) => dices.filter((le) => le === el).length === 2)[0] *
          100
      );
    case 1:
      return 10000 + set[0] * 1000;
  }
}

console.log(solution());
