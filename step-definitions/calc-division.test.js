const { defineFeature, loadFeature } = require("jest-cucumber");
const request = require("supertest");
const feature = loadFeature("../features/calc-division.feature", {
  loadRelativePath: true,
});

const {
  homepage,
  digitSelector,
  operationSelector,
  outputSelector,
} = require("../Helpers/Selectors");
const Calculator = require("../calculator");

defineFeature(feature, (test) => {
  beforeAll(async () => {
    await page.goto(homepage);
    const response = await request("https://output.jsbin.com/hudape/")
      .get("1/")
      .expect(200);
  });

  const calc = new Calculator();

  test("Divide two numbers", async ({ given, and, when, then }) => {
    given(/^the user clicks on the number (\d+)$/, async (number) => {
      const arrayOfDigits = Array.from(String(number), Number);

      for (i = 0; i < arrayOfDigits.length; i++) {
        const digitButton = digitSelector(arrayOfDigits[i]);

        const btnText = await page.$eval(digitButton, (el) => {
          el.click();
          return el.textContent;
        });
        expect(arrayOfDigits[i]).toEqual(Number(btnText));
      }

      calc.num1 = number;
    });

    and(/^clicks the "(.*)" button$/, async (operand) => {
      const operandSelector = operationSelector(operand);

      const operandText = await page.$eval(operandSelector, (el) => {
        el.click();
        return el.textContent;
      });

      calc.operation = operand;
      expect(operand).toEqual(operandText);
    });

    when(/^the user clicks on the number (\d+)$/, async (number) => {
      const arrayOfDigits = Array.from(String(number), Number);

      for (i = 0; i < arrayOfDigits.length; i++) {
        const digitButton = digitSelector(arrayOfDigits[i]);

        const btnText = await page.$eval(digitButton, (el) => {
          el.click();
          return el.textContent;
        });
        expect(arrayOfDigits[i]).toEqual(Number(btnText));
      }
      calc.num2 = number;
    });

    and(/^clicks the "(.*)" button$/, async (operand) => {
      const operandSelector = operationSelector(operand);

      const operandText = await page.$eval(operandSelector, (el) => {
        el.click();
        return el.textContent;
      });
      expect(operand).toEqual(operandText);
    });

    then(/^the result should be "(.*)"$/, async (number) => {
      const output = await page.$eval(outputSelector, (el) => el.textContent);

      expect(output).toEqual(number);
      expect(Number(output)).toEqual(calc.Result);
    });
  });
});
