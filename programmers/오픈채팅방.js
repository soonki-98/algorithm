function solution(record) {
  const arr = record.map((el) => el.split(" "));
  const obj = {};

  arr.forEach((el) => {
    if (el[2] !== undefined) obj[el[1]] = el[2];
  });

  return arr.reduce((res, ele) => {
    if (ele[0] === "Enter") res.push(`${obj[ele[1]]}님이 들어왔습니다.`);
    else if (ele[0] === "Leave") res.push(`${obj[ele[1]]}님이 나갔습니다.`);
    return res;
  }, []);
}

const input = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

console.log(solution(input));
