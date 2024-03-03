function sumTwoSmallest(arr) {
  let smallestFirst = Infinity;
  let smallestSecond = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestFirst) {
      smallestSecond = smallestFirst;
      smallestFirst = arr[i];
    }
    else if (arr[i] < smallestSecond) {
      smallestSecond = arr[i];
    }
  }
  return (smallestFirst + smallestSecond);
}

console.log(sumTwoSmallest([19, 5, 42, 2, 77]));
console.log(sumTwoSmallest([4, 12, 42, 56, 77]));