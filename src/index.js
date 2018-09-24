module.exports = function longestConsecutiveLength(array) {
  
  if (array.length == 0) return 0;
  if (array.length == 1) return 1;

  array.sort((a, b) => a - b);
  
  let count = 1,
      maxCount = 0;
  
  for (let i = 0; i < array.length; i++) {
      if (array[i] - array[i-1] == 1) {
        count++;
      } else if (array[i] - array[i-1] > 1) {
        maxCount = count > maxCount ? count : maxCount;
        count = 1;
      }
  }
  return maxCount;
}
