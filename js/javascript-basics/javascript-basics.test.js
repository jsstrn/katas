const {re, birthdays} = require("./javascript-basics");

describe("JavaScript Basics", () => {
  describe("Exercise 1", () => {
    it("transforms a list of names into an object", () => {
      expect(re(["apples", "bananas", "cherries"])).toEqual({
        apples: 0,
        bananas: 0,
        cherries: 0
      });
    });
  });

  describe("Exercise 2", () => {
    it("should ", () => {
      const contacts = [
        {name: "John", birthday: "9 October 1940"},
        {name: "Paul", birthday: "18 June 1942"},
        {name: "Ringo", birthday: "7 July 1940"},
        {name: "Adam", birthday: "9 October 1940"},
        {name: "Angeline", birthday: "18 June 1942"},
        {name: "Anita", birthday: "7 July 1940"}
      ];

      expect(birthdays(contacts)).toEqual({
        "7 July 1940": ["Ringo", "Anita"],
        "9 October 1940": ["John", "Adam"],
        "18 June 1942": ["Paul", "Angeline"]
      });
    });
  });
});
