//find the selector of the digit
const digitSelector = (num) => {
  const button = `\[value="${num}"]`;
  return button;
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
  digitSelector,
  operationSelector,
  outputSelector,
};
