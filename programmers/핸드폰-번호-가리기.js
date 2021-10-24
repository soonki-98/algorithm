function solution(phone_number) {
  const a = phone_number.slice(0, -4);
  let b = "";
  for (let i of a) {
    b += "*";
  }
  return phone_number.replace(a, b);
}
