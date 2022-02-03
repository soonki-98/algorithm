const input = [
  "So when I die (the [first] I will see in (heaven) is a score list).",
  "[ first in ] ( first out ).",
  "Half Moon tonight (At least it is better than no Moon at all].",
  "A rope may form )( a trail in a maze.",
  "Help( I[m being held prisoner in a fortune cookie factory)].",
  "([ (([( [ ] ) ( ) (( ))] )) ]).",
  " .",
  ".",
];

function solution() {
  const arr = input
    .map((el) => el.split(""))
    .map((el) =>
      el.filter((le) => le === "(" || le === ")" || le === "[" || le === "]")
    );
  arr.pop();
  const arrLen = arr.length;
  let result = "";
  for (let i = 0; i < arrLen; i++) {
    const len = arr[i].length;
    if (len === 0) result += "yes\n";
    else {
      const temp = [];
      temp.push(arr[i].shift());
      for (let j = 0; j < len; j++) {
        temp.push(arr[i].shift());
        if (temp[temp.length - 1] === ")" && temp[temp.length - 2] === "(") {
          temp.pop();
          temp.pop();
        } else if (
          temp[temp.length - 1] === "]" &&
          temp[temp.length - 2] === "["
        ) {
          temp.pop();
          temp.pop();
        }
      }
      temp.filter((el) => el !== undefined).length > 0
        ? (result += "no\n")
        : (result += "yes\n");
    }
  }
  return result;
}

console.log(solution());
