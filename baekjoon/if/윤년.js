const input = 1999;

const solution = () => {
  return (input % 4 === 0 && input % 100 !== 0) ||
    (input % 4 === 0 && input % 400 === 0)
    ? 1
    : 0;
};

console.log(solution());
