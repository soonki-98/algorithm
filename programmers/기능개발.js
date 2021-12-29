function solution(progresses, speeds) {
  let count = 0;
  const result = [];

  while (count < speeds.length) {
    progresses = progresses.map((el, index) => el + speeds[index]);

    let temp = 0;

    while (count < speeds.length && progresses[count] >= 100) {
      temp += 1;
      count += 1;
    }

    if (temp !== 0) result.push(temp);
  }
  return result;
}
