function chuck(arr, size) {
  const chunked = [];

  let index = 0;

  while (index < arr.length) {
    const newChunk = arr.slice(index, index + size);
    console.log("---------- ", newChunk);
    chunked.push(newChunk);
    index += size;
  }

  return chunked;
}

console.log(chuck([1, 2, 3, 4, 5, 6, 7, 8], 3));
