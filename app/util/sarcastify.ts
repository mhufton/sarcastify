export const sarcastify = (str: string) => {
  const isChar = /^[a-zA-Z]+$/
  const splitStr = str.toLowerCase().split("")
  const nonCharIndexes = new Map()
  const chars = []

  // loop through string and store non-characters
  for (let i = 0; i < splitStr.length; i++) {
    if (!isChar.test(splitStr[i])) {
      nonCharIndexes.set(i, splitStr[i])
    } else {
      chars.push(splitStr[i])
    }
  }

  // Capitalise every other character
  for (let i = 0; i < chars.length; i++) {
    if (isChar.test(chars[i]) && i % 2 === 0) {
      chars[i] = chars[i].toUpperCase()
    }
  }

  // Insert non-characters back into the string
  for (const [key, value] of Array.from(nonCharIndexes.entries())) {
    chars.splice(key, 0, value)
  }

  return chars.join("")
}
