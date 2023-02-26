const maxChar = (str) => {
  const charMap = {}
  let max = 0
  let maxChar = ''
  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1
  }
  for (let char in charMap) {
    if (charMap[char] >  max) {
        max = charMap[char]
        maxChar = char
    }
  }
  return maxChar;
}

console.log(maxChar("apple 1234456888"));