function solution(a, b) {
  const date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return date[new Date(2016, a - 1, b).getDay()];
}
