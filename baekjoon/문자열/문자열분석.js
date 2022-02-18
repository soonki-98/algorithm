const input = [
  "This is String",
  "SPACE    1    SPACE",
  " S a M p L e I n P u T     ",
  "0L1A2S3T4L5I6N7E8",
  "",
  "1".repeat(100),
  "       ",
  " ",
  "",
];

const solution = () => {
  for (let i of input) {
    if (i === "") continue;
    let result = "";
    result += i.match(/[a-z]/g) ? i.match(/[a-z]/g).length + " " : "0 ";
    result += i.match(/[A-z]/g) ? i.match(/[A-Z]/g).length + " " : "0 ";
    result += i.match(/\d/g) ? i.match(/\d/g).length + " " : "0 ";
    result += i.match(/\s/g) ? i.match(/\s/g).length + " " : "0 ";
    console.log(result);
  }
};

solution();
