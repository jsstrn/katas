const hasEnoughVowels = text => {
  const threshold = 30;

  const vowels = text.match(/[aeiou]/gi);

  if (!vowels) {
    return false;
  }

  const percentage = (vowels.length / text.length) * 100;
  return percentage >= threshold;
};

const mummifier = text => {
  if (hasEnoughVowels(text)) {
    const pattern = new RegExp("[aeiou]+", "gi");
    return text.replace(pattern, "mummy");
  }
  return text;
};

module.exports = mummifier;
