const input = "500613009";

console.log(
  input
    .split("")
    .map((el) => Number(el))
    .sort((a, b) => b - a)
    .join("")
);
