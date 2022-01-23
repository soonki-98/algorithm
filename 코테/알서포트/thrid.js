function solution(maps) {
  const newMaps = setBorderZero(maps);
  return measuerCircumference(newMaps);
}

function setBorderZero(maps) {
  const newMaps = [...maps];
  newMaps.push(Array.from({ length: maps.length }, () => 0));
  newMaps.unshift(Array.from({ length: maps.length }, () => 0));
  newMaps.forEach((_, idx) => {
    newMaps[idx].push(0);
    newMaps[idx].unshift(0);
  });
  return newMaps;
}

function measuerCircumference(newMaps) {
  let result = 0;
  for (let i = 1; i < newMaps.length - 1; i++) {
    for (let j = 1; j < newMaps[i].length - 1; j++) {
      if (newMaps[i][j] === 1) {
        if (newMaps[i - 1][j] === 0) result += 1;
        if (newMaps[i][j - 1] === 0) result += 1;
        if (newMaps[i + 1][j] === 0) result += 1;
        if (newMaps[i][j + 1] === 0) result += 1;
      }
    }
  }
  return result;
}
