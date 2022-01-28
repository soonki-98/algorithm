const input = "0 4 2 5 6";

console.log(input.split(" ").reduce((acc, cur) => acc + cur ** 2, 0) % 10);
