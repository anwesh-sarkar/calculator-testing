//class to perform basic arithmetic operations

class Calculator {
  constructor(operation, num1, num2, result, ...remaining) {
    this.operation = operation;
    this.num1 = num1;
    this.num2 = num2;
    this.remaining = remaining;
    this.result = result;
  }

  get Result() {
    if (
      this.operation !== undefined &&
      this.num1 !== undefined &&
      this.num2 !== undefined
    ) {
      return this.calculate();
    }
  }

  calculate() {
    switch (this.operation) {
      case "PLUS":
        return (this.result = Number(this.num1) + Number(this.num2));
      case "MINUS":
        return (this.result = Number(this.num1) - Number(this.num2));
      case "MULT":
        return (this.result = Number(this.num1) * Number(this.num2));
      case "DIV":
        return (this.result = Number(this.num1) / Number(this.num2));
      case "SQUARE":
        return (this.result = Number(this.num1) ** Number(this.num2));
      default:
        return this.result;
    }
  }
}

module.exports = Calculator;
