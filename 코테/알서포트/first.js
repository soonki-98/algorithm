function solution(orders) {
  const datas = orders.map((el) => el.split(" "));
  const users = [...new Set(datas.map((el) => el[0]))];
  const obj = removeDuplication(users, setUserOrderObj(datas));

  return printUserWhoOrderedMost(users, obj);
}

function setUserOrderObj(datas) {
  const obj = {};
  for (let d of datas) {
    if (obj[d[0]]) {
      d.forEach((el, idx) => idx !== 0 && obj[d[0]].push(el));
    } else {
      obj[d[0]] = [...d].slice(1);
    }
  }

  return obj;
}

function removeDuplication(users, obj) {
  for (let u of users) {
    obj[u] = [...new Set(obj[u])].length;
  }
  return obj;
}

function printUserWhoOrderedMost(users, obj) {
  const result = [];
  const max = Math.max(...Object.values(obj));
  for (let u of users) {
    if (obj[u] === max) result.push(u);
  }
  return result.sort();
}
