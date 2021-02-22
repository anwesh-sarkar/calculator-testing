const Calculator = require("../calculator");

//find the selector of the digit
const digitSelector = (num) => {
  const button = `\[value="${num}"]`;
  return button;
};

//find all selectors for all digits and click on their buttons
const allDigitSelectors = (num) => {
  const arrayOfDigits = Array.from(String(num), Number);

  //find selector for every digit
  arrayOfDigits.forEach(async (input) => {
    const digitButton = Calculator.findDigitSelector(input);
    try {
      //click on the digit
      const btnText = await page.$eval(digitButton, (el) => {
        el.click();
        return el.textContent;
      });
      //compare input to text of button
      expect(input).toEqual(Number(btnText));
    } catch (err) {
      console.log(err);
    }
  });
};

//find the selector of the operand
const operationSelector = (operand) => {
  const operations = [
    { name: "EQ", value: "=" },
    { name: "PLUS", value: "+" },
    { name: "MINUS", value: "-" },
    { name: "MULT", value: "×" },
    { name: "DIV", value: "/" },
  ];
  const selectorVal = operations.find((op) => {
    if (op.name === operand) {
      return op.value;
    }
  });
  const button = `\[value="${selectorVal.value}"]`;
  return button;
};

//find the selector of the output div
const outputSelector = "#output";

module.exports = {
  homepage: "https://output.jsbin.com/hudape/1/",
  allDigitSelectors,
  digitSelector,
  operationSelector,
  outputSelector,
};
