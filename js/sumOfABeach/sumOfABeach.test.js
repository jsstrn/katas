const sumOfABeach = require('./sumOfABeach')

describe('sum of a beach', () => {
  it('returns 0 when no input is provided', () => {
    expect(sumOfABeach()).toBe(0)
  })

  it('returns 0 when empty string is provided', () => {
    const text = ''
    expect(sumOfABeach(text)).toBe(0)
  })

  describe('Matches fish', () => {
    it("returns 1 when 'fish' is provided", () => {
      const text = 'fish'
      expect(sumOfABeach(text)).toBe(1)
    })

    it("returns 1 when 'FISH' is provided", () => {
      const text = 'FISH'
      expect(sumOfABeach(text)).toBe(1)
    })

    it("returns 2 when 'fishy Fishes' is provided", () => {
      const text = 'fishy Fishes'
      expect(sumOfABeach(text)).toBe(2)
    })
    
    it("returns 3 when 'fishes along a fishy fish farm' is provided", () => {
      const text = 'fishes along a fishy fish farm'
      expect(sumOfABeach(text)).toBe(3)
    })
  });

  describe('Matches combination of words', () => {
    it("returns 2 when 'fishes in the sand' is provided", () => {
      const text = 'fishes in the sand'
      expect(sumOfABeach(text)).toBe(2)
    })
    
    it("returns 6 when 'sandsandsandfishfishfish' is provided", () => {
      const text = 'sandsandsandfishfishfish'
      expect(sumOfABeach(text)).toBe(6)
    })
    it("returns 4 when 'sun sand and fishes in the water' is provided", () => {
      const text = 'sun sand and fishes in the water'
      expect(sumOfABeach(text)).toBe(4)
    })
  });

})
