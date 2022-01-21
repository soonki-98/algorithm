const input = ["3 4", "1 1", "1 -1", "2 2", "3 3"];

function solution() {
  const location = input
    .map((el) => el.split(" "))
    .sort((a, b) => {
      return Number(a[0]) === Number(b[0])
        ? Number(a[1]) - Number(b[1])
        : Number(a[0]) - Number(b[0]);
    });

  return location.join("\n").replace(/,/g, " ");
}

console.log(solution());
