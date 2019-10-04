const parseQueryToString = require("./parseQueryToString");

describe("parseQueryToString", () => {
  it("returns '?' when an empty query object is given", () => {
    expect(parseQueryToString({})).toBe("?");
  });
  it("returns valid string for a query with one key value pair", () => {
    const query = {name: "alice"};
    expect(parseQueryToString(query)).toBe("?name=alice");
  });

  it("returns valid string for a query with two key value pairs", () => {
    const query = {name: "alice", age: 24};
    expect(parseQueryToString(query)).toBe("?name=alice&age=24");
  });
});
