const input = "UNUCIC";

function solution() {
  const a = input.split("");
  let result = 0;
  for (let i of a) {
    if (i === "A" || i === "B" || i === "C") result += 3;
    else if (i === "D" || i === "E" || i === "F") result += 4;
    else if (i === "G" || i === "H" || i === "I") result += 5;
    else if (i === "J" || i === "K" || i === "L") result += 6;
    else if (i === "M" || i === "N" || i === "O") result += 7;
    else if (i === "P" || i === "Q" || i === "R" || i === "S") result += 8;
    else if (i === "T" || i === "U" || i === "V") result += 9;
    else result += 10;
  }
  return result;
}

console.log(solution());
