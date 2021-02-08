const digitSelector = (num) => {
  const button = `\[value="${num}"]`;
  return button;
};
const operationSelector = (operand) => {
  console.log(operand);
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

const outputSelector = "#output";

module.exports = {
  homepage: "https://output.jsbin.com/hudape/1/",
  digitSelector,
  operationSelector,
  outputSelector,
};
