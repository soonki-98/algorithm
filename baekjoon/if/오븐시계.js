const input = ["17 40", "80"];

function solution() {
  const [hour, min] = input[0].split(" ").map((el) => Number(el));
  let [plusHour, plusMin] = [
    Math.floor(Number(input[1]) / 60),
    Number(input[1]) % 60,
  ];

  let [h, m] = [hour + plusHour, min + plusMin];

  if (m === 60) {
    h += 1;
    m = 0;
  }
  if (h === 24) {
    h = 0;
  }

  console.log(h, m);
}

solution();
