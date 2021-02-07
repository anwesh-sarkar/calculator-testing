const { defineFeature, loadFeature } = require("jest-cucumber");
const request = require("supertest");
const feature = loadFeature("../features/calculator.feature", {
  loadRelativePath: true,
});
const Calculator = require("../calculator");

defineFeature(feature, (test) => {
  test("Add two numbers", ({ given, when, then }) => {
    let firstDigit, secondDigit, operation;
    beforeAll(async () => {
      await page.goto("https://output.jsbin.com/hudape/1/");
      const response = await request("https://output.jsbin.com/hudape/")
        .get("1/")
        .expect(200);
    });
    given(/^the user clicks on the number (\d+)$/, (number) => {
      firstDigit = number;
      console.log(firstDigit);
    });
  });
});
