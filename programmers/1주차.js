function solution(price, money, count) {
  for (let i = 1; i < count + 1; i++) {
    money -= price * i;
  }
  return money < 0 ? Math.abs(money) : 0;
}
