const words = ['fish', 'sand', 'sun', 'water']

const matchers = (words) => {
  return words.join('|')
}

const sumOfABeach = (text) => {
  if (!text) return 0
  
  let count = 0
  const regex = new RegExp(matchers(words), 'gi')
  const match = text.match(regex)
  
  return (match) ? (count + match.length) : count 
}

module.exports = sumOfABeach