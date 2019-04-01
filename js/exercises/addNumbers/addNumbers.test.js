const addNumbers = require("./addNumbers");

describe("addNumbers", () => {
  it("adds two numbers together", () => {
    expect(addNumbers(2, 3)).toBe(5);
  });
});
