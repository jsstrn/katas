const whoLikesThis = require("./whoLikesThis");

describe("Who likes this?", () => {
  it("returns 'no one likes this when no input is given' ", () => {
    expect(whoLikesThis()).toBe("no one likes this");
  });

  it("returns 'no one likes this when empty array is given' ", () => {
    expect(whoLikesThis([])).toBe("no one likes this");
  });
});
