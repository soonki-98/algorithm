const numbers = [5, 10, 7, 3, 1, 9, 6, 4, 2, 8];

const bubbleSort = (numbers) => {
  for (let i = numbers.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }
    }
  }
  return numbers;
};

console.log(bubbleSort(numbers));
