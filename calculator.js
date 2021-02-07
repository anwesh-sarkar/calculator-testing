function Calculator(operation, x, y) {
  switch (operation) {
    case "add":
      return x + y;
    case "subtract":
      if (x > y) {
        return x - y;
      } else {
        return "ERR";
      }
    case "multiply":
      return x * y;
    case "divide":
      return x / y + (x % y);
    case "square":
      return x ** y;
    default:
      return "ERR";
  }
}

module.exports = Calculator;
