/**
 * Method to return a list of most repeated characters
 *
 * @param {String} text
 * @returns list of most repeated characteres
 */

const characters = text => {
  const stringText = String(text)
  const repeatedChars = stringText.match(/(\w)\1+/g)
  if (!repeatedChars) return repeatedChars

  const result = repeatedChars.reduce((acc, char) =>
    [...acc, repeatedChars
      .filter(repeatedChar => repeatedChar.includes(char))
      .reduce((a, b) => a.length > b.length ? a : b)]
    , []);

  return Array.from(new Set(result))
}



module.exports = characters
