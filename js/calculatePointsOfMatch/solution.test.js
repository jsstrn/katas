const {
  calculatePointsForOneMatch,
  calculatePointsForAllMatches
} = require("./solution");

describe("Total amount of points", () => {
  describe("For one match", () => {
    it("returns 3 points if our team wins the match", () => {
      expect(calculatePointsForOneMatch("3:2")).toBe(3);
    });

    it("returns 0 points if our team loses the match", () => {
      expect(calculatePointsForOneMatch("1:2")).toBe(0);
    });

    it("returns 1 point if our team draws", () => {
      expect(calculatePointsForOneMatch("2:2")).toBe(1);
    });
  });

  describe("For multiple matches", () => {
    it("returns correct score for all matches", () => {
      const matches = ["1:1", "2:0", "0:3"];
      expect(calculatePointsForAllMatches(matches)).toBe(4);
    });
  });
});
