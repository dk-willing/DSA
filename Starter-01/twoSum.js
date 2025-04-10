function twoSum(arr, targetNum) {
  const indexArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let y = i; y < arr.length; y++) {
      if (arr[i] + arr[y] === targetNum) {
        indexArr.push(i, y);
      }
    }
  }

  return indexArr;
}

console.log(twoSum([1, 3, 7, 9, 2], 11));
