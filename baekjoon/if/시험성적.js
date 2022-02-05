const input = 100;

const solution = () => {
  const grade = Number(input);
  if (grade > 89) return "A";
  else if (grade > 79) return "B";
  else if (grade > 69) return "C";
  else if (grade > 59) return "D";
  else return "F";
};

console.log(solution());
