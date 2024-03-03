function increaseNumByPosition(arr) {
  return arr.map((num, index) => {
    let newNum = num + index + 1;
    if (newNum >= 10) {
      return newNum % 10;
    }
    else {
      return newNum;
    }
  });
}

console.log(increaseNumByPosition([1, 2, 4]));
console.log(increaseNumByPosition([4, 6, 9, 1, 3]));