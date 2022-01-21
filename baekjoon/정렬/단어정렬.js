const N = 13;
const arr = [
  "but",
  "i",
  "wont",
  "hesitate",
  "no",
  "more",
  "no",
  "more",
  "it",
  "cannot",
  "wait",
  "im",
  "yours",
];

function solution() {
  const set = [...new Set(arr)];
  return set
    .sort()
    .sort((a, b) => a.length - b.length)
    .join("\n");
}

console.log(solution());
