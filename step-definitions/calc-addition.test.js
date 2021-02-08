const { defineFeature, loadFeature } = require("jest-cucumber");
const request = require("supertest");
const feature = loadFeature("../features/calc-addition.feature", {
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

  test("Add two numbers", async ({ given, and, when, then }) => {
    given(/^the user clicks on the number (\d+)$/, async (number) => {
      //convert the number into array of digits to handle multiple digits click
      const arrayOfDigits = Array.from(String(number), Number);

      //find selector for every digit
      for (i = 0; i < arrayOfDigits.length; i++) {
        const digitButton = digitSelector(arrayOfDigits[i]);

        //click on the digit
        const btnText = await page.$eval(digitButton, (el) => {
          el.click();
          return el.textContent;
        });

        //compare input to text of button
        expect(arrayOfDigits[i]).toEqual(Number(btnText));
      }

      //pass the input to Calculator object
      calc.num1 = number;
    });

    and(/^clicks the "(.*)" button$/, async (operand) => {
      //find selector for operand
      const operandSelector = operationSelector(operand);

      //click on the operand
      const operandText = await page.$eval(operandSelector, (el) => {
        el.click();
        return el.textContent;
      });

      //compare input to text of button
      expect(operand).toEqual(operandText);

      //pass the input to Calculator object
      calc.operation = operand;
    });

    when(/^the user clicks on the number (\d+)$/, async (number) => {
      //convert the number into array of digits to handle multiple digits click
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

      //Compare the output to expected output in feature file and calculation in Calculator class
      expect(output).toEqual(number);
      expect(Number(output)).toEqual(calc.Result);
      page.close();
    });
  });
});
