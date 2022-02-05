const N = 5;
const quizResult = [
  "OOXXOXXOOO",
  "OOXXOOXXOO",
  "OXOXOXOXOXOXOX",
  "OOOOOOOOOO",
  "OOOOXOOOOXOOOOX",
];

const solution = () => {
  quizResult.forEach((quiz) => {
    let [total, score] = [0, 0];
    quiz.split("").forEach((le) => {
      score = le === "O" ? score + 1 : 0;
      total += score;
    });
    console.log(total);
  });
};

solution();
