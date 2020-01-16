const phoneDirectory = require("./phoneDirectory");

describe("Phone Directory", () => {
  it("returns the correct phone number", () => {
    const contact = "+123 11 Cross Street <John Doe>";

    expect(phoneDirectory(contact).phone).toBe("+123");
    expect(phoneDirectory(contact).name).toBe("John Doe");
    expect(phoneDirectory(contact).address).toBe("11 Cross Street");
  });

  describe("Match phone number", () => {
    it.skip("returns the correct phone number", () => {
      const contact = "+123-456 8 China Street <Bob Dylan>";

      expect(phoneDirectory(contact).phone).toBe("+123-456");
    });
  });
});
