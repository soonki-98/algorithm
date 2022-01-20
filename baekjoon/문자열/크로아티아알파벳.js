const input = "ljes=njak";

function solution() {
  const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let a = input;
  let result = 0;
  croatia.forEach((el) => {
    if (a.includes(el)) {
      const b = new RegExp(el, "gi");
      result += a.match(b).length;
      a = a.replace(b, "1");
    }
  });
  return a.split("").filter((el) => el !== "1").length + result;
}

console.log(solution());
