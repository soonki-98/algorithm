const input = ["2", "3 ABC", "5 /HBC"];

function solution() {
  let result = "";
  for (let i = 1; i <= Number(input[0]); i++) {
    const [number, string] = [
      Number(input[i].split(" ")[0]),
      input[i].split(" ")[1],
    ];
    result += string
      .split("")
      .map((el) => el.repeat(number))
      .join("");
    result += "\n";
  }
  return result;
}

console.log(solution());
