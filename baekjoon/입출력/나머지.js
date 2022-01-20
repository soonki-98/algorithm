const input = ["5", "8", "4"];

function solution() {
  const [A, B, C] = [Number(input[0]), Number(input[1]), Number(input[2])];
  return `${(A + B) % C}\n${((A % C) + (B % C)) % C}\n${(A * B) % C}\n${
    ((A % C) * (B % C)) % C
  }`;
}

console.log(solution());
