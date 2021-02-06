const { defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature("../features/sample.feature", {
  loadRelativePath: true,
});

defineFeature(feature, (test) => {
  test("Access Google Homepage", ({ when, then }) => {
    when("the user enters Google URL", async () => {
      await page.goto("https://google.com");
    });

    then("the user can see Google Homepage", async () => {
      await expect(page.title()).resolves.toMatch("Google");
    });
  });
});

// describe("Google", () => {
//   beforeAll(async () => {
//     await page.goto("https://google.com");
//   });
//   it("should be titled Google", async () => {
//     await expect(page.title()).resolves.toMatch("Google");
//   });
// });
