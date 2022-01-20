const input = " The last character is a blank ";

function solution() {
  return input.split(" ").filter((el) => el !== "").length;
}

console.log(solution());
