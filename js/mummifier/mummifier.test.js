const mummifier = require("./mummifier");

describe("Mummifier", () => {
  describe("strings with only consonants", () => {
    it("returns an empty string if empty string is given", () => {
      expect(mummifier("")).toBe("");
    });

    it("returns the same string if no vowels are present", () => {
      expect(mummifier("b")).toBe("b");
    });

    it("returns the same string if no vowels are present", () => {
      expect(mummifier("xyz")).toBe("xyz");
    });
  });

  describe("strings with only vowels", () => {
    it("returns 'mummy' when 'a' is given", () => {
      expect(mummifier("a")).toBe("mummy");
    });

    it("returns 'mummy' when 'e' is given", () => {
      expect(mummifier("e")).toBe("mummy");
    });

    it("returns 'mummy' when 'i' is given", () => {
      expect(mummifier("i")).toBe("mummy");
    });

    it("returns 'mummy' when 'o' is given", () => {
      expect(mummifier("o")).toBe("mummy");
    });

    it("returns 'mummy' when 'u' is given", () => {
      expect(mummifier("u")).toBe("mummy");
    });

    it("returns 'mummy when 'aa' is given", () => {
      expect(mummifier("aa")).toBe("mummy");
    });

    it("returns 'mummy when 'aei' is given", () => {
      expect(mummifier("aei")).toBe("mummy");
    });

    it("returns 'mummy when 'aeio' is given", () => {
      expect(mummifier("aeio")).toBe("mummy");
    });

    it("returns 'mummy when 'aeiou' is given", () => {
      expect(mummifier("aeiou")).toBe("mummy");
    });
  });

  describe("strings with 30% or more vowels", () => {
    it("returns 'mummybc string when 'abc' is given", () => {
      expect(mummifier("abc")).toBe("mummybc");
    });

    it("returns 'mummybcdmummy' string when 'abcde' is given", () => {
      expect(mummifier("abcde")).toBe("mummybcdmummy");
    });
  });

  describe("strings with fewer than 30% vowels", () => {
    it("returns the same string when 'abcd' is given", () => {
      expect(mummifier("abcd")).toBe("abcd");
    });
  });
});
