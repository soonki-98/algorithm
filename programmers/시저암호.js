function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
    } else if (s.charCodeAt(i) + n > 90 && s.charCodeAt(i) < 97) {
      const a = n - (90 - s.charCodeAt(i));
      result += String.fromCharCode(64 + a);
    } else if (s.charCodeAt(i) + n > 122) {
      const a = n - (122 - s.charCodeAt(i));
      result += String.fromCharCode(96 + a);
    } else {
      result += String.fromCharCode(s.charCodeAt(i) + n);
    }
  }
  return result;
}
