const sumOfABeach = (text) => {
  if (!text) return 0
  
  let count = 0
  const match = text.match(/fish|sand|sun|water/gi)
  
  return (match) ? (count + match.length) : count 
}

module.exports = sumOfABeach