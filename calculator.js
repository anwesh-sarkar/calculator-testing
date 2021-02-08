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

  add() {
    return (this.result = Number(this.num1) + Number(this.num2));
  }

  calculate() {
    console.log("inside function");

    switch (this.operation) {
      case "PLUS":
        return (this.result = Number(this.num1) + Number(this.num2));
      case "MINUS":
        if (this.num1 > this.num2) {
          return (this.result = Number(this.num1) - Number(this.num2));
        } else {
          return (this.result = "ERR");
        }
      case "MULT":
        return (this.result = Number(this.num1) * Number(this.num2));
      case "DIV":
        return (this.result =
          Number(this.num1) / Number(this.num2) +
          (Number(this.num1) % Number(this.num2)));
      case "SQUARE":
        return (this.result = Number(this.num1) ** Number(this.num2));
      default:
        return this.result;
    }
  }
}

module.exports = Calculator;
