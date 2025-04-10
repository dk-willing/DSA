function integerReversal(int) {
  return `${int} ---> ${
    parseInt(int.toString().split("").reverse().join("")) * Math.sign(int)
  }`;
}

console.log(integerReversal(-13459));
