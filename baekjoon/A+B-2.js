const input = ["1", "2"];
console.log(input.map((el) => Number(el)).reduce((acc, cur) => acc + cur));
