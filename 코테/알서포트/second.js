function solution(s) {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const obj = { U: 0, D: 0, R: 0, L: 0 };
    obj[s[i]] += 1;
    for (let j = i + 1; j < s.length; j++) {
      obj[s[j]] += 1;
      if (obj["U"] === obj["D"] && obj["R"] === obj["L"]) result += 1;
    }
  }

  return result;
}
