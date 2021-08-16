function solution(nums) {
  const getPocketmon = Math.floor(nums.length / 2);
  const set = new Set(nums);
  const kindOfPocketmon = [...set].length;
  return kindOfPocketmon > getPocketmon ? getPocketmon : kindOfPocketmon;
}
