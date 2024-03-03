function basicMathOperations(operation, firstNum, secondNum) {
  if (operation == '+') {
    return (firstNum + secondNum);
  }
  else if (operation == '-') {
    return (firstNum - secondNum);
  }
  else if (operation == '*') {
    return (firstNum * secondNum);
  }
  else if (operation == '/') {
    return (firstNum / secondNum);
  }
}

console.log(basicMathOperations('+', 4, 7));
console.log(basicMathOperations('-', 15, 18));
console.log(basicMathOperations('*', 5, 5));
console.log(basicMathOperations('/', 49, 7));